import React from "react";
import { Container, Header, TrackItem } from "./style";
import { msToMin } from "../../../../utils/msToMin";
import { Link } from "react-router-dom";

const AlbumTracks = <
	T extends {
		name: string;
		id: string;
		duration_ms: number;
		track_number: number;
		artists: any[];
	}[]
>({
	tracks,
}: {
	tracks: T;
}) => {
	return (
		<Container>
			<ul>
				<Header>
					<div>#</div>
					<div>Title</div>
					<div>
						<img
							src="/icons/clock.svg"
							alt=""
						/>
					</div>
				</Header>

				{tracks.map((track) => (
					<TrackItem key={track.id}>
						<div>
							<span>{track.track_number}</span>
							<button>
								<img src="/icons/playTrack.svg" />
							</button>
						</div>
						<div>
							<p>
								<Link to="">{track.name}</Link>
							</p>
							<p>
								{track.artists.map((artist) => (
									<Link
										to={`/me/artist/${artist.id}`}
										key={artist.name}
									>
										{artist.name}
									</Link>
								))}
							</p>
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
			</ul>
		</Container>
	);
};

export default AlbumTracks;
