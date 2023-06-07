import React, { useEffect, useState } from "react";
import Sidebar from "../components/LoggedIn/SideBar/Sidebar";
import MainContent from "../components/LoggedIn/MainContent/MainContent";
import { Container } from "./LoggedInLayout.style";
import { useNavigate } from "react-router-dom";
import { useGetAccessToken } from "../hooks/useGetAccessToken";
import { ErrorBoundary } from "react-error-boundary";
import { errorBoundaryFallback } from "./errorBoundaryFallback";
const widthHandleDragger: number = 2;

const LoggedInLayout: React.FC = () => {
	const navigate = useNavigate();
	const [width, setWidth] = useState(14.5);
	const [isDraggable, setIsDraggable] = useState(false);
	const [code, setCode] = useState<string | null>(localStorage.getItem("code"));
	const { data, error, isLoading } = useGetAccessToken(code || null);
	// console.log("logged in layout", data, error, isLoading);
	// useGetRefreshToken(false);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		!isDraggable ? setIsDraggable(true) : setIsDraggable(false);
		console.log("mouse enter", isDraggable);
	};
	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if (isDraggable) {
			const newWidth = e.clientX / 16;
			setWidth(newWidth);
			console.log("mouse move", isDraggable, e);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("code")) {
			setCode(localStorage.getItem("code"));
		}
	}, [localStorage.getItem("code")]);
	useEffect(() => {
		// if code not found, then navigate to "/"
		if (!code) navigate("/");
	}, []);
	useEffect(() => {
		console.log("data", data);
	}, [code]);

	return (
		<ErrorBoundary FallbackComponent={errorBoundaryFallback}>
			<Container>
				<Sidebar
					width={width}
					handleClick={handleClick}
					handleMouseMove={handleMouseMove}
					widthHandleDragger={widthHandleDragger}
				></Sidebar>
				{isLoading ? (
					<h1>Loading....</h1>
				) : (
					data && (
						<MainContent
							left={width}
							widthHandleDragger={widthHandleDragger}
						></MainContent>
					)
				)}
			</Container>
		</ErrorBoundary>
	);
};
export default LoggedInLayout;
// #4b49492c
