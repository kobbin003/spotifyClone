import React from "react";
import useFetchData from "../useFetchData";

type Item = {
	external_urls: { spotify: string };
	followers: { href: null; total: number };
	genres: string[];
	href: string;
	id: string;
	images: { height: number; url: string; width: number }[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};

type SearchData = {
	[key: string]: {
		href: string;
		items: Item[];
		limit: number;
		offset: number;
		total: number;
	};
};
type Error = {
	error: {
		status: number;
		message: string;
	};
};
const getSearchItem = (query: string, type: string) => {
	const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}&limit=10&offset=0`;
	const { data, error, isLoading } = useFetchData<SearchData, Error>(
		url,
		"accessToken",
		"GET"
	);

	console.log("getSearchItem", data, error, isLoading);
	// return <div>getSearchItem</div>;
};

export default getSearchItem;
