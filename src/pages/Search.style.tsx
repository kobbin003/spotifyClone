import React from "react";
import styled from "styled-components";
export const Container = styled.div`
	height: 100vh;
	width: 100%;
	/* background-color: #5ba2e1; */
`;

export const TopResult = styled.div`
	position: relative;
	padding: 2em;
	width: 100%;
	/* background-color: pink; */
	h2 {
		display: block;
		padding-bottom: 0.5em;
	}
`;

export const ResultCard = styled.div`
	position: relative;
	background-color: var(--data-display-background);
	height: 80%;
	width: 30%;
	min-width: 40vw;
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
// #5d5d5d
