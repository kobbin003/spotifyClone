import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
	NavArrowIcon,
	LoginLink,
	LoginSignupSection,
	SignUpLink,
	Container,
	NavigatePageSection,
	FixedContainer,
	InnerContainer,
} from "./style";
import { authContext } from "../../../context/authContext";
const NavBar = () => {
	const { handleOnClickLogin } = useContext(authContext);
	// console.log(handleOnClickLogin);
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
						onClick={(e) => handleOnClickLogin(e, true)}
					>
						Log in
					</LoginLink>
				</LoginSignupSection>
			</FixedContainer>
		</Container>
	);
};

export default NavBar;
