import React, { useState } from "react";
import styled from "styled-components";
import {
	NavArrowIcon,
	Container,
	NavigatePageSection,
	FixedContainer,
	ProfileContainer,
	UpgradeLink,
	InstallAppLink,
	ProfileButton,
	Icon,
	DropDown,
} from "./navBar.style";
type NavbarProp = {
	left: number;
	widthHandleDragger: number;
};
const NavBar = ({ widthHandleDragger, left }: NavbarProp) => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const handleProfileClick = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
	};
	return (
		<>
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
							src="/icons/navBar/download.svg"
							globe
						></Icon>
						<span>Install App</span>
					</InstallAppLink>
					<ProfileButton>
						<Icon
							profile
							src="/icons/navBar/profile.svg"
							onClick={handleProfileClick}
						></Icon>
					</ProfileButton>
				</ProfileContainer>
			</FixedContainer>
			<DropDown dropDownVisibility={dropDownVisibility}>
				<a href="">Profile</a>
				<a href="">Logout</a>
			</DropDown>
		</>
		// <h1>navbar</h1>
	);
};
// #d1cbcb5f
export default NavBar;
