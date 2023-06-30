import styled from "styled-components";
export const Card = styled.div`
	& > a {
		text-decoration: none;
		color: white;
	}
	height: fit-content;
	/* min-height: 200px; */
	/* width: 150px; */
	/* width: auto; */
	/* border: 1px solid green; */
	margin-right: 0.3em;
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
		padding: 0.8em 0;
		min-height: 16px;
		white-space: nowrap;
		overflow-x: scroll;
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
	p {
		color: var(--font-grey);
		/* padding-top: 1em; */
		font-size: 0.7rem;
		transform: scale(0.9);
		transform-origin: top left;
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
	height: 100%;
	width: 100%;
	flex: 1;
	/* min-height: 150px; */
	& > img:first-child {
		border-radius: 5px;
		/* border: 2px solid goldenrod; */
		/* height: 50%; */
		width: 100%;
		min-width: 115px;
		/* min-height: 120px; */
	}
`;
export const SpotifyPlay = styled.div`
	position: absolute;
	height: 20%;
	width: 20%;
	/* border: 5px solid green; */
	right: 0;
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
