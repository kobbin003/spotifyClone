import React from "react";
import getSearchItem, {
	SearchDataArtist,
} from "../../../../hooks/spotify-data/getSearchItem";
import { Link, useOutletContext } from "react-router-dom";
import {
	CardsContainer,
	ImageContainer,
	Message,
	ResultCard,
	Title,
} from "./style";

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
			{!queryFromSearchBar ? (
				<Message>Please search for albums in the searchbox&#9757;</Message>
			) : isLoading ? (
				<Message>Loading...</Message>
			) : (
				<>
					<Title>Albums</Title>
					<CardsContainer>
						{data &&
							data.artists.items.map((item) => (
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
				</>
			)}
		</>
		// <>
		// 	<Title>Artists</Title>
		// 	{!queryFromSearchBar ? (
		// 		<p>Please search for artist in the searchbox&#9757;</p>
		// 	) : data ? (

		// 	) : (
		// 		<p>Loading...</p>
		// 	)}
		// </>
	);
};

export default Artist;
