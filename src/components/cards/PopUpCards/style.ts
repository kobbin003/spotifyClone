import styled from "styled-components";

export const Container = styled.dialog<{
	top: number;
	left: number;
	visibility: string;
}>`
	background-color: transparent;
	padding: 1em;
	color: white;
	border: none;
	contain: content;
	position: fixed;
	z-index: 10;
	top: ${(prop) => prop.top}px;
	left: ${(prop) => prop.left}px;
	visibility: ${(prop) => prop.visibility};
`;
export const Content = styled.div`
	background-color: #0d72ea;
	padding: 1em;
	border-radius: 5px;
	/* z-index: 20; */
	& > *:nth-child(-n + 2) {
		padding-bottom: 0.8em;
	}
	div:nth-of-type(1) {
		display: flex;
		justify-content: flex-end;
		button {
			padding: 0.5em 0.8em;
			border-radius: 5555px;
			border: none;
			font-size: 0.8rem;
			font-weight: 600;
		}
	}
`;
export const Pointy = styled.div`
	position: fixed;
	background-color: #0d72ea;
	height: 20px;
	width: 20px;
	top: 30px;
	left: 10px;
	rotate: 50deg;
	z-index: -1;
`;
