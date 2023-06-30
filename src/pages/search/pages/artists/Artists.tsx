import React from "react";
import getSearchItem, {
	SearchDataArtist,
} from "../../../../hooks/spotify-data/getSearchItem";
import { Link, useOutletContext } from "react-router-dom";
import { CardsContainer, ImageContainer, ResultCard, Title } from "./style";

const Artist = () => {
	const [queryFromSearchBar, ,]: any[] = useOutletContext();
	// const type = window.location.pathname.split("/").at(-1);

	// getSearchItem(queryFromSearchBar, type || "");

	const { data, error, isLoading } = getSearchItem<SearchDataArtist>(
		queryFromSearchBar,
		"artist"
	);
	// console.log("artist-search", data);
	return (
		<>
			<Title>Artists</Title>
			{!queryFromSearchBar ? (
				<p>Please search for artist in the searchbox&#9757;</p>
			) : data ? (
				<CardsContainer>
					{data.artists.items.map((item) => (
						<ResultCard key={item.id}>
							<Link to={`/me/artist/${item.id}`}>
								<ImageContainer>
									{/* <img src={item.images[0].url}></img> */}
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
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default Artist;
