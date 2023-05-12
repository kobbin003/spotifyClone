import React, { useEffect, useState } from "react";
import Sidebar from "../components/LoggedIn/SideBar/Sidebar";
import MainContent from "../components/LoggedIn/MainContent/MainContent";
import { Container } from "./LoggedInLayout.style";
import { useNavigate } from "react-router-dom";
import { useGetAccessToken } from "../hooks/useGetAccessToken";
import { TokenData, ErrorData } from "../hooks/useGetAccessToken";
const widthHandleDragger: number = 2;
const LoggedInLayout: React.FC = () => {
	const navigate = useNavigate();
	const [width, setWidth] = useState(14.5);
	const [isDraggable, setIsDraggable] = useState(false);
	const [code, setCode] = useState<string | null>();
	useGetAccessToken(code || "");
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
	console.log("code", code);

	useEffect(() => {
		setCode(localStorage.getItem("code"));
		console.log("loggedinlayout", code);
	}, [localStorage.getItem("code")]);
	return (
		<Container>
			<Sidebar
				width={width}
				handleClick={handleClick}
				handleMouseMove={handleMouseMove}
				widthHandleDragger={widthHandleDragger}
			></Sidebar>
			<MainContent
				left={width}
				widthHandleDragger={widthHandleDragger}
			></MainContent>
		</Container>
	);
};
export default LoggedInLayout;
// #4b49492c
