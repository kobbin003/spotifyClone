import styled from "styled-components";
import { style } from "styled-system";

export const Container = styled.div`
	/* height: 500px; */
	height: 100vh;
	width: 100%;
	background-color: var(--black-dark);
	/* min-width: 550px; */
	/* overflow: hidden; */
`;
export const SubHeaders = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1em;
	h2 {
		min-width: 200px;
	}
	a {
		text-decoration: none;
		color: var(--font-grey);
		font-size: 0.8rem;
		align-self: center;
		min-width: 50px;
	}
`;
export const Albums = styled.div`
	display: flex;
	/* width: 100%; */
	justify-content: space-between;
	/* flex-wrap: wrap; */
	padding: 1em;
	overflow: hidden;
	min-width: 300px;
	@media only screen and (max-width: 600px) {
		/* background-color: pink; */
		a:nth-child(n + 3) {
			display: none;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media (min-width: 600px) and (max-width: 768px) {
		/* background-color: yellow; */
		a:nth-child(n + 4) {
			display: none;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media (min-width: 768px) and (max-width: 992px) {
		/* background-color: blueviolet; */
		a:nth-child(n + 5) {
			display: none;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media (min-width: 992px) and (max-width: 1200px) {
		/* background-color: wheat; */
		a:nth-child(n + 6) {
			display: none;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1200px) {
		/* background-color: crimson; */
		a:nth-child(n + 7) {
			display: none;
		}
	}
`;
//! adjust album wrt to media
