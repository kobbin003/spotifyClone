import React, { useEffect, useState } from "react";
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
	// SearchInputContainer,
} from "./navBar.style";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import { SearchInputContainerIn } from "../../SearchBar/SearchBar.style";
import SearchTypesList from "../../searchTypesList/SearchTypesList";
type NavbarProp = {
	left: number;
	widthHandleDragger: number;
	passQueryToMainContent: React.Dispatch<
		React.SetStateAction<string | undefined>
	>;
};
const NavBar = ({
	widthHandleDragger,
	left,
	passQueryToMainContent,
}: NavbarProp) => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const [queryFromSearchBar, setQueryFromSearchBar] = useState<string>();
	const [showSearchTypes, setShowSearchTypes] = useState<boolean>(false);
	const location = window.location.pathname;
	const isInSearchRoute = /^\/me\/search.*/.test(location);
	console.log("navbar", location, /^\/me\/search.*/.test(location));
	const navigate = useNavigate();
	const handleDropDownMenu = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
	};
	const handleLogOut = () => {
		// ! remove access_token & refresh_token
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		navigate("/");
	};
	useEffect(() => {
		// console.log("NAVBAR", queryFromSearchBar);
		passQueryToMainContent(queryFromSearchBar);
	}, [queryFromSearchBar]);

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
					{isInSearchRoute && (
						<SearchBar
							loggedIn
							styledComponent={SearchInputContainerIn}
							passQueryToNavBar={setQueryFromSearchBar}
							showSearchTypes={setShowSearchTypes}
						></SearchBar>
					)}
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
							src="/icons/navBar/profile.svg"
							user
							onClick={handleDropDownMenu}
						></Icon>
					</ProfileButton>
				</ProfileContainer>
			</FixedContainer>
			{isInSearchRoute && showSearchTypes && (
				<SearchTypesList></SearchTypesList>
			)}
			<DropDown dropDownVisibility={dropDownVisibility}>
				<a href="">Profile</a>
				<a
					href=""
					onClick={handleLogOut}
				>
					Logout
				</a>
			</DropDown>
		</>
		// <h1>navbar</h1>
	);
};
// #d1cbcb5f
export default NavBar;
