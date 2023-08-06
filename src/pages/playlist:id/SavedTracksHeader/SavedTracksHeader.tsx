import React from "react";
import { msToMin } from "../../../utils/msToMin";
import { BoldDot, Container } from "../PlaylistHeader/style";
import { Owner, Tracks } from "../../../hooks/spotify-data/getPlaylist";
import getUserProfile from "../../../hooks/spotify-data/getUserProfile";
import getUserSavedTracks from "../../../hooks/spotify-data/getUserSavedTracks";
import TrackCount from "./TrackCount";

const SavedTrackHeader = () => {
	const { data, error, isLoading } = getUserProfile();
	//! make sidebar responsive to localstorage.
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
					<TrackCount />
				</div>
			</div>
		</Container>
	);
};
export default SavedTrackHeader;
