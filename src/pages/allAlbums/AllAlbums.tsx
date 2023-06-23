import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArtistAlbumItem } from "../../hooks/spotify-data/getArtistAlbums";
import AlbumItem from "./components/AlbumItem";
import { Header } from "./style";

const AllAlbums = () => {
	const {
		albums,
		artistName,
	}: { albums: ArtistAlbumItem[]; artistName: string } = useLocation().state;
	const { id } = useParams();

	return (
		<div>
			<Header>
				<Link to={`/me/artist/${id}`}>{artistName}</Link>
			</Header>
			{albums.map((item) => (
				<AlbumItem
					albumData={item}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default AllAlbums;
