import { useEffect, useState } from "react";
// import "./App.css";
import useFetch from "./hooks/useFetch";
import { GridItem, LoggedInAppLayout, LoggedOutAppLayout } from "./App.style";
import LoggedInPage from "./components/pages/LoggedInPage";
import LoggedOutPage from "./components/pages/LoggedOutPage";
import StyledComp from "./styled-system-trial";
function App() {
	// const url = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
	// const accessToken =
	// 	"BQDXWrf2csEIpNigv16RjIPq0454-c30XhcaLeHf-ZE35sAurIWBIDCW4HinJwk0iuIrrltKm3M8xL-mxiN8sWhCwnc5XajZ-lg88M-yZ3ASUHe90E3z";
	// const [data, error, isLoading] = useFetch(url, accessToken);
	// data && console.log(data);
	// const Container = styled.div``;
	const [isLoggedIn, setisLoggedIn] = useState(true);
	return (
		<StyledComp></StyledComp>
		// <>
		// 	{isLoggedIn ? (
		// 		<LoggedInAppLayout>
		// 			<LoggedInPage></LoggedInPage>
		// 		</LoggedInAppLayout>
		// 	) : (
		// 		<LoggedOutAppLayout>
		// 			<LoggedOutPage></LoggedOutPage>
		// 		</LoggedOutAppLayout>
		// 	)}
		// </>
	);
}

export default App;
