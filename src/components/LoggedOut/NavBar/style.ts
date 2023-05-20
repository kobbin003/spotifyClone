import styled from "styled-components";
export const Container = styled.div`
	position: relative;
	grid-column: 2/3;
	grid-row: 1/2;
	width: 100%;
	height: 100%;
`;
export const FixedContainer = styled.div`
	position: fixed;
	width: calc(100% - 250px);
	min-width: 350px;
	height: 50px;
	background-color: #101010;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
`;
export const InnerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #101010;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const NavigatePageSection = styled.section`
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	a {
		position: relative;
		text-decoration: none;
		color: #ffffff;
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: flex-end;
	}
	a:hover {
		filter: brightness(200%);
	}
`;
export const NavArrowIcon = styled.img<{ direction: string }>`
	height: 90%;
	width: 90%;
	position: relative;
	left: ${(prop) => (prop.direction === "left" ? "0.4em" : "0px")};
`;

//-----------------
export const LoginSignupSection = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	height: 80%;
`;

export const ButtonLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	text-decoration: none;
	border-radius: 30px 30px 30px 30px;
	font-size: 0.9rem;
`;
export const SignUpLink = styled(ButtonLink)`
	background: rgba(0, 0, 0, 0);
	color: #d3d3d3;
	margin: 0 1em;
	&:hover {
		transform: scale(1.05);
		color: #ffffff;
	}
`;
export const LoginLink = styled(ButtonLink)`
	background: rgba(255, 255, 255, 1);
	color: #000000;
	height: 100%;
	width: 95px;

	margin: 0 1em;
	&:hover {
		transform: scale(1.05);
	}
`;
// export const Profile
