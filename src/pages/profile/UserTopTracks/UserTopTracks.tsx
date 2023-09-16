import React, { MouseEvent, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, TrackItem } from "./style";
import { msToMin } from "../../../utils/msToMin";
import getUserTopTracks from "../../../hooks/spotify-data/getUserTopItems";
import MenuHorizontal from "../../menuHorizontal/MenuHorizontal";
import useOutsideClickPropagate from "../../../hooks/useClickOutsidePropagate";

const UserTopTracks = () => {
	const { data, error, isLoading } = getUserTopTracks();

	const [selectedListId, setSelectedListId] = useState<string>("");

	const optionButtonImageRef = useRef<HTMLImageElement>(null);

	const handleClickMenu = (
		e: MouseEvent<HTMLImageElement>,
		trackId: string
	) => {
		e.stopPropagation();
		setSelectedListId(trackId);
		if (selectedListId) {
			setSelectedListId("");
		}
	};

	useOutsideClickPropagate(() => {
		setSelectedListId("");
	});

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
								<img
									id={track.id}
									src="/icons/threedots.svg"
									onClick={(e) => handleClickMenu(e, track.id)}
									ref={optionButtonImageRef}
								/>
							</button>
							{selectedListId == track.id && (
								<MenuHorizontal trackId={track.id} />
							)}
						</div>
					</TrackItem>
				))}
		</Container>
	);
};

export default UserTopTracks;
