import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, TrackItem } from "./style";
import { msToMin } from "../../../utils/msToMin";
import getUserTopTracks from "../../../hooks/spotify-data/getUserTopItems";

const UserTopTracks = () => {
	const { data, error, isLoading } = getUserTopTracks();
	return (
		<Container>
			<h2>Top Tracks</h2>
			{data &&
				data?.items.map((track, index) => (
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

export default UserTopTracks;
