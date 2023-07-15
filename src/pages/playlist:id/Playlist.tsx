import React from "react";
import { useParams } from "react-router-dom";
import {
	PlaylistType,
	getPlaylist,
} from "../../hooks/spotify-data/getPlaylist";
import PlaylistHeader from "./PlaylistHeader/PlaylistHeader";
import { Container, MidContainer } from "./style";
import PlaylistsTracks from "./PlaylistTracks/PlaylistTracks";

const Playlist = () => {
	console.log("playlist/:id");
	const { id } = useParams();
	const { data, error, isLoading } = getPlaylist(`${id}`);
	// Destructuring:
	if (isLoading || !data) return <p>Loading...</p>;
	const { images, type, name, tracks, owner } = data as PlaylistType;
	if (!data) return <></>;

	console.log("albumDuration", tracks.items);
	const albumDuration =
		data &&
		tracks.items.reduce(
			(total, trackItem) => total + trackItem.track.duration_ms,
			0
		);
	return (
		<Container>
			{data && (
				<>
					<PlaylistHeader
						images={images}
						type={type}
						name={name}
						tracks={tracks}
						owner={owner}
						albumDuration={albumDuration}
					/>
					<MidContainer>
						<img
							src="/icons/spotify_play.svg"
							alt="play button"
							// height={50}
							// width={50}
						/>
					</MidContainer>
					<PlaylistsTracks />
					{/* <AlbumTracks<UserAlbumTracksItems> tracks={tracks.items} /> */}
				</>
			)}
		</Container>
	);
};

export default Playlist;
