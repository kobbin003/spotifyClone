import React, { MouseEvent, useEffect, useRef, useState } from "react";
import getArtistTopTracks from "../../../../hooks/spotify-data/getArtistTopTracks";
import { Link, useParams } from "react-router-dom";
import { msToMin } from "../../../../utils/msToMin";
import { Container, TrackItem } from "./style";
import putData from "../../../../hooks/spotify-data/putData/putData";
import checkUserHasTracks from "../../../../hooks/spotify-data/checkUserHasTracks/checkUserHasTracks";
import MenuHorizontal from "../../../menuHorizontal/MenuHorizontal";
import useOutsideClickPropagate from "../../../../hooks/useClickOutsidePropagate";

const PopularTracks = () => {
	const params = useParams();
	// rerender to check "green" or "transparent"
	const [rerender, setRerender] = useState<boolean>();

	const [userLikedTrackArray, setUserLikedTrackArray] = useState<boolean[]>([]);

	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);

	const [selectedListId, setSelectedListId] = useState<string>("");

	const artistTopTracks = getArtistTopTracks(params.id || "");

	const optionButtonImageRef = useRef<HTMLImageElement>(null);

	const handleTrackLike = (trackId: string) => {
		const url = `https://api.spotify.com/v1/me/tracks`;
		const body = {
			ids: [trackId],
		};
		putData(url, "PUT", body, accessToken, setAccessToken, () => {
			//* refresh the copmonent
			setRerender((prev) => {
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
				return !prev;
			});
		});
		window.dispatchEvent(new Event("libraryModified"));
	};

	useOutsideClickPropagate(() => {
		setSelectedListId("");
	});

	const handleClickMenu = (
		e: MouseEvent<HTMLImageElement>,
		trackId: string
	) => {
		e.stopPropagation();
		console.log("hihi");
		setSelectedListId(trackId);
		if (selectedListId) {
			setSelectedListId("");
		}
	};

	useEffect(() => {
		const tracksIdArray: string[] = [];
		artistTopTracks.data?.tracks.forEach((track) => {
			tracksIdArray.push(track.id);
		});

		const tracksIdQueries = tracksIdArray.join(",");
		const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${tracksIdQueries}`;
		checkUserHasTracks(url, "GET", accessToken, setAccessToken, (data) => {
			data && setUserLikedTrackArray(data);
		});
	}, [rerender, artistTopTracks.data]);

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			setAccessToken(localStorage.getItem("accessToken") || "");
		} else {
			console.log("NO-accesstoken-fetchdata");
		}
	}, []);

	if (artistTopTracks.isLoading) return <p>Loading...</p>;
	return (
		<Container>
			<h2>Popular</h2>
			{artistTopTracks &&
				artistTopTracks.data?.tracks.map((track, index) => (
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
							</div>
						</div>
						<div>
							<div>
								<button>
									{userLikedTrackArray[index] ? (
										<img
											src="/public/icons/heartGreen.svg"
											style={{ visibility: "visible" }}
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
							{selectedListId == track.id && (
								<MenuHorizontal trackId={track.id} />
							)}
						</div>
					</TrackItem>
				))}
		</Container>
	);
};

export default PopularTracks;
