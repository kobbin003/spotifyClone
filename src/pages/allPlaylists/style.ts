import styled from "styled-components";

export const Header = styled.h1`
	padding-top: 1rem;
	white-space: nowrap;
	/* background-color: aqua; */
	@media only screen and (max-width: 500px) {
		white-space: normal;
		font-size: 1.3rem;
	}

	@media (min-width: 500px) and (max-width: 620px) {
		font-size: 1.5rem;
	}

	@media (min-width: 620px) and (max-width: 1050px) {
		font-size: 1.7rem;
	}
	@media (min-width: 1050px) and (max-width: 1500px) {
		font-size: 2rem;
	}
`;
//----- container -----
export const AlbumsContainer = styled.div`
	position: relative;
	display: grid;
	gap: 1rem 1rem;
	@media only screen and (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
		& > a {
			min-width: 180px;
		}
	}

	@media (min-width: 500px) and (max-width: 720px) {
		/* background-color: yellow; */
		grid-template-columns: repeat(2, 1fr);
		& > a {
			min-width: 180px;
		}
	}

	@media (min-width: 720px) and (max-width: 1050px) {
		/* background-color: blueviolet; */
		grid-template-columns: repeat(3, 1fr);
		& > a {
			min-width: 180px;
		}
	}
	@media (min-width: 1050px) and (max-width: 1500px) {
		/* background-color: blueviolet; */
		grid-template-columns: repeat(4, 1fr);
		& > a {
			min-width: 180px;
		}
	}

	padding-bottom: 2em;
	padding-top: 1em;
	padding-left: 0.2em;
	width: 97%;

	& > a {
		margin-right: 0.3em;
		text-decoration: none;
		background-color: #181818;
		transition: background-color 0.2s ease-in;
		padding-top: 0.7em;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		/** Playlst Name */
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
		}
		&:hover {
			background-color: #303030;
			img ~ div {
				visibility: visible;
				translate: 0 -10px;
				filter: brightness(110%);
			}
		}
	}
`;

//----- card -----

export const ImageContainer = styled.div`
	position: relative;
	height: 70%;
	/* border: 1px solid greenyellow; */
	flex: 1;
	display: flex;
	justify-content: center;
	& > img:first-child {
		border-radius: 5px;
		width: 80%;
	}
`;
export const SpotifyPlay = styled.div`
	position: absolute;
	height: 18%;
	width: 18%;
	right: 10%;
	/* ^ Since playlist image width is 80%, so it has (20/2)% space on each of it's side */
	bottom: 0;
	visibility: hidden;
	transition: translate 0.2s ease-in;
	img {
		width: 100%;
	}
`;
