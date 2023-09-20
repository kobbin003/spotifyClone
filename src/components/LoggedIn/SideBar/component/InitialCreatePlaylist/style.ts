import styled from "styled-components";

export const ActionCards = styled.div`
	background: var(--greyest);
	border-radius: 15px;
	color: var(--font-white);
	margin: 0.4em;
	padding: 0.5em;
	margin-bottom: 1em;
	& > * {
		margin-bottom: 1em;
		margin-left: 0.5em;
	}
	h4 {
		line-height: 1.5em;
		margin-top: 0.4em;
	}
	p {
		line-height: 1.8em;
		font-size: 0.8rem;
		font-weight: 500;
		transform: scale(0.92);
		transform-origin: left;
	}
`;
export const ButtonLink = styled.a`
	display: flex;
	font-weight: 700;
	text-decoration: none;
	border-radius: 30px 30px 30px 30px;
	color: var(--font-black);
	font-size: 1em;
	background: var(--button-white);
	width: fit-content;
	margin-bottom: 0.3em;
	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 0.5em 0.9em;
		display: flex;
		font-size: 0.8em;
	}
`;
