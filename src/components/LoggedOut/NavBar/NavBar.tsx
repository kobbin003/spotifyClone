import {
	ChangeEvent,
	FocusEvent,
	FormEventHandler,
	MouseEvent,
	SyntheticEvent,
	useRef,
	useState,
} from "react";
import {
	NavArrowIcon,
	LoginLink,
	LoginSignupSection,
	SignUpLink,
	Container,
	NavigatePageSection,
	FixedContainer,
} from "./style";
import { authorize } from "../../../utils/authorize";
import SearchBar from "../../SearchBar/SearchBar";
import {
	SearchInputContainerIn,
	SearchInputContainerOut,
} from "../../SearchBar/SearchBar.style";
import SearchTypesList from "../../searchTypesList/SearchTypesList";
const NavBar = () => {
	const location = window.location.pathname;
	const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		authorize();
	};
	const inSearchRoute = window.location.pathname.startsWith("/search");
	return (
		<Container>
			<FixedContainer>
				<div>
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
						{inSearchRoute ? (
							<SearchBar
								// passQueryToNavBar=""
								styledComponent={SearchInputContainerOut}
							></SearchBar>
						) : (
							<></>
						)}
					</NavigatePageSection>
					<LoginSignupSection>
						<SignUpLink href="">Sign up</SignUpLink>
						<LoginLink
							href=""
							onClick={handleLogin}
						>
							Log in
						</LoginLink>
					</LoginSignupSection>
				</div>
				{inSearchRoute ? <SearchTypesList /> : <></>}
			</FixedContainer>
		</Container>
	);
};

export default NavBar;
