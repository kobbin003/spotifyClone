import styled from "styled-components";
export const Container = styled.main<{
	left: number;
	widthHandleDragger: number;
}>`
	background: var(--black-darkest);
	/* background: goldenrod; */
	position: relative;
	width: calc(100vw - ${(prop) => prop.left + prop.widthHandleDragger}em);
	left: ${(prop) => prop.left + prop.widthHandleDragger / 2}em;
	color: var(--font-white);
	border-radius: 0.3em;
	height: 100vh;
	overflow: scroll;
	overscroll-behavior: contain;
	/* max-height: calc(100vh-1em); */
	//? dont let height go beyond 100vh or else it's container will get scroll
	/* margin-top: 10px; */
`;
// export const Emptydiv = styled.div`
// 	position: fixed;
// 	width: 100%;
// 	background-color: var(--black-darkest);
// 	height: 10px;
// 	z-index: 1;
// `;
export const Content = styled.main`
	/* padding-top: 500px; */
	padding-top: calc(50 / 16 * 1em);
`;
