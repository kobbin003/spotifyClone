import { useEffect, useState } from "react";
import AlbumCards from "../../components/cards/AlbumCards/AlbumCards";
import getUserAlbums, {
	UserAlbums,
} from "../../hooks/spotify-data/getUserAlbums";
import {
	CardsContainer,
	Container,
	ImageContainer,
	ResultCard,
} from "./Home.style";
import getNewReleases, {
	Albums,
} from "../../hooks/spotify-data/getNewReleases";
import { Link, useOutletContext } from "react-router-dom";
import getArtist from "../../hooks/spotify-data/getArtist";

const Home = () => {
	// console.log("HOME", localStorage.getItem("accessToken"));
	const accessToken = localStorage.getItem("accessToken");
	const [offset, setOffset] = useState<number>(0);
	const [releaseData, setReleaseData] = useState<Albums["items"]>([]);
	const { data, error, isLoading } = getNewReleases([offset, accessToken]);
	// console.log(data, releaseData);
	useEffect(() => {
		if (data) {
			setReleaseData((prev) => [...prev, ...data?.albums.items]);
		}
	}, [data]);
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<Container>
			<h1
				style={{
					paddingBottom: "0.5em",
					paddingTop: "0.5em",
					whiteSpace: "nowrap",
				}}
			>
				Recent Releases
			</h1>
			<CardsContainer>
				{releaseData
					? releaseData.map((item) => (
							<ResultCard key={item.id}>
								<Link to={`/me/album/${item.id}`}>
									<ImageContainer>
										{item.images.length > 0 ? (
											<img src={item.images[0].url}></img>
										) : (
											<img src="/public/icons/defaultCover.svg"></img>
										)}
										<img src="/icons/spotify_play.svg"></img>
									</ImageContainer>
									<p>
										<b>{item.name}</b>
									</p>
									<p>{item.type[0].toUpperCase() + item.type.slice(1)}</p>
								</Link>
							</ResultCard>
					  ))
					: data?.albums.items.map((item) => (
							<ResultCard key={item.id}>
								<Link to={`/me/album/${item.id}`}>
									<ImageContainer>
										{item.images.length > 0 ? (
											<img src={item.images[0].url}></img>
										) : (
											<img src="/public/icons/defaultCover.svg"></img>
										)}
										<img src="/icons/spotify_play.svg"></img>
									</ImageContainer>
									<p>
										<b>{item.name}</b>
									</p>
									<p>{item.type[0].toUpperCase() + item.type.slice(1)}</p>
								</Link>
							</ResultCard>
					  ))}
			</CardsContainer>
			<button
				onClick={() => setOffset((prev) => (prev += 25))}
				style={{ marginBottom: "2em" }}
			>
				show more
			</button>
		</Container>
	);
};

export default Home;
