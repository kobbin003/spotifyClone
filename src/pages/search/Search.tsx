import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import getSearchItem from "../../hooks/spotify-data/getSearchItem";
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
	const isLoggedIn = location.split("/").includes("me");
	// console.log("query-Search", queryFromSearchBar);
	const [type, setType] = useState<string>("");
	// getSearchItem(query, type);

	return (
		<Container isLoggedIn={isLoggedIn}>
			<Outlet context={[queryFromSearchBar, left, widthHandleDragger]} />
			{/* SEARCH */}
		</Container>
	);
};

export default Search;
