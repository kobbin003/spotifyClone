import React, { useState } from "react";
import { Outlet, RouterProvider } from "react-router-dom";

// import NavBar from "../LoggedIn/NavBar/NavBar";
import NavBar from "../NavBar/NavBar";
// import { LoremIpsum } from "./LoggedOutPage";
import { Container, Content } from "./style";
// import { router } from "../../../Router";
type prop = {
	left: number;
	widthHandleDragger: number;
};
const MainContent = ({ left, widthHandleDragger }: prop) => {
	return (
		<>
			{/* <Emptydiv></Emptydiv> */}
			<Container
				left={left}
				widthHandleDragger={widthHandleDragger}
			>
				<NavBar
					left={left}
					widthHandleDragger={widthHandleDragger}
				></NavBar>
				<Content>
					<Outlet />
				</Content>
			</Container>
		</>
	);
};

export default MainContent;
