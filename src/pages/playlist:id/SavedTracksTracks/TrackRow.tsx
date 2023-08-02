import React, { useEffect, useState } from "react";
import { TrackItem } from "./style";
import { Link } from "react-router-dom";
import { msToMin } from "../../../utils/msToMin";
import { UserSavedTracks } from "../../../hooks/spotify-data/getUserSavedTracks";
import putData from "../../../hooks/spotify-data/putData/putData";
type TrackRowType = {
	data: UserSavedTracks;
	setTotal: React.Dispatch<React.SetStateAction<number | undefined>>;
};
const TrackRow = ({ data, setTotal }: TrackRowType) => {
	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
	// rerender to check "green" or "transparent"
	const [rerender, setRerender] = useState<boolean>();
	// const { data, error, isLoading } = getUserSavedTracks(rerender);
	const [trackItems, setTrackItems] = useState(data.items);
	const handleTrackUnLike = (trackId: string) => {
		//* delete from the list in database
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
		setTotal(trackItems.length);
		//* delete from the list in trackItems array
		setTrackItems((prev) => prev.filter((item) => item.track.id !== trackId));
	};

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			// console.log("YES-accesstoken-fetchdata");
			setAccessToken(localStorage.getItem("accessToken") || "");
		} else {
			console.log("NO-accesstoken-fetchdata");
		}
	}, []);

	return (
		<>
			{trackItems.map(({ track, added_at }, index) => {
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
								<img
									src="/public/icons/heartGreen.svg"
									onClick={() => handleTrackUnLike(track.id)}
								/>
							</button>
							<span>{msToMin(track.duration_ms)}</span>
							<button>
								<img src="/icons/threedots.svg" />
							</button>
						</div>
					</TrackItem>
				);
			})}
		</>
	);
};

export default TrackRow;
