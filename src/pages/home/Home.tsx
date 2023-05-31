import { useEffect, useState } from "react";
import AlbumCards from "../../components/cards/AlbumCards/AlbumCards";
import getUserAlbums, {
	UserAlbums,
} from "../../hooks/spotify-data/getUserAlbums";
import { Albums, Container, SubHeaders } from "./Home.style";

const Home = () => {
	// const [accessToken, setAccessToken] = useState(
	// 	localStorage.getItem("accessToken")
	// );
	// const accessToken = localStorage.getItem("accessToken") || "";
	// const { data, error, isLoading } = getUserAlbums(accessToken);
	// console.log("HOME", data, error, isLoading);
	// const data ={}
	// localStorage.setItem("albumdata", JSON.stringify(data));
	const albumdata = localStorage.getItem("albumdata");
	const data: UserAlbums = JSON.parse(albumdata ?? "");
	console.log(data);
	return (
		<Container>
			<>
				<SubHeaders>
					<h2>Saved Albums</h2>
					<a href="">
						<b>show all</b>
					</a>
				</SubHeaders>
				<Albums>
					{data &&
						data.items.map((item) => (
							<AlbumCards
								key={item.album.id}
								src={item.album.images[1].url}
								height={item.album.images[1].height}
								width={item.album.images[1].width}
								albumName={item.album.name}
								releaseDate={item.album.release_date}
								type={item.album.album_type}
							></AlbumCards>
						))}
					{data &&
						data.items.map((item) => (
							<AlbumCards
								key={item.album.id}
								src={item.album.images[1].url}
								height={item.album.images[1].height}
								width={item.album.images[1].width}
								albumName={item.album.name}
								releaseDate={item.album.release_date}
								type={item.album.album_type}
							></AlbumCards>
						))}
				</Albums>
			</>
		</Container>
	);
};

export default Home;
