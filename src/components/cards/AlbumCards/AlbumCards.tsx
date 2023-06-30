import React, { SyntheticEvent } from "react";
import { Card, ImageContainer, SpotifyPlay } from "./style";
import { Link } from "react-router-dom";

type AlbumCardProps = {
	src: string;
	albumName: string;
	releaseDate: string;
	type: string;
	height: number;
	width: number;
	id: string;
};
const AlbumCards = ({
	src,
	albumName,
	releaseDate,
	type,
	id,
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
		<Card>
			<Link to={`/me/album/${id}`}>
				<ImageContainer>
					<img
						src={src}
						// onError={handleError}
						// onLoad={handleLoad}
					/>
					<SpotifyPlay>
						<img
							src="/icons/spotify_play.svg"
							className="spotify"
						/>
					</SpotifyPlay>
				</ImageContainer>
				<div>
					<h4>
						<b>{albumName}</b>
					</h4>
					<p>
						{releaseYear} <b>.</b> {type}
					</p>
				</div>
			</Link>
		</Card>
	);
};

export default AlbumCards;
