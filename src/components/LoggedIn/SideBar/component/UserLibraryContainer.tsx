import getFollowedArtists from "../../../../hooks/spotify-data/getFollowedArtists";
import getUserAlbums from "../../../../hooks/spotify-data/getUserAlbums";
import UserLibrary from "./UserLibrary";
import { ActionCards, ButtonLink } from "../style";
import getUserPlaylist from "../../../../hooks/spotify-data/getUserPlaylist";
import getUserSavedTracks from "../../../../hooks/spotify-data/getUserSavedTracks";
import { useEffect, useState } from "react";

const UserLibraryContainer = () => {
	const {
		data: artistsData,
		error: artistsError,
		isLoading: artistsIsLoading,
	} = getFollowedArtists();

	const {
		data: albumsData,
		error: albumsError,
		isLoading: albumsIsLoading,
	} = getUserAlbums();

	const {
		data: playlistsData,
		error: playlistsError,
		isLoading: playlistsIsLoading,
	} = getUserPlaylist();

	if (albumsIsLoading || artistsIsLoading || playlistsIsLoading) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<>
				{artistsData && albumsData && playlistsData ? (
					<UserLibrary
						artists={artistsData}
						albums={albumsData}
						playlists={{
							playlists: playlistsData,
						}}
					/>
				) : (
					<ActionCards>
						<h4>Create your first playlist</h4>
						<p>It's easy, we'll help you</p>
						<ButtonLink>
							<span>CreatePlaylist</span>
						</ButtonLink>
					</ActionCards>
				)}
			</>
		</>
	);
};

export default UserLibraryContainer;
