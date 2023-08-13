import { Link } from "react-router-dom";
import { LibraryItemStyle } from "./LibraryItem.style";
import { UserAlbums } from "../../../../../hooks/spotify-data/getUserAlbums";
import { FollowedArtistItem } from "../../../../../hooks/spotify-data/getFollowedArtists";
import {
	UserPlaylist,
	UserPlaylistItem,
} from "../../../../../hooks/spotify-data/getUserPlaylist";
import { UserSavedTracks } from "../../../../../hooks/spotify-data/getUserSavedTracks";
import { useEffect, useState } from "react";

export const AlbumItems = ({
	data,
}: {
	data:
		| UserAlbums
		| { items: FollowedArtistItem[] }
		| { playlists: UserPlaylist }
		| {};
}) => {
	const albums = data as UserAlbums;
	// console.log("album item", albums);
	return (
		<>
			{albums &&
				albums.items.map(({ album }) => (
					<LibraryItemStyle key={album.id}>
						<Link to={`/me/album/${album.id}`}>
							<div>
								<img
									src={
										album.images[0]
											? album.images[0].url
											: "/icons/defaultCover.svg"
									}
								/>
							</div>
							<div>
								<div>{album.name}</div>
								<div>
									<span>{album.album_type}</span>
									<b>&nbsp; . &nbsp;</b>
									<span>
										{album.artists.map((artist) => (
											<p key={artist.id}>{artist.name}</p>
										))}
									</span>
								</div>
							</div>
						</Link>
					</LibraryItemStyle>
				))}
		</>
	);
};
