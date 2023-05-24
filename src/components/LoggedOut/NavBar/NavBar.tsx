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
import Search from "../../Search";
const NavBar = () => {
	const location = window.location.pathname;
	const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		authorize();
	};

	return (
		<Container>
			<FixedContainer>
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
					{location === "/search" ? <Search></Search> : <></>}
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
			</FixedContainer>
		</Container>
	);
};

export default NavBar;
