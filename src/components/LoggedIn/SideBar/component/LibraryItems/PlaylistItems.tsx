import React from "react";
import {
	UserPlaylist,
	UserPlaylistItem,
} from "../../../../../hooks/spotify-data/getUserPlaylist";
import { UserAlbums } from "../../../../../hooks/spotify-data/getUserAlbums";
import { FollowedArtistItem } from "../../../../../hooks/spotify-data/getFollowedArtists";
import { UserSavedTracks } from "../../../../../hooks/spotify-data/getUserSavedTracks";
import { LibraryItemStyle } from "./LibraryItem.style";
import { Link } from "react-router-dom";
import { Pindiv } from "./playlistItems.style";
import SavedTrackItems from "./SavedTrackItems";

const PlaylistItems = ({
	data,
}: {
	data:
		| UserAlbums
		| { items: FollowedArtistItem[] }
		| { playlists: UserPlaylist };
}) => {
	const { playlists } = data as {
		playlists: UserPlaylist;
	};
	return (
		<>
			<>
				<LibraryItemStyle>
					<SavedTrackItems />
				</LibraryItemStyle>
			</>
			<>
				{playlists &&
					playlists.items.map((item) => (
						<LibraryItemStyle key={item.id}>
							<Link to={`/me/playlist/${item.id}`}>
								<div>
									<img
										src={
											item.images[0]
												? item.images[0].url
												: "/icons/defaultCover.svg"
										}
									/>
								</div>
								<div>
									<div>{item.name}</div>
									<div>
										<span>{item.type}</span>
										<b>&nbsp; . &nbsp;</b>
										<span>{item.owner.display_name}</span>
									</div>
								</div>
							</Link>
						</LibraryItemStyle>
					))}
			</>
		</>
	);
};

export default PlaylistItems;
