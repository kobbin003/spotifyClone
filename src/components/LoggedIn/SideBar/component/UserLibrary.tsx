import { MouseEvent, useEffect, useReducer, useState } from "react";
import {
	ButtonTypes,
	ContainerLibrary,
	SelectContainer,
} from "./userLibrary.style";
import ItemLibrary from "./LibraryItems/LibraryItem";
import { FollowedArtistItem } from "../../../../hooks/spotify-data/getFollowedArtist";
import { UserAlbums } from "../../../../hooks/spotify-data/getUserAlbums";

export type FetchedData = {
	data: UserAlbums | { items: FollowedArtistItem[] } | null;
};
const UserLibrary = ({
	artists,
	albums,
}: // playlists,
{
	artists: { items: FollowedArtistItem[] };
	albums: UserAlbums;
	// playlists: string;
}) => {
	// const [libraryItemType, setLibraryItemType] = useState<string>("albums");
	const [fetchedData, setFetchedData] = useState<FetchedData>({
		data: albums,
	});
	type INITIALSTATE = { name: string; active: boolean }[];
	type ACTIONTYPE = { type: string; payload: { name: string } };
	const initialState = [
		{ name: "albums", active: true },
		{ name: "artists", active: false },
		{ name: "playlists", active: false },
	];
	const reducer = (state: INITIALSTATE, action: ACTIONTYPE) => {
		switch (action.type) {
			case "ACTIVATE":
				return state.map((item) => {
					if (item.name == action.payload.name) {
						return { ...item, active: true };
					} else return { ...item, active: false };
				});
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLElement;
		// setLibraryItemType(target.innerText);
		dispatch({ type: "ACTIVATE", payload: { name: target.innerText } });

		if (target.innerText == "albums") {
			setFetchedData({
				data: albums ? albums : null,
			});
		} else if (target.innerText == "artists") {
			setFetchedData({
				data: artists ? artists : null,
			});
		} else if (target.innerText == "playlists") {
			// setFetchedData({
			// 	data: "empty playlist"
			// });
			alert("set playlist");
		} else {
		}
	};
	useEffect(() => {
		setFetchedData({
			data: albums ? albums : null,
		});
	}, []);

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
				<ItemLibrary
					// itemType={libraryItemType}
					fetchedData={fetchedData}
				></ItemLibrary>
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
