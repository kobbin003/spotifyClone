import { useEffect, useState } from "react";
// import "./App.css";
import useFetch from "./hooks/useFetch";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { AppLayout } from "./App_style";

function App() {
	// const url = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
	// const accessToken =
	// 	"BQDXWrf2csEIpNigv16RjIPq0454-c30XhcaLeHf-ZE35sAurIWBIDCW4HinJwk0iuIrrltKm3M8xL-mxiN8sWhCwnc5XajZ-lg88M-yZ3ASUHe90E3z";
	// const [data, error, isLoading] = useFetch(url, accessToken);
	// data && console.log(data);
	// const Container = styled.div``;
	return (
		<AppLayout>
			<Sidebar></Sidebar>
			<NavBar></NavBar>
		</AppLayout>
	);
}

export default App;
