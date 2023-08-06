import React, { useEffect, useState } from "react";
import { TrackBody, Container, Header, TrackItem, Row, Message } from "./style";
// import { tracks } from "../data";
import { Link, useOutletContext } from "react-router-dom";
import { msToMin } from "../../../../utils/msToMin";
import getSearchItem, {
	SearchDataTrack,
} from "../../../../hooks/spotify-data/getSearchItem";
import putData from "../../../../hooks/spotify-data/putData/putData";
import checkUserHasTracks from "../../../../hooks/spotify-data/checkUserHasTracks/checkUserHasTracks";
const Track = () => {
	const [queryFromSearchBar, left, widthHandleDragger]: [
		string,
		number,
		number
	] = useOutletContext();
	const [rerender, setRerender] = useState<boolean>();

	const [userLikedTrackArray, setUserLikedTrackArray] = useState<string[]>([]);

	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
	const { data, error, isLoading } = getSearchItem<SearchDataTrack>(
		queryFromSearchBar,
		"track"
	);
	const handleTrackLike = (trackId: string) => {
		console.log("click popular track");
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
	useEffect(() => {
		const tracksIdArray: string[] = [];
		// console.log("userLikedTrackArray-data", data);
		data?.tracks.items.forEach((track) => {
			tracksIdArray.push(track.id);
			// console.log("items", track);
		});

		const tracksIdQueries = tracksIdArray.join(",");
		const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${tracksIdQueries}`;
		checkUserHasTracks(url, "GET", accessToken, setAccessToken, (data) => {
			setUserLikedTrackArray(data);
		});
		console.log("userLikedTrackArray", userLikedTrackArray);
	}, [rerender, data?.tracks.items]);
	// console.log(artistTopTracks);
	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			// console.log("YES-accesstoken-fetchdata");
			setAccessToken(localStorage.getItem("accessToken") || "");
		} else {
			console.log("NO-accesstoken-fetchdata");
		}
	}, []);

	useEffect(() => {
		setRerender((prev) => !prev);
	}, [userLikedTrackArray]);

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
										{userLikedTrackArray && userLikedTrackArray[index] ? (
											<img
												src="/public/icons/heartGreen.svg"
												onClick={() => handleTrackUnLike(item.id)}
											/>
										) : (
											<img
												src="/icons/heart.svg"
												onClick={() => handleTrackLike(item.id)}
											/>
										)}
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
