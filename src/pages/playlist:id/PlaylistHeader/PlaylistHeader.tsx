import React, { useEffect, useState } from "react";
import { msToMin } from "../../../utils/msToMin";
import { BoldDot, Container } from "./style";
import {
	Owner,
	Tracks,
	getPlaylist,
} from "../../../hooks/spotify-data/getPlaylist";

const PlaylistHeader = ({
	playlistId,
	images,
	type,
	name,
	tracks,
	owner,
	albumDuration,
}: {
	playlistId: string;
	images: { url: string; height: number; width: number }[];
	type: string;
	name: string;
	tracks: Tracks;
	owner: Owner;
	albumDuration: number;
}) => {
	const [rerender, setRerender] = useState(false);

	const { data, isLoading, error } = getPlaylist(playlistId, rerender);
	useEffect(() => {
		const handleEvent = () => {
			console.log("hello photochange");
			setRerender((prev) => !prev);
		};
		window.addEventListener("PlaylistPageModified", handleEvent);
		return () =>
			window.removeEventListener("PlaylistPageModified", handleEvent);
	}, []);

	return (
		<Container>
			<div>
				{data?.images && data?.images.length > 0 ? (
					<img
						src={data.images[0].url}
						height={200}
						width={200}
					/>
				) : images.length > 0 ? (
					<img
						src={images[0].url}
						height={200}
						width={200}
					/>
				) : (
					<img src="/public/icons/defaultCover.svg" />
				)}
			</div>
			<div>
				<p>{type[0].toUpperCase() + type.slice(1)}</p>
				<div>
					<h1>{data?.name ? data?.name : name}</h1>
				</div>
				<div>
					<span>{/* <img src={artists[0].images[0].url} />{" "} */}</span>
					<p>
						{owner.display_name}&nbsp;<BoldDot>.</BoldDot>&nbsp;
					</p>
					<p>{tracks.total} songs&nbsp;</p>
					{albumDuration ? (
						<p>
							<b>,</b>&nbsp;
							<span>{msToMin(albumDuration).split(".")[0]}&nbsp;hr&nbsp;</span>
							<span>{msToMin(albumDuration).split(".")[1]}&nbsp;min&nbsp;</span>
						</p>
					) : (
						<></>
					)}
				</div>
			</div>
		</Container>
	);
};
export default PlaylistHeader;
