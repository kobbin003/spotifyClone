import React, { useContext, useEffect, useState } from "react";
import { ActionCards, ButtonLink } from "./style";
import createPlaylist from "../../../../../hooks/spotify-data/playlist/createPlaylist";
import { UserProfileContext } from "../../../../../layout/LoggedInLayout";

const InitialCreatePlaylist = () => {
	const [accessToken, setAccessToken] = useState<string | undefined>("");
	const userProfileContext = useContext(UserProfileContext);
	const userId = userProfileContext?.userProfile?.id;

	const handleCreatePlaylist = () => {
		const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
		accessToken &&
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
		<ActionCards>
			<h4>Create your first playlist</h4>
			<p>It's easy, we'll help you</p>
			<ButtonLink>
				<button onClick={handleCreatePlaylist}>CreatePlaylist</button>
			</ButtonLink>
		</ActionCards>
	);
};

export default InitialCreatePlaylist;
