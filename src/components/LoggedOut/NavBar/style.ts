import styled from "styled-components";
export const Container = styled.div`
	position: relative;
	grid-column: 2/3;
	grid-row: 1/2;
	/* width: 100%; */
	height: 50px;
	/* background-color: yellow; */
`;
export const FixedContainer = styled.div`
	position: fixed;
	width: calc(100% - 250px);
	min-width: 350px;
	height: 50px;
	background-color: #101010;
	/* background-color: transparent; */
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
	height: 80%;
	display: flex;
	/* background-color: aqua; */
	justify-content: center;
	align-items: center;
	align-content: center;
	padding-left: 1em;
	a {
		position: relative;
		text-decoration: none;
		color: #ffffff;
		height: 100%;
		width: 2.5em;
	}
	a:hover {
		filter: brightness(200%);
	}
`;
export const NavArrowIcon = styled.img<{ direction: string }>`
	height: 100%;
	width: 100%;
	min-width: 30px;
	position: relative;
	/* left: ${(prop) => (prop.direction === "left" ? "0.4em" : "0px")}; */
`;

// export const SearchInputContainer = styled.div`
// 	position: relative;
// 	height: 80%;
// 	width: 25vw;
// 	min-width: 100px;
// 	/* background-color: pink; */
// 	padding: 3px;
// 	display: flex;
// 	align-items: center;

// 	input {
// 		height: 100%;
// 		width: 100%;
// 		color: #000000;
// 		border-radius: 5555px;
// 		caret-color: #000000;
// 		border: none;
// 		caret: unset;
// 		background-color: #ffffff;
// 		padding-left: 1.8em;
// 		padding-right: 1.8em;
// 		&::placeholder {
// 			font-size: 0.8rem;
// 			font-weight: 500;
// 		}

// 		&:focus {
// 			/** no need of outline
// 				BECAUSE autofous on "/search" */
// 			outline: none;
// 		}
// 		&::-webkit-search-cancel-button {
// 			display: none;
// 		}
// 	}
// `;
// export const SearchIcon = styled.img`
// 	height: 55%;
// 	/* width: 10%; */
// 	position: absolute;
// 	left: 0.6em;
// `;
// export const ResetButton = styled.button<{
// 	visible: string;
// }>`
// 	height: 90%;
// 	width: 26px;
// 	display: block;
// 	background-color: transparent;
// 	/* background-color: red; */
// 	border: none;
// 	position: absolute;
// 	right: 0.5em;
// 	cursor: pointer;
// 	z-index: 10;
// 	display: flex;
// 	align-items: center;
// 	visibility: ${(props) => props.visible};
// 	img {
// 		/* height: 90%; */
// 		/* width: 100%; */
// 		/* min-width: 20px; */
// 	}
// `;

//-----------------
export const LoginSignupSection = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	height: 80%;
	/* background-color: green; */
	padding-right: 1em;
`;

export const ButtonLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	text-decoration: none;
	border-radius: 30000px;
	font-size: 0.9rem;
	@media only screen and (max-width: 750px) {
		transform: scale(0.9);
	}
	@media only screen and (min-width: 750px) {
		margin-left: 1em;
	}
`;
export const SignUpLink = styled(ButtonLink)`
	background: rgba(0, 0, 0, 0);
	/* background-color: yellow; */
	color: #d3d3d3;
	/* margin: 0 1em; */
	padding: 0;
	min-width: 80px;
	/* width: 95px; */
	&:hover {
		transform: scale(1.05);
		color: #ffffff;
	}
`;
export const LoginLink = styled(ButtonLink)`
	background: rgba(255, 255, 255, 1);
	color: #000000;
	height: 100%;
	min-width: 80px;

	/* margin: 0 1em; */
	&:hover {
		transform: scale(1.05);
	}
`;
// export const Profile
