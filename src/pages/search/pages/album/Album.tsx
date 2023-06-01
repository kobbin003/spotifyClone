import React from "react";
import { albums } from "../data";
import AlbumCards from "../../../../components/cards/AlbumCards/AlbumCards";
import { Container } from "./style";
const Album = () => {
	const arr = albums.albums.items;
	return (
		<Container>
			{albums.albums.items.map((item) => (
				<AlbumCards
					key={item.name}
					src={item.images[1].url}
					albumName={item.name}
					releaseDate={item.release_date}
					type={item.album_type}
					height={50}
					width={50}
				/>
			))}
		</Container>
	);
};

export default Album;
