import styled from "styled-components";
export const Container = styled.main<{
	left: number;
	widthHandleDragger: number;
}>`
	/* height: 1000px; */
	background: var(--black-darkest);
	position: relative;
	width: 500px;
	width: calc(100vw - ${(prop) => prop.left + prop.widthHandleDragger + 1}em);
	left: ${(prop) => prop.left + prop.widthHandleDragger / 2}em;
	display: flex;
	flex-direction: column;
	color: var(--font-white);
	border-radius: 0.3em;
	/* margin-right: 20px; */
	/* margin-top: 2em; */
	overflow: hidden;
`;
export const Emptydiv = styled.div`
	position: fixed;
	width: 100%;
	background-color: green;
	height: 50px;
	z-index: 10;
`;

export const LoremIpsum = styled.p`
	/* z-index: -10; */
`;
