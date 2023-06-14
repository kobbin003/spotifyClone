import { env } from "process";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 200px;
	display: flex;
	border: 1px solid green;
	width: 98%;
	/* padding: 1em; */
	padding-top: 3em;
	padding-bottom: 1em;
	padding-right: 0;
	& > div:nth-of-type(1) {
		height: 100%;
		padding-right: 1em;
		padding-left: 1em;
		img {
			height: 100%;
		}
	}

	& > div:nth-of-type(2) {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		/* background-color: green; */
		padding-left: 0.5em;
		/* gap: 1em; */
		& > p {
			font-size: 1.2rem;
			font-weight: 600;
		}
		& > h1 {
			font-size: 2.8rem;
			padding-top: 0.1em;
			padding-bottom: 0.4em;
		}
		& > div {
			display: flex;
			height: fit-content;
			padding-bottom: 0.5em;
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
