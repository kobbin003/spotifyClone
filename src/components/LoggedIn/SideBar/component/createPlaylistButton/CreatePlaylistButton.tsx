import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { HoverMessageItem } from "../../style";
import { ShowModalContext } from "../../../../../layout/LoggedInLayout";
import createPlaylist from "../../../../../hooks/spotify-data/playlist/createPlaylist";

/** requiired: user_id */
const CreatePlaylistButton = ({ id }: { id: string }) => {
	const [accessToken, setAccessToken] = useState<string>("");

	const handleCreatePlaylist = () => {
		// console.log("modal context", setShowModal);
		// setShowModal((prev) => !prev);
		const url = `https://api.spotify.com/v1/users/${id}/playlists`;
		createPlaylist(
			url,
			"POST",
			{ name: "playlist", description: "", public: true },
			accessToken,
			setAccessToken,
			() => {
				window.dispatchEvent(new Event("playlistLibraryModified"));
			}
		);
	};

	useEffect(() => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			setAccessToken(token);
		}
	}, []);

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
