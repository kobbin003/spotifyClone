import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ArtistHeader from "./artistHeader/ArtistHeader";
import ArtistActions from "./artistActions/ArtistActions";
import ArtistContents from "./artistContents/ArtistContents";
import getArtistAlbums from "../../hooks/spotify-data/getArtistAlbums";
import getArtistTopTracks from "../../hooks/spotify-data/getArtistTopTracks";
import getArtist from "../../hooks/spotify-data/getArtist";

const Artist = () => {
	const { id } = useParams();
	const artistHeaderData = getArtist(id || "");
	// const artistAlbums = getArtistAlbums(params.id || "");
	// console.log(artistHeaderData);
	return (
		<div>
			<ArtistHeader artistHeaderData={artistHeaderData} />
			<ArtistActions />
			{artistHeaderData.data && (
				<ArtistContents artistName={artistHeaderData.data?.name} />
			)}
		</div>
	);
};

export default Artist;
