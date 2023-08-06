import { useParams } from "react-router-dom";
import { Container, MidContainer } from "./style";
import SavedTrackHeader from "./SavedTracksHeader/SavedTracksHeader";
import SavedTracksTracks from "./SavedTracksTracks/SavedTracksTracks";
import getUserSavedTracks from "../../hooks/spotify-data/getUserSavedTracks";
import { useState } from "react";

const SavedTracks = () => {
	return (
		<Container>
			<SavedTrackHeader />
			<MidContainer>
				<img
					src="/icons/spotify_play.svg"
					alt="play button"
				/>
			</MidContainer>
			<SavedTracksTracks />
		</Container>
	);
};

export default SavedTracks;
