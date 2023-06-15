import React from "react";
import { Container, Header, TrackItem } from "./style";
import { msToMin } from "../../../../utils/msToMin";

const AlbumTracks = ({
	tracks,
	artists,
}: {
	tracks: {
		name: string;
		id: string;
		duration_ms: number;
		track_number: number;
	}[];
	artists: { name: string }[];
}) => {
	return (
		<Container>
			<ul>
				<Header>
					<div>#</div>
					<div>Title</div>
					<div>
						<img
							src="/public/icons/clock.svg"
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
							<p>{track.name}</p>
							<p>
								{artists.map((artist) => (
									<span key={artist.name}>{artist.name}</span>
								))}
							</p>
						</div>
						<div>
							{/* <div> */}
							<button>
								<img src="/icons/heart.svg" />
							</button>
							{/* </div> */}
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
