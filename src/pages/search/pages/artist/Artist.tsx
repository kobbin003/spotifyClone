import React from "react";
import getSearchItem, {
	SearchData,
} from "../../../../hooks/spotify-data/getSearchItem";
import { useOutletContext } from "react-router-dom";
import { CardsContainer, ImageContainer, ResultCard, Title } from "./style";

const Artist = () => {
	const query: string | "" = useOutletContext();
	const type = window.location.pathname.split("/").at(-1);

	// getSearchItem(query, "artist");
	// getSearchItem(query, type || "");

	const searchData: SearchData = JSON.parse(
		localStorage.getItem("searchData") || ""
	);
	return (
		<>
			<Title>Artist</Title>
			{searchData && (
				<CardsContainer>
					{searchData.artists.items.map((item) => (
						<ResultCard key={item.id}>
							<ImageContainer>
								<img src={item.images[2].url}></img>
								<img src="/icons/spotify_play.svg"></img>
							</ImageContainer>
							<p>
								<b>{item.name}</b>
							</p>
							<p>{item.type[0].toUpperCase() + item.type.slice(1)}</p>
						</ResultCard>
					))}
				</CardsContainer>
			)}
		</>
	);
};

export default Artist;
