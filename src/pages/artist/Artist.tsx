import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ArtistHeader from "./artistHeader/ArtistHeader";
import ArtistActions from "./artistActions/ArtistActions";
import ArtistContents from "./artistContents/ArtistContents";

const Artist = () => {
	const params = useParams();
	const { state } = useLocation();
	console.log(state);
	return (
		<div>
			<ArtistHeader />
			{/* followers:{}, images:[],name:string, */}
			<ArtistActions />
			<ArtistContents />
		</div>
	);
};

export default Artist;
