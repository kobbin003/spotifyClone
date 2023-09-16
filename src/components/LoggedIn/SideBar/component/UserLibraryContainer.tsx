import getFollowedArtists from "../../../../hooks/spotify-data/getFollowedArtists";
import getUserAlbums from "../../../../hooks/spotify-data/getUserAlbums";
import UserLibrary from "./UserLibrary";
import { ActionCards, ButtonLink } from "../style";
import getUserPlaylist from "../../../../hooks/spotify-data/getUserPlaylist";
import { useEffect, useState } from "react";

const UserLibraryContainer = () => {
	const [refetchArtist, setRefetchArtist] = useState(false);
	const [refetchAlbum, setRefetchAlbum] = useState(false);
	const [refetchPlaylist, setRefetchPlaylist] = useState(false);
	const {
		data: artistsData,
		error: artistsError,
		isLoading: artistsIsLoading,
	} = getFollowedArtists(refetchArtist);

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
			setRefetchAlbum((prev) => !prev);
			setRefetchArtist((prev) => !prev);
			setRefetchPlaylist((prev) => !prev);
		};
		window.addEventListener("albumLibraryModified", storageHandler);
		window.addEventListener("artistLibraryModified", storageHandler);
		window.addEventListener("playlistLibraryModified", storageHandler);
		return () => {
			window.removeEventListener("albumLibraryModified", storageHandler);
			window.removeEventListener("artistLibraryModified", storageHandler);
			window.removeEventListener("playlistLibraryModified", storageHandler);
		};
	}, []);
	if (albumsIsLoading || artistsIsLoading || playlistsIsLoading) {
		return <p>Loading...</p>;
	}
	return (
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
	);
};

export default UserLibraryContainer;
