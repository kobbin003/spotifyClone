import React, { MouseEvent, useContext, useState } from "react";
import { HoverMessageItem } from "../../style";
import { ShowModalContext } from "../../../../../layout/LoggedInLayout";

/** requiired: user_id */
const CreatePlaylistButton = () => {
	// const url = `https://api.spotify.com/v1/users/{user_id}/playlists`;
	// const method = "PUT";
	// const body = {
	// 	name: "New Playlist",
	// 	description: "New playlist description",
	// 	public: false,
	// };
	const setShowModal = useContext(ShowModalContext);
	const handleCreatePlaylist = () => {
		// console.log("modal context", setShowModal);
		setShowModal((prev) => !prev);
	};
	return (
		<>
			<button onClick={handleCreatePlaylist}>
				<img src="/icons/AddLibrary/add.svg" />
				<HoverMessageItem>Create Playlist</HoverMessageItem>
			</button>
		</>
	);
};

export default CreatePlaylistButton;
