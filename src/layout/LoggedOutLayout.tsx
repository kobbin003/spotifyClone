import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import NavBar from "../components/LoggedOut/NavBar/NavBar";
import Sidebar from "../components/LoggedOut/SideBar/Sidebar";
import styled from "styled-components";
import { LoggedOutAppContainer } from "../App.style";
import useGetAccessCode from "../hooks/useGetAccessCode";
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
	const navigate = useNavigate();
	const code = useGetAccessCode();
	useEffect(() => {
		if (code) {
			navigate("/me");
			localStorage.setItem("code", code);
		} else {
			navigate("/");
			localStorage.removeItem("code");
		}
	}, [code]);

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
