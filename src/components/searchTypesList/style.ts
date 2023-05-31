import styled from "styled-components";

export const Container = styled.ul`
	position: relative;
	display: flex;
	width: 80%;
	/* left: 0; */
	/* min-width: 200px; */
	/* height: 1.5em; */
	/* border: 1px solid yellow; */
	/* background-color: aqua; */
	top: calc(50 / 16 * 1em); /* according to the height of navbar */
	margin-top: 10px;
	/* left: 0.4em; */
	margin-left: 0.4em;
	padding: 0.5em;
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 1px;
		height: 1px;
	}

	::-webkit-scrollbar-track {
		background-color: #acabab;
	}

	::-webkit-scrollbar-thumb {
		background-color: green;
	}
`;
export const LinkContainer = styled.li<{ active: boolean }>`
	list-style: none;
	a {
		border-radius: 5555px;
		text-decoration: none;
		font-size: 0.8rem;
		background-color: ${(prop) =>
			prop.active ? "white" : "var(--data-display-background-hover)"};
		color: ${(prop) =>
			prop.active ? "var(--font-black)" : "var(--font-white)"};
		display: block;
		padding: 2px 12px;
		margin-right: 0.8em;
		transition: background-color 0.3s ease-in;
	}
`;
