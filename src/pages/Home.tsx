import getUser from "../hooks/spotify-data/getUser";
import { Container } from "./Home.style";

const Home = () => {
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
	return <Container>Home</Container>;
};
// type UserProfile = {
// 	country: string;
// 	display_name: string;
// 	email: string;
// 	followers: { href: number; total: number };
// 	id: string;
// 	images: [];
// 	product: string;
// 	external_urls: { spotify: string };
// };
//! TYPE GUARD
// function isUserProfile(obj: any): obj is UserProfile {
// 	return obj && typeof obj === "object" && "country" in obj;
// }
export default Home;
