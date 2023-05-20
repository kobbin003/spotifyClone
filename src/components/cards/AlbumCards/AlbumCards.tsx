import React from "react";
import styled from "styled-components";
const Card = styled.a`
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
const ImageContainer = styled.div`
	img {
		border-radius: 5px;
		width: 100%;
	}
	contain: content;
`;
const SpotifyPlay = styled.img`
	/* height: 5px; */
	/* width: 5px; */
	position: absolute;
	bottom: -70px;
	right: -60px;
	visibility: hidden;
	scale: 0.2;
	transition: translate 0.2s ease-in;
`;
type AlbumCardProps = {
	src: string;
	albumName: string;
	releaseDate: string;
	type: string;
	height: number;
	width: number;
};
const AlbumCards = ({
	src,
	albumName,
	releaseDate,
	type,
	height,
	width,
}: AlbumCardProps) => {
	const releaseYear = releaseDate.split("-")[0];
	return (
		<Card href="">
			<ImageContainer>
				<SpotifyPlay src="/public/icons/spotify_play.svg" />
				<img src={src} />
			</ImageContainer>
			<div>
				<h4>
					<b>{albumName}</b>
				</h4>
				<p>
					{releaseYear} <b>.</b> {type}
				</p>
			</div>
		</Card>
	);
};

export default AlbumCards;
