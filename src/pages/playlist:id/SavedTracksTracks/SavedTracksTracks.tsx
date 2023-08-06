import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { msToMin } from "../../../utils/msToMin";
import { Container } from "../style";
import { Header, TrackItem } from "./style";
import getUserSavedTracks, {
	UserSavedTracks,
} from "../../../hooks/spotify-data/getUserSavedTracks";
import putData from "../../../hooks/spotify-data/putData/putData";
import checkUserHasTracks from "../../../hooks/spotify-data/checkUserHasTracks/checkUserHasTracks";
import TrackRow from "./TrackRow";

const SavedTracksTracks = () => {
	const { data, error, isLoading } = getUserSavedTracks();

	// useEffect(()=>{},[])
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
			{isLoading ? <p>Loading...</p> : data && <TrackRow data={data} />}
		</Container>
	);
};

export default SavedTracksTracks;
