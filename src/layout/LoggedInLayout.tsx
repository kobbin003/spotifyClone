import React, {
	Dispatch,
	MouseEvent,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from "react";
import Sidebar from "../components/LoggedIn/SideBar/Sidebar";
import MainContent from "../components/LoggedIn/MainContent/MainContent";
import { Container, LoadingMsg } from "./LoggedInLayout.style";
import { useNavigate } from "react-router-dom";
import { useGetAccessToken } from "../hooks/useGetAccessToken";
import { ErrorBoundary } from "react-error-boundary";
import { errorBoundaryFallback } from "./errorBoundaryFallback";
import EditPlaylistModal from "../components/LoggedIn/SideBar/component/editPlaylistModal/EditPlaylistModal";
import getUserProfile, {
	UserProfileType,
} from "../hooks/spotify-data/getUserProfile";

const widthHandleDragger: number = 2;

interface ShowModalContextType {
	showModal: {
		show: boolean;
		playlistId: string;
	};
	setShowModal: Dispatch<
		React.SetStateAction<{
			show: boolean;
			playlistId: string;
		}>
	>;
}

interface UserProfileContext {
	userProfile: UserProfileType | null;
	setUserProfile: React.Dispatch<React.SetStateAction<UserProfileType | null>>;
}

export const ShowModalContext = createContext<ShowModalContextType>({
	showModal: { show: false, playlistId: "" },
	setShowModal: () => {
		show: false;
		playlistId: "";
	},
});

export const UserProfileContext = createContext<UserProfileContext | null>(
	null
);

const LoggedInLayout: React.FC = () => {
	const navigate = useNavigate();

	const [width, setWidth] = useState(14.5);
	const [isDraggable, setIsDraggable] = useState(false);
	const [tokenSet, setTokenSet] = useState(false);
	const [showModal, setShowModal] = useState<{
		show: boolean;
		playlistId: string;
	}>({ show: false, playlistId: "" });
	const [userProfile, setUserProfile] = useState<UserProfileType | null>(null);
	const { data, error, isLoading } = useGetAccessToken();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		!isDraggable ? setIsDraggable(true) : setIsDraggable(false);
		// console.log("mouse enter", isDraggable);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if (isDraggable) {
			const newWidth = e.clientX / 16;
			setWidth(newWidth);
		}
	};

	useEffect(() => {
		// console.log("accessToken", data);
		//* if code not found, then navigate to "/"
		if (!localStorage.getItem("code")) navigate("/");
		if (data?.access_token) {
			setTokenSet(true);
		}
	}, [data]);

	return (
		<ErrorBoundary FallbackComponent={errorBoundaryFallback}>
			<ShowModalContext.Provider value={{ showModal, setShowModal }}>
				<UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
					{showModal.show && <EditPlaylistModal />}
					<Container>
						<Sidebar
							width={width}
							handleClick={handleClick}
							handleMouseMove={handleMouseMove}
							widthHandleDragger={widthHandleDragger}
							tokenSet={tokenSet}
						></Sidebar>

						{isLoading ? (
							<LoadingMsg>
								<h4>Loading....</h4>
							</LoadingMsg>
						) : (
							data?.access_token && (
								<MainContent
									left={width}
									widthHandleDragger={widthHandleDragger}
								></MainContent>
							)
						)}
					</Container>
				</UserProfileContext.Provider>
			</ShowModalContext.Provider>
		</ErrorBoundary>
	);
};
export default LoggedInLayout;
