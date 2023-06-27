import React from "react";
import {
	UserAlbumItem,
	UserAlbums,
	UserAlbumsError,
} from "../../../../../hooks/spotify-data/getUserAlbums";
import { FetchedData } from "../UserLibrary";
import { LibraryItemStyle } from "./LibraryItem.style";
import { Link } from "react-router-dom";
import { FollowedArtistItem } from "../../../../../hooks/spotify-data/getFollowedArtist";
import { AlbumItems } from "./AlbumItems";
import { ArtistItems } from "./ArtistItems";
const isOfTypeAlbum = (input: any) => {
	if (input.items[0].album) {
		return true;
	} else {
		return false;
	}
};
const isOfTypeArtist = (input: any) => {
	if (input) {
		return input.items[0].type == "artist";
	}
};

//* WE HAVE REMOVED THE "itemType" prop
//* since we can use typeguard(ts) to check the type of fetchedData
const LibraryItem = ({
	// itemType,
	fetchedData,
}: {
	// itemType: string;
	fetchedData: FetchedData;
}) => {
	const { data } = fetchedData;
	// console.log("fetch-data", fetchedData);
	return (
		<>
			{data && isOfTypeAlbum(data) && <AlbumItems data={data} />}
			{data && isOfTypeArtist(data) && <ArtistItems data={data} />}
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
