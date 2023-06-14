import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "./style";
import Track from "../search/pages/track/Track";
import AlbumHeader from "./components/AlbumHeader/AlbumHeader";
import AlbumTracks from "./components/AlbumTracks/AlbumTracks";
import AlbumActions from "./components/AlbumActions/AlbumActions";
import { UserAlbumItem } from "../../hooks/spotify-data/getUserAlbums";

const Album = () => {
	const params = useParams();
	const album = useLocation();
	console.log("album link", album.state);
	const {
		images,
		album_type,
		name,
		release_date,
		total_tracks,
		artists,
		tracks,
	} = album.state as UserAlbumItem;
	const albumDuration = tracks.items.reduce(
		(total, track) => total + track.duration_ms,
		0
	);
	console.log(albumDuration);
	return (
		<Container>
			<AlbumHeader
				images={images}
				albumType={album_type}
				name={name}
				releaseDate={release_date}
				totalTracks={total_tracks}
				artists={artists}
				albumDuration={albumDuration}
			/>
			<AlbumActions />
			<AlbumTracks
				tracks={tracks.items}
				artists={artists}
			/>
		</Container>
	);
};

export default Album;
