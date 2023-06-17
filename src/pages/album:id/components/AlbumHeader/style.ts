import { env } from "process";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 200px;
	display: flex;
	border: 1px solid #1ed76069;
	width: 98%;
	/* padding: 1em; */
	padding-top: 3em;
	padding-bottom: 1em;
	padding-right: 0;
	@media screen and (max-width: 600px) {
		padding-left: 1em;
		height: auto;
		flex-direction: column;
	}
	& > div:nth-of-type(1) {
		display: flex;
		justify-content: center;
		height: 100%;
		min-width: 200px;
		padding-right: 1em;
		padding-left: 1em;
		@media screen and (max-width: 600px) {
			padding-left: 0;
			min-width: 250px;
		}
		/* background-color: yellow; */
		/* border: 2px solid goldenrod; */
		img {
			height: 200px;
			border: 2px solid #1ed76099;
			@media screen and (max-width: 600px) {
				height: 250px;
			}
		}
	}

	& > div:nth-of-type(2) {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		/* background-color: green; */
		padding-left: 0.5em;
		& > p {
			font-size: 1.2rem;
			font-weight: 600;
		}
		& > h1 {
			font-size: 2.8rem;
			padding-top: 0.1em;
			padding-bottom: 0.4em;
			/* background-color: aqua; */
			width: auto;
		}
		& > div {
			display: flex;
			height: fit-content;
			padding-bottom: 0.5em;
			& > p {
				white-space: nowrap;
			}
			& > p:nth-of-type(1) {
				font-weight: 600;
			}
		}
	}
`;
export const BoldDot = styled.b`
	/* background-color: blueviolet; */
	position: relative;
	top: -0.2em;
	font-weight: 800;
`;
