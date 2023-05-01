import { createContext, useEffect, useState } from "react";
// import "./App.css";
import useFetch from "./hooks/useFetch";
import { GridItem, LoggedInAppLayout, LoggedOutAppLayout } from "./App.style";
import LoggedInPage from "./components/pages/LoggedInPage";
import LoggedOutPage from "./components/pages/LoggedOutPage";
import { authContext } from "./context/authContext";
import useGetAccessToken from "./hooks/useGetAccessToken";
function App() {
	// const url = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
	// const accessToken =
	// 	"BQDXWrf2csEIpNigv16RjIPq0454-c30XhcaLeHf-ZE35sAurIWBIDCW4HinJwk0iuIrrltKm3M8xL-mxiN8sWhCwnc5XajZ-lg88M-yZ3ASUHe90E3z";
	// const [data, error, isLoading] = useFetch(url, accessToken);
	// data && console.log(data);
	// const Container = styled.div``;
	const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
	const [data, error, isLoading] = useGetAccessToken();
	console.log(data, error, isLoading);
	const handleOnClickLogin = (
		e: React.MouseEvent<HTMLAnchorElement>,
		isLoggedIn: boolean
	): void => {
		e.preventDefault();
		console.log("handle click login", isLoggedIn);
		// setisLoggedIn(isLoggedIn);
	};
	return (
		// <StyledComp></StyledComp>
		<>
			{isLoggedIn ? (
				<LoggedInAppLayout>
					<LoggedInPage></LoggedInPage>
				</LoggedInAppLayout>
			) : (
				<authContext.Provider value={{ handleOnClickLogin }}>
					<LoggedOutAppLayout>
						<LoggedOutPage></LoggedOutPage>
					</LoggedOutAppLayout>
				</authContext.Provider>
			)}
		</>
	);
}

export default App;
