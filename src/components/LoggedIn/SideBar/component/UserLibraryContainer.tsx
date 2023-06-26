import React from "react";
import getFollowedArtist from "../../../../hooks/spotify-data/getFollowedArtist";
import getUserAlbums from "../../../../hooks/spotify-data/getUserAlbums";
import UserLibrary from "./UserLibrary";
import { ActionCards, ButtonLink } from "../style";

const UserLibraryContainer = () => {
	const {
		data: artistsData,
		error: artistsError,
		isLoading: artistsIsLoading,
	} = getFollowedArtist();
	const {
		data: albumsData,
		error: albumsError,
		isLoading: albumsIsLoading,
	} = getUserAlbums();
	return (
		<>
			{albumsIsLoading && artistsIsLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{artistsData && albumsData ? (
						<UserLibrary
							artists={artistsData}
							albums={albumsData}
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
			)}
		</>
	);
};

export default UserLibraryContainer;
