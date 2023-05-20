import getUser from "../../hooks/spotify-data/getUser";

const Profile = () => {
	console.log("HOME");
	// const accessToken = localStorage.getItem("accessToken");

	// const { data, error, isLoading } = getUser(accessToken ?? "");
	// console.log({ data, error, isLoading });
	// return (
	// 	<>
	// 		<h2>HOME</h2>
	// 		{isLoading ? (
	// 			<p>Loading....</p>
	// 		) : data ? (
	// 			<>
	// 				<p>
	// 					<span>ID: </span>
	// 					{data?.id}
	// 				</p>
	// 				<p>
	// 					<span>Name: </span>
	// 					{data?.display_name}
	// 				</p>
	// 				<p>
	// 					<span>Country: </span>
	// 					{data?.country}
	// 				</p>
	// 				<p>
	// 					<span>Email: </span>
	// 					{data?.email}
	// 				</p>
	// 				<p>
	// 					<span>Followers: </span>
	// 					{data?.followers.total}
	// 				</p>
	// 				<p>
	// 					<span>Spotify Link: </span>
	// 					{data?.external_urls.spotify}
	// 				</p>
	// 			</>
	// 		) : (
	// 			<p>{error?.message}</p>
	// 		)}
	// 	</>
	// );
	return <div>Home</div>;
};

export default Profile;
