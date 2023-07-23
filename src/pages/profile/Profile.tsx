import getUserProfile from "../../hooks/spotify-data/getUserProfile";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import UserPlaylists from "./UserPlaylists/UserPlaylists";
import UserTopTracks from "./UserTopTracks/UserTopTracks";

const Profile = () => {
	const { data, error, isLoading } = getUserProfile();
	console.log({ data, error, isLoading });
	if (isLoading) return <p>Loading...</p>;

	// const {
	// 	data: topArtists,
	// 	error: topArtistsError,
	// 	isLoading: topArtistsLoading,
	// } = getUserTopItems("artists");
	return (
		<>
			<h2>PROFILE</h2>
			{data && <ProfileHeader data={data} />}
			<UserTopTracks />
			<UserPlaylists />
		</>
	);
	// return <div>Home</div>;
};

export default Profile;
// {isLoading ? (
// 	<p>Loading....</p>
// ) : data ? (
// 	<>
// 		<p>
// 			<span>ID: </span>
// 			{data?.id}
// 		</p>
// 		<p>
// 			<span>Name: </span>
// 			{data?.display_name}
// 		</p>
// 		<p>
// 			<span>Country: </span>
// 			{data?.country}
// 		</p>
// 		<p>
// 			<span>Email: </span>
// 			{data?.email}
// 		</p>
// 		<p>
// 			<span>Followers: </span>
// 			{data?.followers.total}
// 		</p>
// 		<p>
// 			<span>Spotify Link: </span>
// 			{data?.external_urls.spotify}
// 		</p>
// 	</>
// ) : (
// 	<p>{error?.message}</p>
// )}
