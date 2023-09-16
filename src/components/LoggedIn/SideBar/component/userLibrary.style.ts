import styled from "styled-components";

export const SelectContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	/* background-color: aqua; */
`;
export const ButtonTypes = styled.button<{
	active: boolean;
}>`
	background-color: ${(prop) => (prop.active ? "white" : "transparent")};
	border: 1px solid white;
	border-radius: 1000px;
	padding: 0.1em 0.5em;
	color: ${(prop) => (prop.active ? "black" : "white")};
	/* color: var(--font-white); */
	font-size: 0.9rem;
	scale: 0.8;
	&:hover {
		cursor: pointer;
	}
`;
export const ContainerLibrary = styled.ul`
	max-height: calc(100vh - 280 * 1px);
	min-height: 200px;
	/* width: 100%; */
	border-radius: 5px;
	margin: 0.4em;
	padding: 0.5em;
	margin-bottom: 1em;
	overflow-y: scroll;
	overflow-x: hidden;

	/* scrollbar-color: var(--greyest); */
	::-webkit-scrollbar {
		width: 7px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #c6c3c35f;
	}
`;
