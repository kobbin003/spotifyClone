import styled from "styled-components";
export const Card = styled.a`
	height: fit-content;
	width: 150px;
	/* width: 25%; */
	/* min-width: 600px; */
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		width: 40%;
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		width: 27%;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		width: 20%;
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		width: 20%;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		/* width: 20%; */
	}
	text-decoration: none;
	background-color: #181818;
	transition: background-color 0.2s ease-in;
	padding: 0.7em;
	/* 
	margin-right: 1em; */
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h4 {
		color: var(--font-white);
		/* margin: 0.8em 0; */
		/* padding-bottom: 1em; */
		padding: 0.8em 0;
		white-space: nowrap;
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
	}
	p {
		color: var(--font-grey);
		/* padding-top: 1em; */
		font-size: 0.7rem;
		transform: scale(0.9);
		transform-origin: top left;
	}
	&:hover {
		background-color: #303030;
		img:nth-child(1) {
			visibility: visible;
			translate: 0 -10px;
			filter: brightness(110%);
		}
	}
`;
export const ImageContainer = styled.div`
	position: relative;
	height: 100%;
	img {
		border-radius: 5px;
		width: 100%;
	}
`;
export const SpotifyPlay = styled.img`
	display: block;
	height: 100%;
	width: 100%;
	/* height: 5px; */
	/* width: 5px; */
	position: absolute;
	right: -40px;
	bottom: -50px;
	visibility: hidden;
	scale: 0.2;
	transition: translate 0.2s ease-in;
`;
