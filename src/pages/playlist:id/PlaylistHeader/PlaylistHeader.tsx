import React from "react";
import { msToMin } from "../../../utils/msToMin";
import { BoldDot, Container } from "./style";
import { Owner, Tracks } from "../../../hooks/spotify-data/getPlaylist";

const PlaylistHeader = ({
	images,
	type,
	name,
	tracks,
	owner,
	albumDuration,
}: {
	images: { url: string; height: number; width: number }[];
	type: string;
	name: string;
	tracks: Tracks;
	owner: Owner;
	albumDuration: number;
}) => {
	console.log("albumduration", albumDuration);
	return (
		<Container>
			<div>
				{images.length > 1 ? (
					<img src={images[0].url} />
				) : (
					<img src="/public/icons/defaultCover.svg" />
				)}
			</div>
			<div>
				<p>{type[0].toUpperCase() + type.slice(1)}</p>
				<div>
					<h1>{name}</h1>
				</div>
				<div>
					<span>{/* <img src={artists[0].images[0].url} />{" "} */}</span>
					<p>
						{owner.display_name}&nbsp;<BoldDot>.</BoldDot>&nbsp;
					</p>
					<p>{tracks.total} songs&nbsp;</p>
					{albumDuration ? (
						<p>
							<b>,</b>&nbsp;
							<span>{msToMin(albumDuration).split(".")[0]}&nbsp;hr&nbsp;</span>
							<span>{msToMin(albumDuration).split(".")[1]}&nbsp;min&nbsp;</span>
						</p>
					) : (
						<></>
					)}
				</div>
			</div>
		</Container>
	);
};

export default PlaylistHeader;
