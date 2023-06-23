import React from "react";
import getArtistAlbums from "../../../../hooks/spotify-data/getArtistAlbums";
import { Link, useLocation, useParams } from "react-router-dom";
import AlbumCards from "../../../../components/cards/AlbumCards/AlbumCards";
import {
	AlbumsContainer,
	Card,
	Container,
	Header,
	ImageContainer,
	SpotifyPlay,
} from "./style";
import { albums } from "../../../search/pages/data";

const ArtistAlbums = ({ artistName }: { artistName: string | null }) => {
	const params = useParams();
	const { data, error, isLoading } = getArtistAlbums(params.id || "");
	// console.log("ArtistAlbums", data, error, isLoading);
	// const artistName = useLocation().state;
	// console.log(params);
	// console.log("stateToPass", data?.items);
	if (isLoading) return <p>Loading...</p>;
	return (
		<Container>
			<Header>
				<Link to="">
					<h2>Discography</h2>
				</Link>
				<Link
					to={`/me/artist/${params.id}/allAlbums`}
					state={{ albums: data?.items, artistName }}
				>
					Show all
				</Link>
			</Header>
			<AlbumsContainer>
				{data &&
					data.items.map((item) => (
						<Card
							href=""
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
								<p>
									{item.release_date.split("-")[0]} <b>.</b>{" "}
									<span>{item.album_type}</span>
								</p>
							</div>
						</Card>
					))}
			</AlbumsContainer>
		</Container>
	);
};

export default ArtistAlbums;
