import React from "react";
import {
	TrackBody,
	Container,
	Header,
	TrackItem,
	CountColumn,
	TitleColumn,
	AlbumColumn,
	TimeColumn,
} from "./TrackOut.style";
import { tracks } from "../data";
import { Link, useOutletContext } from "react-router-dom";
const TrackOut = () => {
	const [queryFromSearchBar, left, widthHandleDragger]: [
		string,
		number,
		number
	] = useOutletContext();
	return (
		<Container
			left={left}
			widthHandleDragger={widthHandleDragger}
		>
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
				{tracks.tracks.items.map((item, index) => (
					<TrackItem key={item.id}>
						<CountColumn>
							<span>{index + 1}</span>
							<button>
								<img src="/icons/playTrack.svg" />
							</button>
						</CountColumn>
						<TitleColumn>
							<img src={item.album.images[0].url} />
							<div>
								<Link to="/n">
									<span>{item.name}</span>
								</Link>
								<Link to="">
									<span>{item.artists[0].name}</span>
								</Link>
							</div>
						</TitleColumn>
						<AlbumColumn>
							<Link to="">
								<span>{item.album.name}</span>
							</Link>
						</AlbumColumn>
						<TimeColumn>
							<div>
								<img src="/icons/heart.svg" />
							</div>
							<span>{msToMin(item.duration_ms)}</span>
							<img src="/icons/threedots.svg" />
						</TimeColumn>
					</TrackItem>
				))}
			</TrackBody>
		</Container>
	);
};
function msToMin(ms: number) {
	const min = ms / (1000 * 60);
	const minSplit = JSON.stringify(min).split(".");
	const minDecimalTwo = minSplit[1].slice(0, 2);
	const inMinutes = minSplit[0] + "." + minDecimalTwo;
	return inMinutes;
}
export default TrackOut;
