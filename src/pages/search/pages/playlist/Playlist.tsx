import React from "react";
import { Container } from "./style";
import { playlists } from "../data";
import AlbumCards from "../../../../components/cards/AlbumCards/AlbumCards";
import { useOutletContext } from "react-router-dom";
import getSearchItem, {
	SearchDataPlaylist,
} from "../../../../hooks/spotify-data/getSearchItem";
const Playlist = () => {
	const [queryFromSearchBar, ,]: any[] = useOutletContext();
	// console.log("album", queryFromSearchBar);
	const { data, error, isLoading } = getSearchItem<SearchDataPlaylist>(
		queryFromSearchBar,
		"playlist"
	);
	return (
		<Container>
			{!queryFromSearchBar ? (
				<p>search</p>
			) : isLoading ? (
				<p>Loading...</p>
			) : (
				data &&
				data.playlists.items.map((item) => {
					return (
						<AlbumCards
							id={item.id}
							search="playlist"
							key={item.id}
							src={item.images[0].url}
							albumName={item.name}
							releaseDate={item.owner.display_name}
							type={item.owner.type}
							height={50}
							width={50}
						/>
					);
				})
			)}
		</Container>
	);
};

export default Playlist;
