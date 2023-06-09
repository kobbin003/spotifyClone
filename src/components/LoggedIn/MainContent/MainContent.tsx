import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { Container, Content } from "./style";
import SearchTypesList from "../../searchTypesList/SearchTypesList";

type Prop = {
	left: number;
	widthHandleDragger: number;
};

const MainContent = ({ left, widthHandleDragger }: Prop) => {
	const [queryFromSearchBar, setQueryFromSearchBar] = useState<string>();
	const [showSearchTypes, setShowSearchTypes] = useState<boolean>(false);
	const [scroll, setScroll] = useState<"scroll" | "hidden">("scroll");
	const location = window.location.pathname;
	const isInSearchRoute = /^\/me\/search.*/.test(location);
	useEffect(() => {
		// console.log("location change", location);
		if (location === "/me/") {
			setShowSearchTypes(false);
		}
		//soething new
	}, [location]);
	// console.log("maincontent", queryFromSearchBar);

	return (
		<>
			<Container
				left={left}
				widthHandleDragger={widthHandleDragger}
				scroll={scroll}
			>
				<NavBar
					left={left}
					queryFromSearchBar={setQueryFromSearchBar}
					widthHandleDragger={widthHandleDragger}
					showSearchTypes={setShowSearchTypes}
				></NavBar>

				{/* {isInSearchRoute && showSearchTypes && (
			<SearchTypesList></SearchTypesList>
		)} */}
				<Content>
					<Outlet
						context={[queryFromSearchBar, left, widthHandleDragger, setScroll]}
					/>
					{/* <Outlet /> */}
				</Content>
			</Container>
		</>
	);
};

export default MainContent;
