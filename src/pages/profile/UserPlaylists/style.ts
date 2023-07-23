import styled from "styled-components";
export const Container = styled.div`
	padding-top: 2em;
	/* background-color: aliceblue; */
`;

export const Header = styled.section`
	width: 97%;
	/* background-color: aquamarine; */
	display: flex;
	justify-content: space-between;
	min-width: 300px;
	& > a {
		text-decoration: none;
		color: var(--font-grey);
		display: block;
		padding-right: 1em;
		font-weight: 600;
		font-size: 0.9rem;

		&:hover {
			text-decoration: underline;
		}
	}
	& > a:nth-of-type(1) {
		font-size: 1.1rem;
		color: white;
	}
`;

//----- container -----
export const AlbumsContainer = styled.div`
	position: relative;
	display: grid;
	grid-gap: 0px 10px;
	padding-bottom: 2em;
	padding-top: 2em;
	padding-left: 0.2em;
	width: 97%;
	/* background-color: coral; */
	@media only screen and (max-width: 460px) {
		grid: 40vh / minmax(200px, 100%);
		& > a:nth-of-type(n + 2) {
			display: none;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media (min-width: 460px) and (max-width: 625px) {
		/* background-color: yellow; */
		grid: 35vh / repeat(2, minmax(145px, 60%));
		& > a:nth-of-type(n + 3) {
			display: none;
		}
	}
	/* @media (min-width: 600px) and (max-width: 756px) {
		grid: 35vh / repeat(2, minmax(auto, 50%));
		& > a:nth-of-type(n + 3) {
			display: none;
		}
	} */

	/* Medium devices (landscape tablets, 768px and up) */
	@media (min-width: 625px) and (max-width: 850px) {
		/* background-color: blueviolet; */
		grid: minmax(200px, 35vh) / repeat(3, minmax(145px, 33.33%));
		& > a:nth-of-type(n + 4) {
			display: none;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media (min-width: 850px) and (max-width: 1075px) {
		/* background-color: wheat; */
		/* border: 5px solid wheat; */
		/* grid: auto/auto auto auto auto; */
		grid: minmax(210px, 35vh) / repeat(4, minmax(auto, 25%));
		& > a:nth-of-type(n + 5) {
			display: none;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1075px) and (max-width: 1320px) {
		/* background-color: crimson; */
		/* grid: auto/auto auto auto auto auto; */
		grid: 35vh / repeat(5, minmax(auto, 20%));
		& > a:nth-of-type(n + 6) {
			display: none;
		}
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1320px) {
		/* background-color: blue; */
		/* grid: auto/ auto auto auto auto auto auto; */
		grid: 35vh / repeat(6, minmax(auto, 18.66%));
		& > a:nth-of-type(n + 7) {
			display: none;
		}
		/* grid: 35vh / repeat(6, minmax(auto, calc(100 / 6) * 1%)); */
	}
	& > a {
		/* border: 1px solid yellowgreen; */
	}
`;

//----- card -----
export const Card = styled.a`
	/* height: fit-content; */
	/* border: 1px solid goldenrod; */
	margin-right: 0.3em;
	text-decoration: none;
	background-color: #181818;
	transition: background-color 0.2s ease-in;
	padding-top: 0.7em;
	padding-bottom: 0.7em;
	/* 
	margin-right: 1em; */
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	& > * {
		width: 80%;
	}
	& > div {
		p:nth-of-type(1) {
			color: var(--font-white);
			padding: 0.8em 0;
			min-height: 16px;
			white-space: nowrap;
			font-weight: 500;
			/* overflow-x: scroll; */
			overflow-x: hidden;
			overflow-y: hidden;
			/* border: 1px solid rebeccapurple; */
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
		}
		/* p:nth-of-type(2) {
			color: var(--font-grey);
			font-size: 0.7rem;
			transform: scale(0.9);
			transform-origin: top left;
			& > span {
				text-transform: capitalize;
			}
		} */
	}
	&:hover {
		background-color: #303030;
		img ~ div {
			visibility: visible;
			translate: 0 -10px;
			filter: brightness(110%);
		}
	}
`;
export const ImageContainer = styled.div`
	position: relative;
	height: 70%;
	/* width: 80%; */
	/* border: 1px solid greenyellow; */
	flex: 1;
	display: flex;
	/* justify-content: center; */
	/* min-height: 150px; */
	& > img:first-child {
		border-radius: 5px;
		/* border: 2px solid goldenrod; */
		/* height: 50%; */
		width: 100%;
		height: 100%;
		min-width: 115px;
		/* min-height: 120px; */
	}
`;
export const SpotifyPlay = styled.div`
	position: absolute;
	height: 20%;
	width: 20%;
	/* border: 5px solid green; */
	right: 0.5em;
	bottom: 0;
	/* img { */
	visibility: hidden;
	/* scale: 0.2; */
	transition: translate 0.2s ease-in;
	/* } */
	img {
		width: 100%;
	}
`;
