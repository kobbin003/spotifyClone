import React from "react";
import { msToMin } from "../../../utils/msToMin";
import { BoldDot, Container } from "./style";
import { Owner, Tracks } from "../../../hooks/spotify-data/getPlaylist";
import getUserProfile, {
	UserProfileType,
} from "../../../hooks/spotify-data/getUserProfile";
import getFollowedArtists from "../../../hooks/spotify-data/getFollowedArtists";

const ProfileHeader = ({ data }: { data: UserProfileType }) => {
	const { data: followedArtists, error, isLoading } = getFollowedArtists();
	return (
		<Container>
			<div>
				<img src={data.images[1].url} />
			</div>
			<div>
				<p>profile</p>
				<div>
					<h1>{data.display_name}</h1>
				</div>
				<div>
					<span>{/* <img src={artists[0].images[0].url} />{" "} */}</span>
					<p>
						{data.followers.total}&nbsp;followers &nbsp;<BoldDot>.</BoldDot>
						&nbsp;
					</p>
					<p>{followedArtists && followedArtists.items.length} following</p>
				</div>
			</div>
		</Container>
	);
};

export default ProfileHeader;
