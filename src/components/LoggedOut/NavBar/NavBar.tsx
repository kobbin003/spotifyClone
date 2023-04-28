import React, { useState } from "react";
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

const NavBar = () => {
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
					<LoginLink href="">Log in</LoginLink>
				</LoginSignupSection>
			</FixedContainer>
		</Container>
	);
};

export default NavBar;
