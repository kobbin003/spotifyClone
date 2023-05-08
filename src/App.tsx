//! NO longer required after react router.
// import { useEffect, useState } from "react";

// // import "./App.css";
// import { LoggedInAppContainer, LoggedOutAppContainer } from "./App.style";
// import LoggedInLayout from "./layout/LoggedInLayout";
// import LoggedOutLayout from "./layout/LoggedOutLayout";
// import SideBar from "./components/LoggedOut/SideBar/Sidebar";
// import NavBar from "./components/LoggedOut/NavBar/NavBar";
// import { Content } from "./layout/LoggedOutLayout.style";
// import { Outlet, useNavigate } from "react-router-dom";
// function App() {
// 	const navigate = useNavigate();

// 	const [code, setCode] = useState<string>();
// 	useEffect(() => {
// 		const urlSearchParams = new URLSearchParams(window.location.search);
// 		const code = urlSearchParams.get("code");
// 		if (typeof code === "string") {
// 			setCode(code);
// 		}
// 		console.log("code", code);
// 		// code&&
// 	}, []);
// 	useEffect(() => {
// 		if (code) navigate("/me");
// 	}, [code]);
// 	return (
// 		<>
// 			{code ? (
// 				<LoggedInAppContainer>
// 					<LoggedInLayout></LoggedInLayout>
// 				</LoggedInAppContainer>
// 			) : (
// 				<LoggedOutAppContainer>
// 					<LoggedOutLayout></LoggedOutLayout>
// 				</LoggedOutAppContainer>
// 			)}
// 		</>
// 	);
// }

// export default App;
