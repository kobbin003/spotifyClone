import { env } from "process";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 200px;
	display: flex;
	/* border: 1px solid #1ed76069; */
	background-color: transparent;
	/* background-image: linear-gradient(
		225deg,
		white 0%,
		#d3d3d3 5%,
		transparent 100%
	); */
	background-image: linear-gradient(
		225deg,
		#d3d3d3 0%,
		#d3d3d3 20%,
		#d3d3d3af 50%,
		#d3d3d313 85%
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
		@media screen and (max-width: 540px) {
			padding-left: 0;
			min-width: 250px;
			display: block;
		}
		img {
			height: 200px;
			box-shadow: 0px 0px 15px 0px #d3d3d3;
			border-radius: 50%;
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
			font-size: 3vw;
			white-space: nowrap;
			@media screen and (max-width: 540px) {
				font-size: 1rem;
			}
			@media (min-width: 540px) and (max-width: 750px) {
				/* color: red; */
				font-size: 2rem;
			}
			@media (min-width: 750px) and (max-width: 850px) {
				/* color: red; */
				font-size: 4vw;
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
			& > p {
				/* background-color: darkcyan; */
				white-space: nowrap;
			}
			& > p:nth-of-type(1) {
				/* font-weight: 600; */
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
