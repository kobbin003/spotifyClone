import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ArtistHeader from "./artistHeader/ArtistHeader";
import ArtistActions from "./artistActions/ArtistActions";
import ArtistContents from "./artistContents/ArtistContents";
import getArtistAlbums from "../../hooks/spotify-data/getArtistAlbums";
import getArtistTopTracks from "../../hooks/spotify-data/getArtistTopTracks";

const Artist = () => {
	const params = useParams();
	const { state } = useLocation();
	// console.log(state, params);
	// const artistAlbums = getArtistAlbums(params.id || "");

	return (
		<div>
			<ArtistHeader />
			<ArtistActions />
			<ArtistContents />
		</div>
	);
};

export default Artist;
