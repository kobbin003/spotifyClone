import styled from "styled-components";

export const Container = styled.ul`
	position: relative;
	display: flex;
	/* width: 50%; */
	/* min-width: 2em; */
	/* height: 1.5em; */
	border: 1px solid yellow;
	top: calc(50 / 16 * 1em);
	margin-top: 10px;
	/* left: 0.4em; */
	margin-left: 0.4em;
	padding: 0.5em;
	position: fixed;
	/* z-index: 1; */
	overflow-x: hidden;
`;
export const LinkContainer = styled.li<{ active: boolean }>`
	width: fit-content;
	/* margin: 1px 5px; */
	list-style: none;
	a {
		border-radius: 5555px;
		text-decoration: none;
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
