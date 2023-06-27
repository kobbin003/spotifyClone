import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { Container } from "./style";
import Track from "../search/pages/track/Track";
import AlbumHeader from "./components/AlbumHeader/AlbumHeader";
import AlbumTracks from "./components/AlbumTracks/AlbumTracks";
import AlbumActions from "./components/AlbumActions/AlbumActions";
import {
	UserAlbumArtists,
	UserAlbumItem,
	UserAlbumTracks,
	UserAlbumTracksItems,
} from "../../hooks/spotify-data/getUserAlbums";
import getAlbum, {
	Album as AlbumType,
} from "../../hooks/spotify-data/getAlbum";

const Album = () => {
	const { id } = useParams();
	const album = getAlbum(`${id}`);
	console.log("album", album);
	// Destructuring:
	const {
		images,
		album_type,
		name,
		release_date,
		total_tracks,
		artists,
		tracks,
	} = album.data as AlbumType;

	const albumDuration = tracks.items.reduce(
		(total, track) => total + track.duration_ms,
		0
	);
	// console.log(albumDuration);
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
			<AlbumTracks<UserAlbumTracksItems> tracks={tracks.items} />
		</Container>
	);
};

export default Album;
