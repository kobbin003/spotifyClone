import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import NavBar from "../components/LoggedOut/NavBar/NavBar";
import Sidebar from "../components/LoggedOut/SideBar/Sidebar";
import styled from "styled-components";
import { LoggedOutAppContainer } from "../App.style";
import searchCode from "../utils/searchCode";
export const LoremIpsum = styled.div`
	position: relative;
	grid-column: 2/3;
	grid-row: 2/3;
`;
const Content = styled.div`
	position: relative;
	grid-column: 2/3;
	grid-row: 2/3;
`;

const LoggedOutLayout = () => {
	searchCode();
	return (
		<LoggedOutAppContainer>
			<Sidebar></Sidebar>
			<NavBar></NavBar>
			<Content>
				<Outlet />
			</Content>
		</LoggedOutAppContainer>
	);
};

export default LoggedOutLayout;
