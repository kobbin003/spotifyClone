import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArtistAlbumItem } from "../../hooks/spotify-data/getArtistAlbums";
import { AlbumsContainer, Header, ImageContainer, SpotifyPlay } from "./style";
import {
	UserPlaylist as UserPlaylistType,
	UserPlaylistItem,
} from "../../hooks/spotify-data/getUserPlaylist";

const AllPlaylists = () => {
	const {
		playlists,
		userName,
	}: { playlists: UserPlaylistType; userName: string } = useLocation().state;
	const { id } = useParams();

	return (
		// <>All plylists</>
		<div>
			<Header>
				<h4>{userName}'s Playlists</h4>
			</Header>
			<AlbumsContainer>
				{playlists.items.map((item) => (
					<Link
						to={`/me/playlist/${item.id}`}
						key={item.id}
					>
						<ImageContainer>
							<img
								src={item.images[0].url}
								// onError={handleError}
								// onLoad={handleLoad}
							/>
							<SpotifyPlay>
								<img
									src="/icons/spotify_play.svg"
									className="spotify"
								/>
							</SpotifyPlay>
						</ImageContainer>
						<div>
							<p>
								<b>{item.name}</b>
							</p>
						</div>
					</Link>
				))}
				{playlists.items.map((item) => (
					<Link
						to={`/me/playlist/${item.id}`}
						key={item.id}
					>
						<ImageContainer>
							<img
								src={item.images[0].url}
								// onError={handleError}
								// onLoad={handleLoad}
							/>
							<SpotifyPlay>
								<img
									src="/icons/spotify_play.svg"
									className="spotify"
								/>
							</SpotifyPlay>
						</ImageContainer>
						<div>
							<p>
								<b>{item.name}</b>
							</p>
						</div>
					</Link>
				))}
			</AlbumsContainer>
		</div>
	);
};

export default AllPlaylists;
