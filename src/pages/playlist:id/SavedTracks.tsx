import { useParams } from "react-router-dom";
import { Container, MidContainer } from "./style";
import SavedTrackHeader from "./SavedTracksHeader/SavedTracksHeader";
import SavedTracksTracks from "./SavedTracksTracks/SavedTracksTracks";
import getUserSavedTracks from "../../hooks/spotify-data/getUserSavedTracks";

const SavedTracks = () => {
	// const { someParam } = useParams();
	// const total = someParam && parseInt(someParam);
	const { data, error, isLoading } = getUserSavedTracks();

	const total = data && data.total;
	// console.log("savedTracks", typeof someParam);
	return (
		<Container>
			{total && (
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
					{isLoading ? <p>Loading..</p> : <SavedTracksTracks tracks={data} />}
					{/* <AlbumTracks<UserAlbumTracksItems> tracks={tracks.items} /> */}
				</>
			)}
		</Container>
	);
};

export default SavedTracks;
