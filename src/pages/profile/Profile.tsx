import getUserProfile from "../../hooks/spotify-data/getUserProfile";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import UserPlaylists from "./UserPlaylists/UserPlaylists";
import UserTopTracks from "./UserTopTracks/UserTopTracks";

const Profile = () => {
	const { data, error, isLoading } = getUserProfile();
	console.log({ data, error, isLoading });
	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			{data && <ProfileHeader data={data} />}
			<UserTopTracks />
			<UserPlaylists />
		</>
	);
};

export default Profile;
