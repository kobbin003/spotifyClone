import React from "react";
import {
	UserAlbumItem,
	UserAlbums,
	UserAlbumsError,
} from "../../../../hooks/spotify-data/getUserAlbums";
import { FetchedData } from "./UserLibrary";
import { LibraryItemStyle } from "./LibraryItems.style";
import { Link } from "react-router-dom";
import { FollowedArtistItem } from "../../../../hooks/spotify-data/getFollowedArtist";
type AlbumItemType = {
	added_at: string;
	album: UserAlbumItem;
};
type ArtistItemType = { items: FollowedArtistItem };
const LibraryItem = ({
	itemType,
	fetchedData,
}: {
	itemType: string;
	fetchedData: FetchedData;
}) => {
	const { data, error, isLoading } = fetchedData;
	console.log("fetch-data", fetchedData);
	const isOfTypeAlbum = (input: any) => input && input.href !== undefined;
	console.log("album type", isOfTypeAlbum(data));

	return (
		<>
			{" "}
			{data &&
				isOfTypeAlbum(data) &&
				data.items.map(
					(item: AlbumItemType | FollowedArtistItem, index: number) => {
						console.log(index, item.album);
					}
					// (
					// <LibraryItemStyle key={item}>
					// 	<Link
					// 		to={`/me/album/${album.id}`}
					// 		state={album}
					// 	>
					// 		<div>
					// 			<img
					// 				src={
					// 					album.images[0]
					// 						? album.images[0].url
					// 						: "/icons/defaultCover.svg"
					// 				}
					// 			/>
					// 		</div>
					// 		<div>
					// 			<div>{album.name}</div>
					// 			<div>
					// 				<span>{album.album_type}</span>
					// 				<b>&nbsp; . &nbsp;</b>
					// 				<span>
					// 					{album.artists.map((artist) => (
					// 						<p key={artist.id}>{artist.name}</p>
					// 					))}
					// 				</span>
					// 			</div>
					// 		</div>
					// 	</Link>
					// </LibraryItemStyle>
					// )
				)}
		</>
	);
};

export default LibraryItem;
{
	/* 
}

{
	/* <>
					{artists.map((artist, index) => (
						<LibraryItem key={artist.id}>
							<Link
								to={`/me/artist/${artist.id}`}
								// state={artist}
							>
								<div>
									<img
										src={
											artist.images[0]
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
						</LibraryItem>
					))}
				</> */
}

{
	/* {playlists.map((playlist, index) => (
				<LibraryItem key={playlist.id}>
					<div>
						<img
							src={
								playlist.images[0]
									? playlist.images[0].url
									: "/icons/defaultCover.svg"
							}
						/>
					</div>
					<div>
						<div>{playlist.name}</div>
						<div>
							<span>{playlist.type}</span>
							<b> . </b>
							<span>{playlist.owner.display_name}</span>
						</div>
					</div>
				</LibraryItem>
			))} */
}
