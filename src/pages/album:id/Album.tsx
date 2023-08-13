import React, { useEffect, useState } from "react";
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
	// console.log("album/:id");
	const { id } = useParams();
	const { data, error, isLoading } = getAlbum(`${id}`);
	// Destructuring:
	if (isLoading || !data) return <p>Loading...</p>;
	const {
		images,
		album_type,
		name,
		release_date,
		total_tracks,
		artists,
		tracks,
	} = data as AlbumType;
	if (!data) return <></>;
	// console.log("album", data);

	// console.log(albumDuration);
	const albumDuration =
		data &&
		data.tracks.items.reduce((total, track) => total + track.duration_ms, 0);

	return (
		<Container>
			{data && (
				<>
					{/* <p>ALBUM</p> */}
					<AlbumHeader
						images={images}
						albumType={album_type}
						name={name}
						releaseDate={release_date}
						totalTracks={total_tracks}
						artists={artists}
						albumDuration={albumDuration}
					/>
					<AlbumActions id={id} />
					<AlbumTracks<UserAlbumTracksItems> tracks={tracks.items} />
				</>
			)}
		</Container>
	);
};

export default Album;
