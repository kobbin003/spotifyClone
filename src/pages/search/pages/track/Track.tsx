import React from "react";
import { TrackBody, Container, Header, TrackItem, Row, Message } from "./style";
// import { tracks } from "../data";
import { Link, useOutletContext } from "react-router-dom";
import { msToMin } from "../../../../utils/msToMin";
import getSearchItem, {
	SearchDataTrack,
} from "../../../../hooks/spotify-data/getSearchItem";
const Track = () => {
	const [queryFromSearchBar, left, widthHandleDragger]: [
		string,
		number,
		number
	] = useOutletContext();
	const { data, error, isLoading } = getSearchItem<SearchDataTrack>(
		queryFromSearchBar,
		"track"
	);

	return (
		<Container>
			{queryFromSearchBar.length == 0 ? (
				<Message>Please search for tracks in the searchbox&#9757;</Message>
			) : isLoading ? (
				<Message>loading...</Message>
			) : data ? (
				<>
					<Header
						left={left}
						widthHandleDragger={widthHandleDragger}
					>
						<div>#</div>
						<div>Title</div>
						<div>Album</div>
						<div>
							<img src="/icons/clock.svg" />
						</div>
					</Header>
					<TrackBody>
						{data.tracks.items.map((item, index) => (
							<TrackItem key={item.id}>
								<div>
									<span>{index + 1}</span>
									<button>
										<img src="/icons/playTrack.svg" />
									</button>
								</div>
								<div>
									<img src={item.album.images[0].url} />
									<div>
										<Link to={``}>
											<span>{item.name}</span>
										</Link>
										{item.artists.map((artist) => (
											<Link
												to={`/me/artist/${artist.name}`}
												key={artist.id}
											>
												<span>{artist.name}</span>
											</Link>
										))}
									</div>
								</div>
								<div>
									<Link to={`/me/album/${item.album.id}`}>
										<span>{item.album.name}</span>
									</Link>
								</div>
								<div>
									<div>
										<img src="/icons/heart.svg" />
									</div>
									<span>{msToMin(item.duration_ms)}</span>
									<img src="/icons/threedots.svg" />
								</div>
							</TrackItem>
						))}
					</TrackBody>
				</>
			) : (
				<div>No more results</div>
			)}
		</Container>
	);
};

export default Track;
