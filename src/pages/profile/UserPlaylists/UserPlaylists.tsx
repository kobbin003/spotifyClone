import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
	AlbumsContainer,
	Card,
	Container,
	Header,
	ImageContainer,
	SpotifyPlay,
} from "./style";
import getUserPlaylist from "../../../hooks/spotify-data/getUserPlaylist";

const UserPlaylists = () => {
	const params = useParams();
	const { data, error, isLoading } = getUserPlaylist();
	if (isLoading) return <p>Loading...</p>;
	const userName = data?.items[0].owner.display_name;
	// const artistId = data?.items[0].
	return (
		<Container>
			<Header>
				{/* <Link to=""> */}
				<h2>Playlists</h2>
				{/* </Link> */}
				<Link
					to={`/me/profile/allplaylists`}
					state={{ playlists: data, userName }}
				>
					Show all
				</Link>
			</Header>
			<AlbumsContainer>
				{data &&
					data.items.map((item) => (
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
		</Container>
	);
};

export default UserPlaylists;
