import React from "react";
import { Link } from "react-router-dom";
import { msToMin } from "../../../utils/msToMin";
import { Container } from "../style";
import { Header, TrackItem } from "./style";
import getUserSavedTracks from "../../../hooks/spotify-data/getUserSavedTracks";

const SavedTracksTracks = () => {
	const { data, error, isLoading } = getUserSavedTracks();
	return (
		<Container>
			<Header>
				<div>#</div>
				<div>Title</div>
				<div>Album</div>
				<div>Date Added</div>
				<div>
					<img
						src="/icons/clock.svg"
						alt=""
					/>
				</div>
			</Header>
			{data?.items.map(({ track, added_at }, index) => {
				const dateObject = new Date(added_at);
				const month = dateObject.toLocaleString("en-us", {
					month: "short",
				});
				const date = dateObject.getDate();
				const year = dateObject.getFullYear();
				return (
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
								<Link to="">
									<span>{track.name}</span>
								</Link>
								{track.artists.map((artist) => (
									<Link
										to={`/me/artist/${artist.id}`}
										key={artist.id}
									>
										<span key={artist.id}>{artist.name}</span>
									</Link>
								))}
							</div>
						</div>
						<div>
							<Link to={`/me/album/${track.album.id}`}>
								<span>{track.album.name}</span>
							</Link>
						</div>
						<div>
							{month.toLocaleString()}&nbsp;{date},&nbsp;{year}&nbsp;
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
				);
			})}
		</Container>
	);
};

export default SavedTracksTracks;
