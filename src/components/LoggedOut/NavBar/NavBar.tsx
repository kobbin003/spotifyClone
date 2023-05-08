import { MouseEvent } from "react";
import {
	NavArrowIcon,
	LoginLink,
	LoginSignupSection,
	SignUpLink,
	Container,
	NavigatePageSection,
	FixedContainer,
} from "./style";
import { authorize, authorizeFromBackEnd } from "../../../utils/authorize";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
	const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		authorize();
		// authorizeFromBackEnd();
		// console.log("log in");
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
				</NavigatePageSection>
				<LoginSignupSection>
					<SignUpLink href="">Sign up</SignUpLink>
					<LoginLink
						href=""
						// onClick={(e) => handleOnClickLogin(e, true)}
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
