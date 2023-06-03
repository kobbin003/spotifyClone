import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import getSearchItem, {
	SearchData,
	SearchItem,
} from "../../hooks/spotify-data/getSearchItem";
import SearchType from "../../components/searchTypesList/SearchTypesList";
import {
	Container,
	ResultCard,
	RowOne,
	Songs,
	TopResult,
} from "./Search.style";

const Search = () => {
	const [queryFromSearchBar, left, widthHandleDragger]: [
		string,
		number,
		number
	] = useOutletContext();
	const location = window.location.pathname;
	// console.log("query-Search", queryFromSearchBar);
	const [type, setType] = useState<string>("");
	// getSearchItem(query, type);
	const searchData: SearchItem = JSON.parse(
		localStorage.getItem("searchData") || ""
	);
	return (
		<Container>
			<Outlet context={[queryFromSearchBar, left, widthHandleDragger]} />
			{/* SEARCH */}
		</Container>
	);
};

export default Search;
