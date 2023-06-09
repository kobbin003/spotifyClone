import React from "react";
import { msToMin } from "../../../utils/msToMin";
import { BoldDot, Container } from "../PlaylistHeader/style";
import { Owner, Tracks } from "../../../hooks/spotify-data/getPlaylist";

const SavedTrackHeader = ({ tracks }: { tracks: number }) => {
	console.log("albumduration");
	return (
		<Container>
			<div>
				<img src="/public/icons/defaultCover.svg" />
			</div>
			<div>
				<p>Playlist</p>
				<h1>Liked Songs</h1>
				<div>
					<span>{/* <img src={artists[0].images[0].url} />{" "} */}</span>
					<p>
						{"owner_name"}&nbsp;<BoldDot>.</BoldDot>&nbsp;
					</p>
					<p>{tracks} songs</p>
					<p>
						{/* <span>{msToMin(albumDuration).split(".")[0]}&nbsp;hr&nbsp;</span>
						<span>{msToMin(albumDuration).split(".")[1]}&nbsp;min&nbsp;</span> */}
					</p>
				</div>
			</div>
		</Container>
	);
};

export default SavedTrackHeader;
