import React from "react";
import { Container, Header, TrackItem } from "./style";
import { spawn } from "child_process";
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
			{/* <Header>
				<div>#</div>
				<div>title</div>
				<div>Clock</div>
			</Header> */}
			<ul>
				<TrackItem>
					<div>#</div>
					<div>title</div>
					<div>Clock</div>
				</TrackItem>
				{tracks.map((track) => (
					<TrackItem key={track.id}>
						<div>{track.track_number}</div>
						<div>
							<p>{track.name}</p>
							<p>
								{artists.map((artist) => (
									<span>{artist.name}</span>
								))}
							</p>
						</div>
						<div>{msToMin(track.duration_ms)}</div>
					</TrackItem>
				))}
			</ul>
		</Container>
	);
};

export default AlbumTracks;
