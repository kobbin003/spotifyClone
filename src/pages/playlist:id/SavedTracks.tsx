import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
	PlaylistType,
	getPlaylist,
} from "../../hooks/spotify-data/getPlaylist";
import PlaylistHeader from "./PlaylistHeader/PlaylistHeader";
import { Container, MidContainer } from "./style";
import { UserSavedTracks } from "../../hooks/spotify-data/getUserSavedTracks";
import SavedTrackHeader from "./SavedTracksHeader/SavedTracksHeader";
import SavedTracksTracks from "./SavedTracksTracks/SavedTracksTracks";

const SavedTracks = () => {
	console.log("savedTracks");
	const { state } = useLocation();
	// Destructuring:
	const { total } = state as UserSavedTracks;
	if (!state) return <></>;

	return (
		<Container>
			{state && (
				<>
					<SavedTrackHeader tracks={total} />
					<MidContainer>
						<img
							src="/icons/spotify_play.svg"
							alt="play button"
							// height={50}
							// width={50}
						/>
					</MidContainer>
					<SavedTracksTracks />
					{/* <AlbumTracks<UserAlbumTracksItems> tracks={tracks.items} /> */}
				</>
			)}
		</Container>
	);
};

export default SavedTracks;
