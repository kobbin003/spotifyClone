import React, { useEffect, useState } from "react";
import {
	Outlet,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import NavBar from "../components/LoggedOut/NavBar/NavBar";
import Sidebar from "../components/LoggedOut/SideBar/Sidebar";
import styled from "styled-components";
import { LoggedOutAppContainer } from "./LoggedOutLayout.style";
import useGetAccessCode from "../hooks/useGetAccessCode";
import { errorBoundaryFallback } from "./errorBoundaryFallback";
import { Content } from "./LoggedOutLayout.style";

const LoggedOutLayout = () => {
	const navigate = useNavigate();

	const code = useGetAccessCode();
	//remove accessToken & refreshToken whenever LoggedOutLayout is rendered
	if (
		localStorage.getItem("accessToken") &&
		localStorage.getItem("refreshToken")
	) {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
	}
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
		<ErrorBoundary FallbackComponent={errorBoundaryFallback}>
			<LoggedOutAppContainer>
				<Sidebar></Sidebar>
				<NavBar></NavBar>
				<Content>
					<Outlet context={["", 0, 0]} />
				</Content>
			</LoggedOutAppContainer>
		</ErrorBoundary>
	);
};
export default LoggedOutLayout;
