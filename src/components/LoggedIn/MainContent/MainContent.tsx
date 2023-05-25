import React, { useEffect, useState } from "react";
import { Outlet, RouterProvider } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { Container, Content } from "./style";
import getUserAlbums from "../../../hooks/spotify-data/getUserAlbums";
import Home from "../../../pages/Home";
import SearchIn from "../../../pages/Search";
import Search from "../../../pages/Search";

type prop = {
	left: number;
	widthHandleDragger: number;
};

const MainContent = ({ left, widthHandleDragger }: prop) => {
	const [queryFromNavBar, setQueryFromNavBar] = useState<string>();
	useEffect(() => {
		console.log("MAINCONTENT", queryFromNavBar);
	}, [queryFromNavBar]);
	return (
		<Container
			left={left}
			widthHandleDragger={widthHandleDragger}
		>
			{/* <Emptydiv></Emptydiv> */}
			<NavBar
				left={left}
				passQueryToMainContent={setQueryFromNavBar}
				widthHandleDragger={widthHandleDragger}
			></NavBar>
			{/* <Content> */}
			{/* <Outlet /> */}
			<Content>
				{/* <Home></Home>
				<Search></Search> */}
				<Outlet />
			</Content>
		</Container>
	);
};

export default MainContent;
