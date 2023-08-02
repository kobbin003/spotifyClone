import { Link } from "react-router-dom";
import { LibraryItemStyle } from "./LibraryItem.style";
import { UserAlbums } from "../../../../../hooks/spotify-data/getUserAlbums";
import { FollowedArtistItem } from "../../../../../hooks/spotify-data/getFollowedArtists";
import {
	UserPlaylist,
	UserPlaylistItem,
} from "../../../../../hooks/spotify-data/getUserPlaylist";
import { UserSavedTracks } from "../../../../../hooks/spotify-data/getUserSavedTracks";

export const ArtistItems = ({
	data,
}: {
	data:
		| UserAlbums
		| { items: FollowedArtistItem[] }
		| { playlists: UserPlaylist };
}) => {
	const artists = data as { items: FollowedArtistItem[] };
	return (
		<>
			{artists &&
				artists.items.map((artist) => (
					<LibraryItemStyle key={artist.id}>
						<Link to={`/me/artist/${artist.id}`}>
							<div>
								<img
									src={
										artist.images && artist.images[0]
											? artist.images[0].url
											: "/icons/defaultCover.svg"
									}
								/>
							</div>
							<div>
								<div>{artist.name}</div>
								<div>
									<span>{artist.type}</span>
								</div>
							</div>
						</Link>
					</LibraryItemStyle>
				))}
		</>
	);
};
