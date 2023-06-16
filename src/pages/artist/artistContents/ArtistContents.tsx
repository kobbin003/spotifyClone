import React from "react";
import PopularTracks from "./popularTracks/PopularTracks";
import ArtistAlbums from "./albums/ArtistAlbums";

const ArtistContents = () => {
	return (
		<div>
			<PopularTracks />
			<ArtistAlbums />
		</div>
	);
};

export default ArtistContents;
