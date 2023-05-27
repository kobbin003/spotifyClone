import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { Container, Content } from "./style";

type Prop = {
	left: number;
	widthHandleDragger: number;
};

const MainContent = ({ left, widthHandleDragger }: Prop) => {
	const [queryFromNavBar, setQueryFromNavBar] = useState<string>();
	// useEffect(() => {
	// 	console.log("MAINCONTENT", queryFromNavBar);
	// }, [queryFromNavBar]);
	return (
		<Container
			left={left}
			widthHandleDragger={widthHandleDragger}
		>
			<NavBar
				left={left}
				passQueryToMainContent={setQueryFromNavBar}
				widthHandleDragger={widthHandleDragger}
			></NavBar>
			<Content>
				<Outlet context={queryFromNavBar} />
			</Content>
		</Container>
	);
};

export default MainContent;
