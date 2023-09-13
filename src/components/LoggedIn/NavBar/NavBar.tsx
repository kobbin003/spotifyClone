import React, { MouseEvent, useEffect, useRef, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import { SearchInputContainerIn } from "../../SearchBar/SearchBar.style";
import SearchTypesList from "../../searchTypesList/SearchTypesList";
import useOutsideClickEquals from "../../../hooks/useClickOutsideEquals";
import useOutsideClickContains from "../../../hooks/useClickOutsideContains";
type NavbarProp = {
	left: number;
	widthHandleDragger: number;
	queryFromSearchBar: React.Dispatch<React.SetStateAction<string | undefined>>;
	showSearchTypes: React.Dispatch<React.SetStateAction<boolean>>;
};
const NavBar = ({
	widthHandleDragger,
	left,
	queryFromSearchBar,
	showSearchTypes,
}: NavbarProp) => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const location = window.location.pathname;
	const isInSearchRoute = /^\/me\/search.*/.test(location);
	const navigate = useNavigate();
	const profileButtonRef = useRef<HTMLImageElement>(null);

	const handleDropDownMenu = (e: MouseEvent<HTMLImageElement>) => {
		e.stopPropagation();
		// set the dropDownVisibility
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
	};

	const handleLogOut = () => {
		// ! remove access_token & refresh_token
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		navigate("/");
	};

	const handleNavigateBack = () => {
		window.history.back();
	};

	const handleNavigateFront = () => {
		window.history.forward();
	};

	useOutsideClickContains(profileButtonRef, () => {
		setDropDownVisibility("hidden");
	});

	return (
		<>
			<FixedContainer
				left={left}
				widthHandleDragger={widthHandleDragger}
				isInSearchRoute={isInSearchRoute ? "search" : "home"}
			>
				<div>
					<NavigatePageSection>
						<button onClick={handleNavigateBack}>
							<NavArrowIcon
								src="/icons/navBar/arrow-circle-left.svg"
								direction="left"
							/>
						</button>
						<button onClick={handleNavigateFront}>
							<NavArrowIcon
								src="/icons/navBar/arrow-circle-right.svg"
								direction="right"
							/>
						</button>
					</NavigatePageSection>
					{isInSearchRoute && (
						<SearchBar
							loggedIn
							styledComponent={SearchInputContainerIn}
							passQueryToNavBar={queryFromSearchBar}
							showSearchTypes={showSearchTypes}
						></SearchBar>
					)}
					<ProfileContainer>
						{!isInSearchRoute && (
							<UpgradeLink
								href="https://www.spotify.com/us/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button"
								target="blank"
							>
								Explore Premium
							</UpgradeLink>
						)}
						<InstallAppLink
							href="https://www.spotify.com/us/download/linux/"
							target="_blank"
						>
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
								ref={profileButtonRef}
							></Icon>
						</ProfileButton>
					</ProfileContainer>
				</div>
				{isInSearchRoute && <SearchTypesList />}
			</FixedContainer>
			<DropDown dropDownVisibility={dropDownVisibility}>
				<Link to="/me/profile">Profile</Link>
				<a
					href=""
					onClick={handleLogOut}
				>
					Logout
				</a>
			</DropDown>
		</>
	);
};
export default NavBar;
