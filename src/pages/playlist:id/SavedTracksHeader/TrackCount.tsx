import React, { useEffect, useState } from "react";
import getUserSavedTracks from "../../../hooks/spotify-data/getUserSavedTracks";

const TrackCount = () => {
	const [rerender, setRerender] = useState(false);
	const { data } = getUserSavedTracks(rerender);
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
	return <p>{data ? data.total : ""} songs</p>;
};

export default TrackCount;
