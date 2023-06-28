import React from "react";
import { Container, Header, Tracks } from "./style";
import getAlbumTracks, {
	AlbumTrack,
	AlbumTrackArtist,
} from "../../../hooks/spotify-data/getAlbumTracks";
import { ArtistAlbumItem } from "../../../hooks/spotify-data/getArtistAlbums";
import AlbumActions from "../../album:id/components/AlbumActions/AlbumActions";
import AlbumTracks from "../../album:id/components/AlbumTracks/AlbumTracks";
import { Link } from "react-router-dom";

const AlbumItem = ({ albumData }: { albumData: ArtistAlbumItem }) => {
	const { data, error, isLoading } = getAlbumTracks(albumData.id);
	console.log(albumData);
	// const tracks
	return (
		<Container>
			<Header>
				<div>
					<img src={albumData.images[0].url}></img>
				</div>
				<div>
					<div>
						<Link
							to={`/me/album/${albumData.id}`}
							state={albumData}
						>
							<h2>{albumData.name}</h2>
						</Link>
					</div>
					<div>
						<p>{albumData.album_type}&nbsp;</p>
						<b>.&nbsp;</b>
						<p>{albumData.release_date.split("-")[0]}&nbsp;</p>
						<b>.&nbsp;</b>
						<p>{albumData.total_tracks} songs</p>
					</div>
					<AlbumActions />
				</div>
			</Header>
			{data && <AlbumTracks<AlbumTrack[]> tracks={data?.items} />}
		</Container>
	);
};

export default AlbumItem;
