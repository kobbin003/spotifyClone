import React from "react";
import { Container } from "./style";
import { playlists } from "../data";
import AlbumCards from "../../../../components/cards/AlbumCards/AlbumCards";
const Playlist = () => {
	return (
		<Container>
			{playlists.playlists.items.map((item) => {
				// const imageURL = item.images[1]
				// 	? item.images[1].url
				// 	: item.images[0].url;
				const imageURL = item.images[0].url;
				return (
					<AlbumCards
						key={item.name}
						src={imageURL}
						albumName={item.name}
						releaseDate={item.owner.display_name}
						type={item.owner.type}
						height={50}
						width={50}
					/>
				);
			})}
		</Container>
	);
};

export default Playlist;
