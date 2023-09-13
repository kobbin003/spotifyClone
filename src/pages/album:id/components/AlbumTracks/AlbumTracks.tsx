import { MouseEvent, useEffect, useRef, useState } from "react";
import { Container, Header, TrackItem } from "./style";
import { msToMin } from "../../../../utils/msToMin";
import { Link } from "react-router-dom";
import putData from "../../../../hooks/spotify-data/putData/putData";
import checkUserHasTracks from "../../../../hooks/spotify-data/checkUserHasTracks/checkUserHasTracks";
import MenuHorizontal from "../../../menuHorizontal/MenuHorizontal";
import useOutsideClickContains from "../../../../hooks/useClickOutsideContains";
import useOutsideClickPropagate from "../../../../hooks/useClickOutsidePropagate";

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
	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);

	// rerender to check "green" or "transparent"
	const [rerender, setRerender] = useState<boolean>();

	const [userLikedTrackArray, setUserLikedTrackArray] = useState<boolean[]>([]);

	const [selectedListId, setSelectedListId] = useState<string>("");

	const optionContainerRef = useRef<HTMLDivElement>(null);

	const optionButtonImageRef = useRef<HTMLImageElement>(null);

	const handleTrackLike = (trackId: string) => {
		const url = `https://api.spotify.com/v1/me/tracks`;

		const body = {
			ids: [trackId],
		};
		putData(url, "PUT", body, accessToken, setAccessToken, () => {
			//* refresh the copmonent
			setRerender((prev) => {
				console.log("rerender like");
				return !prev;
			});
		});
		window.dispatchEvent(new Event("libraryModified"));
	};

	const handleTrackUnLike = (trackId: string) => {
		const url = `https://api.spotify.com/v1/me/tracks`;

		const body = {
			ids: [trackId],
		};
		putData(url, "DELETE", body, accessToken, setAccessToken, () => {
			//* refresh the component
			setRerender((prev) => {
				console.log("rerender delete");
				return !prev;
			});
		});
		window.dispatchEvent(new Event("libraryModified"));
	};

	const handleClickMenu = (
		e: MouseEvent<HTMLImageElement>,
		trackId: string
	) => {
		e.stopPropagation();
		setSelectedListId(trackId);
	};

	// useOutsideClickContains(optionButtonImageRef, () => {
	// 	console.log("albumtracks: success");
	// 	setSelectedListId(false);
	// });

	/** //*useOutsideClickContains does not work here */

	useOutsideClickPropagate(optionButtonImageRef, () => {
		console.log("albumtracks: success", selectedListId);
		setSelectedListId("");
	});

	useEffect(() => {
		const tracksIdArray: string[] = [];
		tracks.forEach((track) => tracksIdArray.push(track.id));

		const tracksIdQueries = tracksIdArray.join(",");
		const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${tracksIdQueries}`;
		checkUserHasTracks(url, "GET", accessToken, setAccessToken, (data) => {
			// console.log("album tracks data type", typeof data?.[0]);
			setUserLikedTrackArray(data as boolean[]);
		});
	}, [rerender]);

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			// console.log("YES-accesstoken-fetchdata");
			setAccessToken(localStorage.getItem("accessToken") || "");
		} else {
			console.log("NO-accesstoken-fetchdata");
		}
	}, []);

	return (
		<Container ref={optionContainerRef}>
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
				{tracks.map((track, index) => (
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
							<div>
								<button>
									{userLikedTrackArray[index] ? (
										<img
											src="/public/icons/heartGreen.svg"
											onClick={() => handleTrackUnLike(track.id)}
										/>
									) : (
										<img
											src="/icons/heart.svg"
											onClick={() => handleTrackLike(track.id)}
										/>
									)}
								</button>
							</div>
							<span>{msToMin(track.duration_ms)}</span>
							<button>
								<img
									id={track.id}
									src="/icons/threedots.svg"
									onClick={(e) => handleClickMenu(e, track.id)}
									ref={optionButtonImageRef}
								/>
							</button>
							{selectedListId == track.id && <MenuHorizontal />}
						</div>
					</TrackItem>
				))}
			</ul>
		</Container>
	);
};

export default AlbumTracks;
