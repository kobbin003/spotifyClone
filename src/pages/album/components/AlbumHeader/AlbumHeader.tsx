import React from "react";
import { msToMin } from "../../../../utils/msToMin";
import { BoldDot, Container } from "./style";
import { UserAlbumArtists } from "../../../../hooks/spotify-data/getUserAlbums";

const AlbumHeader = ({
	images,
	albumType,
	name,
	releaseDate,
	totalTracks,
	artists,
	albumDuration,
}: {
	images: { url: string; height: number; width: number }[];
	albumType: string;
	name: string;
	releaseDate: string;
	totalTracks: number;
	albumDuration: number;
	artists: UserAlbumArtists;
}) => {
	console.log("images", artists);
	return (
		<Container>
			<div>
				<img src={images[0].url} />
			</div>
			<div>
				<p>{albumType[0].toUpperCase() + albumType.slice(1)}</p>
				<h1>{name}</h1>
				<div>
					<span>{/* <img src={artists[0].images[0].url} />{" "} */}</span>
					<p>
						{artists[0].name}&nbsp;<BoldDot>.</BoldDot>&nbsp;
					</p>
					<p>
						{releaseDate.split("-")[0]}
						&nbsp;<BoldDot>.</BoldDot>&nbsp;
					</p>
					<p>
						{totalTracks} songs&nbsp;<b>,</b>&nbsp;
					</p>
					<p>
						<span>{msToMin(albumDuration).split(".")[0]}&nbsp;hr&nbsp;</span>
						<span>{msToMin(albumDuration).split(".")[1]}&nbsp;min&nbsp;</span>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default AlbumHeader;
