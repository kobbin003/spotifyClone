import React, { SyntheticEvent } from "react";
import { Card, ImageContainer, SpotifyPlay } from "./style";

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
	// const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
	// 	console.log("image error");
	// 	e.currentTarget.src = src;
	// };
	// const handleLoad = (e: SyntheticEvent<HTMLImageElement>) => {
	// 	console.log("image loaded");
	// };
	return (
		<Card href="">
			<ImageContainer>
				<SpotifyPlay src="/icons/spotify_play.svg" />
				<img
					src={src}
					// onError={handleError}
					// onLoad={handleLoad}
				/>
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
