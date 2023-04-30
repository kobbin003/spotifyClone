import React, { useState } from "react";
import styled from "styled-components";
import {
	NavArrowIcon,
	Container,
	NavigatePageSection,
	FixedContainer,
	InnerContainer,
	ProfileContainer,
	UpgradeLink,
	InstallAppLink,
	ProfileButton,
	Icon,
} from "./navBar.style";
type NavbarProp = {
	left: number;
	widthHandleDragger: number;
};
const NavBar = ({ widthHandleDragger, left }: NavbarProp) => {
	return (
		<Container>
			<FixedContainer
				left={left}
				widthHandleDragger={widthHandleDragger}
			>
				<NavigatePageSection>
					<a href="">
						<NavArrowIcon
							src="/icons/navBar/arrow-circle-left.svg"
							direction="left"
						/>
					</a>
					<a href="">
						<NavArrowIcon
							src="/icons/navBar/arrow-circle-right.svg"
							direction="right"
						/>
					</a>
				</NavigatePageSection>
				<ProfileContainer>
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
				</ProfileContainer>
			</FixedContainer>
		</Container>
		// <h1>navbar</h1>
	);
};

export default NavBar;
