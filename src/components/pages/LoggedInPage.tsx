import React, { useState } from "react";
import Sidebar from "../LoggedIn/SideBar/Sidebar";
import MainContent from "../LoggedIn/MainContent/MainContent";
import { Container } from "./LoggedInPage.style";

const widthHandleDragger: number = 2;
const LoggedInPage: React.FC = () => {
	const [width, setWidth] = useState(14.5);
	const [isDraggable, setIsDraggable] = useState(false);

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
export default LoggedInPage;
// #4b49492c
