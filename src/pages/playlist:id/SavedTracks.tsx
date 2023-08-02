import { useParams } from "react-router-dom";
import { Container, MidContainer } from "./style";
import SavedTrackHeader from "./SavedTracksHeader/SavedTracksHeader";
import SavedTracksTracks from "./SavedTracksTracks/SavedTracksTracks";
import getUserSavedTracks from "../../hooks/spotify-data/getUserSavedTracks";
import { useState } from "react";

const SavedTracks = () => {
	const [total, setTotal] = useState<number>();
	return (
		<Container>
			<SavedTrackHeader tracks={total || 0} />
			<MidContainer>
				<img
					src="/icons/spotify_play.svg"
					alt="play button"
				/>
			</MidContainer>
			<SavedTracksTracks setTotal={setTotal} />
		</Container>
	);
};

export default SavedTracks;
