import React from "react";
import getArtistTopTracks from "../../../../hooks/spotify-data/getArtistTopTracks";
import { Link, useParams } from "react-router-dom";
import { msToMin } from "../../../../utils/msToMin";
import { TrackItem } from "./style";

const PopularTracks = () => {
	const params = useParams();

	const artistTopTracks = getArtistTopTracks(params.id || "");
	console.log(artistTopTracks);
	return (
		<div>
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
							<Link to="">
								<span>{track.artists[0].name}</span>
							</Link>
						</div>
					</div>
					{/* <div>
						<Link to="">
							<span>{track.album.name}</span>
						</Link>
					</div> */}
					<div>
						<img src="/icons/heart.svg" />
						<span>{msToMin(track.duration_ms)}</span>
						<img src="/icons/threedots.svg" />
					</div>
				</TrackItem>
			))}
		</div>
	);
};

export default PopularTracks;
