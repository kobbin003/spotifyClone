import React from "react";
import { msToMin } from "../../../utils/msToMin";
import { BoldDot, Container } from "../PlaylistHeader/style";
import { Owner, Tracks } from "../../../hooks/spotify-data/getPlaylist";
import getUserProfile from "../../../hooks/spotify-data/getUserProfile";

const SavedTrackHeader = ({ tracks }: { tracks: number }) => {
	const { data, error, isLoading } = getUserProfile();
	return (
		<Container>
			<div>
				<img src="/public/icons/defaultCover.svg" />
			</div>
			<div>
				<p>Playlist</p>
				<div>
					<h1>Liked Songs</h1>
				</div>
				<div>
					<span>{/* <img src={artists[0].images[0].url} />{" "} */}</span>
					<p>
						{data ? data?.display_name : ""}
						&nbsp;<BoldDot>.</BoldDot>&nbsp;
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
