import React from "react";
import { msToMin } from "../../../../utils/msToMin";

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
	artists: { id: number; name: string; [key: string]: any }[];
}) => {
	return (
		<div>
			<div>
				<img />
			</div>
			<div>
				<p>{albumType}</p>
				<p>{name}</p>
				<span>{msToMin(albumDuration)}</span>
				<p>
					<span>
						<img src={images[0].url} />
					</span>
					<span>{artists[0].name}</span>
					<span>{releaseDate.split("-")[0]}</span>
					<span>{totalTracks}</span>
				</p>
			</div>
		</div>
	);
};

export default AlbumHeader;
