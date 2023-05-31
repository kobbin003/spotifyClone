import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getSearchItem, {
	SearchData,
	SearchItem,
} from "../../hooks/spotify-data/getSearchItem";
import SearchType from "../../components/searchTypesList/SearchType";
import {
	Container,
	ResultCard,
	RowOne,
	Songs,
	TopResult,
} from "./Search.style";

const Search = () => {
	const query: string | "" = useOutletContext();
	const [type, setType] = useState<string>("");
	// getSearchItem(query, type);
	const searchData: SearchItem = JSON.parse(
		localStorage.getItem("searchData") || ""
	);
	return (
		<Container>
			{/* <SearchType selectType={setType}></SearchType> */}
			{/* <RowOne>
				<TopResult>
					<h2>
						<b>Top result</b>
					</h2>
					{searchData && (
						<ResultCard>
							<img src={searchData.images[2].url}></img>
							<p>
								<b>{searchData.name}</b>
							</p>
							<p>
								{searchData.type[0].toUpperCase() + searchData.type.slice(1)}
							</p>
							<img src="/icons/spotify_play.svg"></img>
						</ResultCard>
					)}
				</TopResult>
				<Songs></Songs>
			</RowOne> */}
			<h2>Recent Searches</h2>
		</Container>
	);
};

export default Search;
