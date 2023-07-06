import React, { useEffect, useState } from "react";

import { ErrorBoundary } from "react-error-boundary";

// import NavBar from "../components/LoggedOut/NavBar/NavBar";
import Sidebar from "../components/LoggedOut/SideBar/Sidebar";
import { LoggedOutAppContainer } from "./LoggedOutLayout.style";
import useGetAccessCode from "../hooks/useGetAccessCode";
import { errorBoundaryFallback } from "./errorBoundaryFallback";
import PopUpCards from "../components/cards/PopUpCards/PopUpCards";
import LoginBoard from "../components/LoggedOut/LogInBoard/LoginBoard";

const LoggedOutLayout = () => {
	const [top, setTop] = useState<number>(0);
	const [left, setLeft] = useState<number>(0);
	const [visibility, setVisibility] = useState<boolean>(false);
	const code = useGetAccessCode();

	useEffect(() => {
		//remove code, accessToken & refreshToken whenever LoggedOutLayout is rendered
		localStorage.removeItem("code");
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
	}, []);

	return (
		<ErrorBoundary FallbackComponent={errorBoundaryFallback}>
			<LoggedOutAppContainer>
				<Sidebar
					setTop={setTop}
					setLeft={setLeft}
					setVisibility={setVisibility}
				></Sidebar>
				<PopUpCards
					title="You are not logged in"
					message="Log in to have fun"
					left={left}
					top={top}
					visibility={visibility ? "visible" : "hidden"}
				></PopUpCards>
				{/* <NavBar></NavBar> */}
				<LoginBoard />
			</LoggedOutAppContainer>
		</ErrorBoundary>
	);
};
export default LoggedOutLayout;
