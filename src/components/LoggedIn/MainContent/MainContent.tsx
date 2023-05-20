import React, { useEffect, useState } from "react";
import { Outlet, RouterProvider } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { Container, Content } from "./style";
import getUserAlbums from "../../../hooks/spotify-data/getUserAlbums";
import Home from "../../../pages/Home";

type prop = {
	left: number;
	widthHandleDragger: number;
};

const MainContent = ({ left, widthHandleDragger }: prop) => {
	return (
		<Container
			left={left}
			widthHandleDragger={widthHandleDragger}
		>
			{/* <Emptydiv></Emptydiv> */}
			<NavBar
				left={left}
				widthHandleDragger={widthHandleDragger}
			></NavBar>
			{/* <Content> */}
			{/* <Outlet /> */}
			<Content>
				<Home></Home>
			</Content>
		</Container>
	);
};

export default MainContent;
