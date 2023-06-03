import React from "react";
import styled from "styled-components";
export const Container = styled.div`
	/* position: relative; */
	/* width: 80%; */
	/* width: calc(100vw - (100vw - 100%)); */
	overflow-x: hidden;
	/* height: 100vh;
	width: 100%; */
	/* margin-left: 0.8em; */
	/* border: 1px solid red; */
	/* padding-top: calc(40 / 16 * 1em); */
	margin-top: 1em;
	background-color: #5ba2e1;
`;
export const RowOne = styled.div`
	position: relative;
	padding: 2em;
	/* width: 100%; */
	/* background-color: pink; */
`;
export const TopResult = styled.div`
	/* background-color: green; */
	h2 {
		display: block;
		padding-bottom: 0.5em;
	}
`;

export const ResultCard = styled.div`
	position: relative;
	background-color: var(--data-display-background);
	height: 80%;
	min-width: 20vw;
	width: 45%;
	@media only screen and (max-width: 600px) {
		/* background-color: pink; */
		width: 90%;
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media (min-width: 600px) and (max-width: 768px) {
		/* background-color: yellow; */
		width: 90%;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media (min-width: 768px) and (max-width: 992px) {
		/* background-color: blueviolet; */
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media (min-width: 992px) and (max-width: 1200px) {
		/* background-color: wheat; */
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1200px) {
		/* background-color: crimson; */
	}
	padding: 1em;
	border-radius: 5px;
	/* padding-top: 1em; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	transition: background-color 0.2s ease-in-out;
	img:nth-of-type(1) {
		width: 30%;
		border-radius: 50%;
	}
	p:nth-of-type(1) {
		padding-top: 0.6em;
		padding-bottom: 0.6em;
		font-size: 2rem;
	}
	p:nth-of-type(2) {
		background-color: var(--black-darkest);
		width: fit-content;
		font-weight: 600;
		padding: 0.4em;
		border-radius: 6666px;
	}
	img:nth-of-type(2) {
		position: absolute;
		width: 12%;
		border-radius: 50%;
		right: 0;
		bottom: 0;
		margin: 1em;
		margin-bottom: 0;
		visibility: hidden;
		transition: translate 0.15s ease-in;
	}
	&:hover {
		background-color: var(--data-display-background-hover);
		img:nth-of-type(2) {
			visibility: visible;
			/* padding-bottom: 1em; */
			translate: 0 -0.8em;
		}
	}
`;
export const Songs = styled.div`
	background-color: yellow;
	width: 45%;
	height: 100%;
`;
// #5d5d5d
