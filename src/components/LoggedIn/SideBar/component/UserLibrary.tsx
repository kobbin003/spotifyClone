import React, { MouseEvent, useEffect, useState } from "react";
import { ContainerLibrary, SelectContainer } from "./userLibrary.style";
import ItemLibrary from "./LibraryItem";
import getFollowedArtist, {
	FollowedArtist,
	FollowedArtistError,
	FollowedArtistItem,
} from "../../../../hooks/spotify-data/getFollowedArtist";
import getUserAlbums, {
	UserAlbumsError,
} from "../../../../hooks/spotify-data/getUserAlbums";
import { UserAlbums } from "../../../../hooks/spotify-data/getUserAlbums";
import { Link } from "react-router-dom";

export type FetchedData = {
	data: UserAlbums | { items: FollowedArtistItem[] } | null;
	error: UserAlbumsError | FollowedArtistError | null;
	isLoading: boolean;
};
const UserLibrary = ({
	artists,
	albums,
}: {
	artists: { items: FollowedArtistItem[] };
	albums: UserAlbums;
}) => {
	const [libraryItemType, setLibraryItemType] = useState<string>("albums");
	const [fetchedData, setFetchedData] = useState<FetchedData>({
		data: null,
		error: null,
		isLoading: false,
	});

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLElement;
		if (target.innerText == "albums") {
			setLibraryItemType(target.innerText);
			setFetchedData({
				data: albums ? albums : null,
				error: null,
				isLoading: true,
			});
		} else if (target.innerText == "artists") {
			setLibraryItemType(target.innerText);
			setFetchedData({
				data: artists ? artists : null,
				error: null,
				isLoading: true,
			});
		}
	};
	useEffect(() => {
		setFetchedData({
			data: albums ? albums : null,
			error: null,
			isLoading: true,
		});
	}, []);

	return (
		<div>
			<SelectContainer>
				<button onClick={handleClick}>artists</button>
				<button onClick={handleClick}>albums</button>
				<button onClick={handleClick}>playlists</button>
			</SelectContainer>
			<ContainerLibrary>
				<ItemLibrary
					itemType={libraryItemType}
					fetchedData={fetchedData}
				></ItemLibrary>
			</ContainerLibrary>
		</div>
	);
};

export default UserLibrary;
