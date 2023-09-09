import { env } from "process";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 200px;
	display: flex;
	background-color: transparent;
	background-image: linear-gradient(
		225deg,
		#d3d3d3 0%,
		#d3d3d3ac 20%,
		#d3d3d36f 50%,
		#d3d3d313 80%
	);
	width: 98%;
	/* padding: 1em; */
	padding-top: 3em;
	padding-bottom: 1em;
	padding-right: 0;
	@media screen and (max-width: 540px) {
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
		/* background-color: aqua; */
		@media screen and (max-width: 540px) {
			padding-left: 0;
			min-width: 250px;
			display: block;
		}
		/* background-color: yellow; */
		/* border: 2px solid goldenrod; */
		img {
			/* height: 200px; */
			/* border: 2px solid #1ed76099; */
			/* box-shadow: 0px 0px 15px 0px black; */
			box-shadow: 0px 0px 15px 0px #888777;

			@media screen and (max-width: 600px) {
				/* height: 250px;
				width: 300px; */
			}
		}
	}

	& > div:nth-of-type(2) {
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 0.5em;
		@media screen and (max-width: 540px) {
			padding-left: 0;
			padding-top: 1em;
		}
		& > p {
			/* background-color: green; */
			font-size: 1rem;
			font-weight: 600;
			@media screen and (max-width: 540px) {
				font-size: 0.5rem;
			}
		}
		& > div:nth-of-type(1) {
			/* background-color: aqua; */
			flex: 1;
			display: flex;
			align-items: center;
			font-size: 2.5vw;
			/* white-space: nowrap; */
			& > h1 {
				/* white-space: nowrap; */
			}
			@media screen and (max-width: 540px) {
				font-size: 1.1rem;
				padding-top: 1em;
				padding-bottom: 1em;
			}
			@media (min-width: 540px) and (max-width: 750px) {
				/* color: red; */
				font-size: 1.3rem;
			}
			@media (min-width: 750px) and (max-width: 850px) {
				/* color: red; */
				font-size: 1.4rem;
			}
		}

		& > div:nth-of-type(2) {
			/* background-color: springgreen; */
			display: flex;
			position: relative;
			/* justify-content: space-between; */
			/* height: 100px; */
			/* height: fit-content; */
			padding-bottom: 0.5em;
			@media screen and (max-width: 540px) {
				font-size: 0.5rem;
			}
			& > img {
				height: 1.2em;
				border-radius: 50%;
				margin-right: 0.2em;
			}
			& > p {
				/* background-color: darkcyan; */
				white-space: nowrap;
			}
			& > p:nth-of-type(1) {
				font-weight: 600;
				font-size: 1rem;
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
