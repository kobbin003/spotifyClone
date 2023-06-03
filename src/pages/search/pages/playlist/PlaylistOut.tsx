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
} from "./PlaylistOut.style";
import { playlists } from "../data";

const PlaylistOut = () => {
	const query: string | "" = useOutletContext();
	// getSearchItem(query, "artist");
	console.log("query-Artist", query);

	const searchData = playlists;
	return (
		<>
			<Title>Albums</Title>
			{searchData && (
				<CardsContainer>
					{searchData.playlists.items.map((item) => (
						<ResultCard key={item.id}>
							<ImageContainer>
								<img src={item.images[0].url}></img>
								<img src="/icons/spotify_play.svg"></img>
							</ImageContainer>
							<p>
								<b>{item.name}</b>
							</p>
							<p>By {item.owner.display_name}</p>
						</ResultCard>
					))}
				</CardsContainer>
			)}
		</>
	);
};

export default PlaylistOut;
