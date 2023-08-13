import { MouseEvent, useEffect, useReducer, useState } from "react";
import {
	ButtonTypes,
	ContainerLibrary,
	SelectContainer,
} from "./userLibrary.style";
import ItemLibrary from "./LibraryItems/LibraryItem";
import { FollowedArtistItem } from "../../../../hooks/spotify-data/getFollowedArtists";
import { UserAlbums } from "../../../../hooks/spotify-data/getUserAlbums";
import { UserSavedTracks } from "../../../../hooks/spotify-data/getUserSavedTracks";
import {
	UserPlaylist,
	UserPlaylistItem,
} from "../../../../hooks/spotify-data/getUserPlaylist";
import { reducer } from "./reducers/userLibraryReducer";
import { useLocation } from "react-router-dom";
import { setUpInitialState } from "./reducers/setUpInitialState";

export type FetchedData = {
	data:
		| UserAlbums
		| { items: FollowedArtistItem[] }
		| { playlists: UserPlaylist }
		| null;
};
const UserLibrary = ({
	artists,
	albums,
	playlists,
}: {
	artists: { items: FollowedArtistItem[] };
	albums: UserAlbums;
	playlists: { playlists: UserPlaylist };
}) => {
	const libData: { [key: string]: FetchedData["data"] } = {
		artists,
		albums,
		playlists,
	};
	const location = useLocation();
	const pathName: string = location.pathname.split("/")[2] || "playlist";
	const initialState = setUpInitialState(pathName);
	const initialLibraryItemType = initialState.find(
		(state) => state.active
	)?.name;
	const [libraryItemType, setLibraryItemType] = useState<string>(
		initialLibraryItemType ||
			"playlists" /** //? set "playlists" as default "libraryItemType" if there is no pathName*/
	);
	const [fetchedData, setFetchedData] = useState<FetchedData | { data: {} }>({
		data: libData[
			initialLibraryItemType || "playlist"
		] /** //? set libData["playlists"] as default "fetchedData" if there is no pathName*/,
	});

	const [state, dispatch] = useReducer(reducer, initialState);
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLElement;
		setLibraryItemType(target.innerText);
		dispatch({ type: "ACTIVATE", payload: { name: target.innerText } });

		if (target.innerText == "albums") {
			setFetchedData({
				data: albums ? albums : null,
			});
		} else if (target.innerText == "artists") {
			setFetchedData({
				data: artists ? artists : null,
			});
		} else {
			setFetchedData({
				data: playlists ? playlists : null,
			});
		}
	};

	return (
		<div>
			<SelectContainer>
				{state.map((type) => (
					<ButtonTypes
						key={type.name}
						onClick={handleClick}
						active={type.active}
					>
						{type.name}
					</ButtonTypes>
				))}
			</SelectContainer>
			<ContainerLibrary>
				{fetchedData && (
					<ItemLibrary
						itemType={libraryItemType}
						fetchedData={fetchedData}
					></ItemLibrary>
				)}
			</ContainerLibrary>
		</div>
	);
};
// #bcb8b854
export default UserLibrary;

//! selectype with setState
// const [types, setTypes] = useState<{ name: string; active: boolean }[]>([
// 	{ name: "albums", active: true },
// 	{ name: "artists", active: false },
// 	{ name: "playlists", active: false },
// ]);
// setTypes((prev) => {
// 	if (target.innerText == "albums") {
// 		return prev.map((item) => {
// 			if (item.name == "albums") {
// 				return { ...item, active: true };
// 			} else {
// 				return { ...item, active: false };
// 			}
// 		});
// 	} else if (target.innerText == "artists") {
// 		return prev.map((item) => {
// 			if (item.name == "artists") {
// 				return { ...item, active: true };
// 			} else {
// 				return { ...item, active: false };
// 			}
// 		});
// 	} else if (target.innerText == "playlists") {
// 		return prev.map((item) => {
// 			if (item.name == "playlists") {
// 				return { ...item, active: true };
// 			} else {
// 				return { ...item, active: false };
// 			}
// 		});
// 	} else {
// 		return prev;
// 	}
// });
