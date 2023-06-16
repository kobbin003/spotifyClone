import React from "react";
import getArtistTopTracks from "../../../../hooks/spotify-data/getArtistTopTracks";
import { Link, useParams } from "react-router-dom";
import { msToMin } from "../../../../utils/msToMin";
import { Container, TrackItem } from "./style";

const PopularTracks = () => {
	const params = useParams();

	const artistTopTracks = getArtistTopTracks(params.id || "");
	console.log(artistTopTracks);
	return (
		<Container>
			<h2>Popular</h2>
			{artistTopTracks.data?.tracks.map((track, index) => (
				<TrackItem key={track.id}>
					<div>
						<span>{index + 1}</span>
						<button>
							<img src="/icons/playTrack.svg" />
						</button>
					</div>
					<div>
						<img src={track.album.images[0].url} />
						<div>
							<Link to="/n">
								<span>{track.name}</span>
							</Link>
						</div>
					</div>

					<div>
						<button>
							<img src="/icons/heart.svg" />
						</button>
						<span>{msToMin(track.duration_ms)}</span>
						<button>
							<img src="/icons/threedots.svg" />
						</button>
					</div>
				</TrackItem>
			))}
		</Container>
	);
};

export default PopularTracks;
