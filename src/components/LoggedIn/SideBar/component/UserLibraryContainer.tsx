import getFollowedArtists from "../../../../hooks/spotify-data/getFollowedArtists";
import getUserAlbums from "../../../../hooks/spotify-data/getUserAlbums";
import UserLibrary from "./UserLibrary";
import { ActionCards, ButtonLink } from "../style";
import getUserPlaylist from "../../../../hooks/spotify-data/getUserPlaylist";
import getUserSavedTracks from "../../../../hooks/spotify-data/getUserSavedTracks";
import { useEffect, useState } from "react";

const UserLibraryContainer = () => {
	// const [rerender, setRerender] = useState(false);
	const [refetchArtist, setRefetchArtist] = useState(false);
	const [refetchAlbum, setRefetchAlbum] = useState(false);
	const [refetchPlaylist, setRefetchPlaylist] = useState(false);
	const {
		data: artistsData,
		error: artistsError,
		isLoading: artistsIsLoading,
	} = getFollowedArtists(refetchArtist);
	// console.log(artistsData);

	const {
		data: albumsData,
		error: albumsError,
		isLoading: albumsIsLoading,
	} = getUserAlbums(refetchAlbum);

	const {
		data: playlistsData,
		error: playlistsError,
		isLoading: playlistsIsLoading,
	} = getUserPlaylist(refetchPlaylist);
	useEffect(() => {
		const storageHandler = (e: any) => {
			// const value = localStorage.getItem("trial");
			setRefetchAlbum((prev) => !prev);
			setRefetchArtist((prev) => !prev);
			setRefetchPlaylist((prev) => !prev);

			if (e.type == "albumLibraryModified") {
				console.log("albumLibraryModified event triggered");
			}
			if (e.type == "artistLibraryModified") {
				console.log("artistLibraryModified event triggered");
			}
		};
		window.addEventListener("albumLibraryModified", storageHandler);
		window.addEventListener("artistLibraryModified", storageHandler);
		return () => {
			// localStorage.removeItem("trial");
			window.removeEventListener("albumLibraryModified", storageHandler);
			window.removeEventListener("artistLibraryModified", storageHandler);
		};
	}, []);
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
