import React from "react";
import PopularTracks from "./popularTracks/PopularTracks";
import ArtistAlbums from "./albums/ArtistAlbums";

const ArtistContents = ({ artistName }: { artistName: string | null }) => {
	return (
		<div>
			<PopularTracks />
			<ArtistAlbums artistName={artistName} />
		</div>
	);
};

export default ArtistContents;
