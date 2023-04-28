import React from "react";
import { InstallAppLink, UpgradeLink, Container, ProfileButton } from "./style";
import { Icon } from "../../../LoggedOut/SideBar/style";
import { css } from "styled-components";
// import { Container } from "../LoggedOutNavBarSection/style";

const LoggedInNavBarSection = () => {
	return (
		<Container>
			<UpgradeLink href="">Upgrade</UpgradeLink>
			<InstallAppLink href="">
				<Icon
					src="/public/icons/navBar/download.svg"
					globe
				></Icon>
				<span>Install App</span>
			</InstallAppLink>
			<ProfileButton>
				<Icon src="/icons/navBar/profile.svg"></Icon>
			</ProfileButton>
		</Container>
	);
};

export default LoggedInNavBarSection;
