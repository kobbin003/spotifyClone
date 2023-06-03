import React from "react";
import getSearchItem, {
	SearchData,
} from "../../../../hooks/spotify-data/getSearchItem";
import { useOutletContext } from "react-router-dom";
import {
	CardsContainer,
	ImageContainer,
	ResultCard,
	Title,
} from "./AlbumOut.style";
import { albums } from "../data";

const AlbumOut = () => {
	const query: string | "" = useOutletContext();
	// getSearchItem(query, "artist");
	console.log("query-Artist", query);

	const searchData = albums;
	return (
		<>
			<Title>Albums</Title>
			{searchData && (
				<CardsContainer>
					{searchData.albums.items.map((item) => (
						<ResultCard key={item.id}>
							<ImageContainer>
								<img src={item.images[1].url}></img>
								<img src="/icons/spotify_play.svg"></img>
							</ImageContainer>
							<p>
								<b>{item.name}</b>
							</p>
							<p>
								{item.release_date.split("-")[0]} <b>.</b> {item.type}
							</p>
						</ResultCard>
					))}
				</CardsContainer>
			)}
		</>
	);
};

export default AlbumOut;
