import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: grid;
	grid-gap: 20px 0px;
	padding-bottom: 2em;
	padding-top: 2em;
	background-color: coral;
	@media only screen and (max-width: 490px) {
		grid: auto/minmax(auto, 100%);
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media (min-width: 490px) and (max-width: 600px) {
		background-color: yellow;
		grid: auto/repeat(2, minmax(auto, 60%));
	}
	@media (min-width: 600px) and (max-width: 768px) {
		grid: auto/repeat(2, minmax(auto, 50%));
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media (min-width: 768px) and (max-width: 892px) {
		background-color: blueviolet;
		grid: auto/repeat(3, minmax(auto, 33.33%));
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media (min-width: 892px) and (max-width: 1200px) {
		background-color: wheat;
		/* grid: auto/auto auto auto auto; */
		grid: auto/repeat(4, minmax(auto, 25%));
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1200px) and (max-width: 1400px) {
		/* background-color: crimson; */
		/* grid: auto/auto auto auto auto auto; */
		grid: auto/repeat(5, minmax(auto, 20%));
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1400px) {
		/* background-color: blue; */
		/* grid: auto/ auto auto auto auto auto auto; */
		grid: auto/repeat(6, minmax(auto, calc(100 / 6) * 1%));
	}
	& > a {
		/* border: 1px solid yellowgreen; */
	}
`;
