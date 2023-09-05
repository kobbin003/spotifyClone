import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { msToMin } from "../../../utils/msToMin";
import { Container } from "../style";
import { Header, TrackItem } from "./style";
import getUserSavedTracks from "../../../hooks/spotify-data/getUserSavedTracks";
import { getPlaylist } from "../../../hooks/spotify-data/getPlaylist";
import putData from "../../../hooks/spotify-data/putData/putData";
import checkUserHasTracks from "../../../hooks/spotify-data/checkUserHasTracks/checkUserHasTracks";

const PlaylistsTracks = () => {
	const { id } = useParams();
	const { data, error, isLoading } = getPlaylist(id || "");
	const [rerender, setRerender] = useState<boolean>();

	const [userLikedTrackArray, setUserLikedTrackArray] = useState<boolean[]>([]);

	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
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
	useEffect(() => {
		const tracksIdArray: string[] = [];
		data?.tracks.items.forEach((track) => {
			tracksIdArray.push(track.track.id);
		});

		const tracksIdQueries = tracksIdArray.join(",");
		// console.log("tracksIdQueries", tracksIdQueries);
		const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${tracksIdQueries}`;
		checkUserHasTracks(url, "GET", accessToken, setAccessToken, (data, err) => {
			if (data) {
				setUserLikedTrackArray(data);
			} else if (err) {
				console.log("error", err);
			}
		});
	}, [rerender, data?.tracks.items]);

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			setAccessToken(localStorage.getItem("accessToken") || "");
		} else {
			console.log("NO-accesstoken-fetchdata");
		}
	}, []);
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
						alt="time"
					/>
				</div>
			</Header>
			{data?.tracks.items.map(({ track, added_at }, index) => {
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
								{userLikedTrackArray && userLikedTrackArray[index] ? (
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

export default PlaylistsTracks;
