import styled from "styled-components";
export const Container = styled.main<{
	left: number;
	widthHandleDragger: number;
}>`
	background: var(--black-dark);
	/* background: goldenrod; */
	position: relative;
	width: calc(100vw - ${(prop) => prop.left + prop.widthHandleDragger}em);
	left: ${(prop) => prop.left + prop.widthHandleDragger / 2}em;
	color: var(--font-white);
	border-radius: 0.3em;
	height: 100vh;
	//? dont let height go beyond 100vh or else it's container will get scroll
	overflow-y: scroll;
	overflow-x: hidden;
	/* overscroll-behavior: contain; */
	/* margin-top: 10px; */
`;

export const Content = styled.main`
	/* position: relative; */
	/* padding-top: 500px; */
	/* width: 100%; */
	padding-top: calc(50 / 16 * 1em);
	padding-left: 0.8em;
	/* border: 1px solid yellow; */
	/* height: inherit; */
	/* background-color: aqua; */
`;
