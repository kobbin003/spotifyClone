import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { Container, Content } from "./style";
import { UserProfileContext } from "../../../layout/LoggedInLayout";
import getUserProfile from "../../../hooks/spotify-data/getUserProfile";

type Prop = {
	left: number;
	widthHandleDragger: number;
};
export type ContexttType = [
	string,
	number,
	number,
	React.Dispatch<React.SetStateAction<"hidden" | "scroll">>,
	number,
	React.Dispatch<React.SetStateAction<number>>
];

const MainContent = ({ left, widthHandleDragger }: Prop) => {
	const [queryFromSearchBar, setQueryFromSearchBar] = useState<
		string | undefined
	>("");

	const [showSearchTypes, setShowSearchTypes] = useState<boolean>(false);

	const [scroll, setScroll] = useState<"scroll" | "hidden">("scroll");
	const [scrolledY, setScrolledY] = useState(0);

	const userProfileContext = useContext(UserProfileContext);
	const { data, error, isLoading } = getUserProfile();

	const location = window.location.pathname;

	// since we cannot fetch the data in <LoggedInLayout />, we are setting the userProfile here.
	useEffect(() => {
		if (data) {
			userProfileContext?.setUserProfile(data);
		}
		console.log(userProfileContext?.userProfile);
	}, [data]);

	useEffect(() => {
		// console.log("location change", location);
		if (location === "/me/") {
			setShowSearchTypes(false);
		}
		//soething new
	}, [location]);

	// console.log("maincontent", localStorage.getItem("accessToken"));
	useEffect(() => {
		const el = document.getElementById("container") as HTMLElement;
		const handleScroll = (e: any) => {
			// console.log(
			// 	"scroll event:",
			// 	el.scrollTop,
			// 	el.scrollHeight,
			// 	el.clientHeight
			// );
			setScrolledY(el.clientHeight + el.scrollTop);
		};
		el.addEventListener("scroll", handleScroll);
		return () => el.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const el = document.getElementById("container") as HTMLElement;
		// TODO !!! this is not working
		el.scrollTop = 100;
	}, []);

	useEffect(() => {
		// console.log("scrolledY", scrolledY);
	}, [scrolledY]);

	return (
		<>
			<Container
				left={left}
				widthHandleDragger={widthHandleDragger}
				scroll={scroll}
				id="container"
			>
				<NavBar
					left={left}
					queryFromSearchBar={setQueryFromSearchBar}
					widthHandleDragger={widthHandleDragger}
					showSearchTypes={setShowSearchTypes}
				></NavBar>

				{/* {isInSearchRoute && showSearchTypes && (
			<SearchTypesList></SearchTypesList>
		)} */}
				<Content>
					<Outlet
						context={[
							queryFromSearchBar,
							left,
							widthHandleDragger,
							setScroll,
							scrolledY,
							setScrolledY,
						]}
					/>
					{/* <Outlet /> */}
				</Content>
			</Container>
		</>
	);
};

export default MainContent;
