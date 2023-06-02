import styled from "styled-components";

export const Container = styled.ul`
	position: relative;
	/* position: fixed; */
	/* background-color: yellow; */
	/* width: 200px; */
	/* left: 0; */
	display: flex;
	/* width: 60%; */
	/* top: calc(50 / 16 * 1em);  */
	/* according to the height of navbar */
	/* margin-top: 10px;
	margin-left: 0.4em; */
	padding: 0.5em;
	min-width: 100px;
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
			prop.active ? "white" : "var(--background-dull)"};
		color: ${(prop) =>
			prop.active ? "var(--font-black)" : "var(--font-white)"};
		display: block;
		padding: 2px 12px;
		margin-right: 0.8em;
		transition: background-color 0.3s ease-in;
	}
`;
