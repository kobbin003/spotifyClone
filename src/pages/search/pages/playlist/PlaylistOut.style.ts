import React from "react";
import styled from "styled-components";
export const Title = styled.h2`
	padding-top: 0.5em;
	padding-bottom: 0.5em;
`;
export const CardsContainer = styled.div`
	display: grid;
	width: 100%;
	position: relative;
	cursor: pointer;
	@media only screen and (max-width: 410px) {
		/* background-color: pink; */
		grid-template-columns: repeat(1, minmax(180px, 180px));
		grid-auto-rows: minmax(100px, 250px);
		/* grid: auto/auto; */
		/* border: 2px solid green; */
	}
	@media (min-width: 410px) and (max-width: 500px) {
		grid-template-columns: repeat(2, minmax(180px, 180px));
		grid-auto-rows: minmax(100px, 250px);
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media (min-width: 500px) and (max-width: 768px) {
		/* background-color: yellow; */
		/* grid: auto/auto auto; */
		grid: auto/repeat(2, minmax(150px, auto));
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media (min-width: 768px) and (max-width: 892px) {
		/* background-color: blueviolet; */
		/* grid: auto/auto auto auto; */
		grid: auto/repeat(3, minmax(150px, auto));
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media (min-width: 892px) and (max-width: 1200px) {
		/* background-color: wheat; */
		/* grid: auto/auto auto auto auto; */
		grid: auto/repeat(4, minmax(150px, 250px));
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1200px) and (max-width: 1400px) {
		/* background-color: crimson; */
		/* grid: auto/auto auto auto auto auto; */
		grid: auto/repeat(5, minmax(150px, auto));
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1400px) {
		/* background-color: blue; */
		/* grid: auto/ auto auto auto auto auto auto; */
		grid: auto/repeat(6, minmax(150px, auto));
	}
`;

export const ResultCard = styled.div`
	position: relative;
	background-color: var(--data-display-background);
	/* background-color: goldenrod; */
	padding: 0.5em;
	border-radius: 5px;
	/* padding-top: 1em; */
	margin-right: 0.8em;
	margin-bottom: 0.8em;
	display: flex;
	flex-direction: column;
	/* justify-content: space-around; */
	/* align-content: flex-start; */
	transition: background-color 0.2s ease-in-out;
	& > * {
		/* border: 1px solid blueviolet; */
		/* width: 110%; */
	}
	p:nth-of-type(1) {
		white-space: nowrap;
		overflow-x: scroll;
		padding: 0.5em 0;
		min-height: 20px;
		/* border: 1px solid greenyellow; */
		overflow-y: hidden;
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
	p:nth-of-type(2) {
		font-size: 0.7rem;
		/* background-color: var(--black-darkest); */
		/* width: fit-content;
		font-weight: 600;
		padding: 0.4em;
		border-radius: 6666px; */
	}
	@media only screen and (max-width: 500px) {
		/* height: 70%; */
		p:nth-of-type(1) {
			/* font-size: 1rem;
			padding-top: 0.3em;
			padding-bottom: 0.3em;
			margin-bottom: 0em; */
		}
	}
	&:hover {
		background-color: var(--data-display-background-hover);
		img:nth-of-type(2) {
			visibility: visible;
			/* padding-bottom: 1em; */
			translate: 0 -10px;
		}
	}
`;
export const ImageContainer = styled.div`
	position: relative;
	contain: content;
	img:nth-of-type(1) {
		width: 100%;
		border-radius: 5px;
	}
	img:nth-of-type(2) {
		position: fixed;
		width: 20%;
		border-radius: 50%;
		right: 5px;
		bottom: 0px;
		/* margin: 1em; */
		/* margin-bottom: 0; */
		visibility: hidden;
		transition: translate 0.1s ease-in, visibility 0.1s ease-in;
	}
	@media only screen and (max-width: 500px) {
		img:nth-of-type(1) {
			height: 100%;
			width: auto;
		}
		img:nth-of-type(2) {
			width: 25%;
		}
		height: 70%;
	}
`;
// export const Songs = styled.div`
// 	background-color: yellow;
// 	width: 45%;
// 	height: 100%;
// `;
// #5d5d5d
