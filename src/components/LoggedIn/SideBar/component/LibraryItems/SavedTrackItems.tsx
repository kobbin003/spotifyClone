import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pindiv } from "./playlistItems.style";
import getUserSavedTracks from "../../../../../hooks/spotify-data/getUserSavedTracks";

const SavedTrackItemsTotal = () => {
	//* to rerender the component on "libraryModified" event trigger
	const [rerender, setRerender] = useState<boolean>(false);
	const { data, error, isLoading } = getUserSavedTracks(rerender);
	//* listen to "libraryModified" event
	useEffect(() => {
		const storageHandler = () => {
			// const value = localStorage.getItem("trial");
			setRerender((prev) => !prev);
			console.log("libraryModified event triggered");
		};
		window.addEventListener("libraryModified", storageHandler);
		return () => {
			// localStorage.removeItem("trial");
			window.removeEventListener("libraryModified", storageHandler);
		};
	}, []);
	return <span>{data?.total}</span>;
};
const SavedTrackItems = () => {
	return (
		<Link to={`/me/savedtracks`}>
			<div>
				<img src={"/public/icons/heartsquare.svg"} />
			</div>
			<div>
				<div>Liked Songs</div>
				<Pindiv>
					<img src={"/public/icons/pin.svg"} />
					<span>&nbsp;playlist</span>
					<b>&nbsp; . &nbsp;</b>
					<span>
						<SavedTrackItemsTotal />
						&nbsp;songs
					</span>
				</Pindiv>
			</div>
		</Link>
	);
};

export default SavedTrackItems;
