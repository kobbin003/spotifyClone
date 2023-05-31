import React from "react";
import useFetchData from "../useFetchData";
import { getTopSearch } from "../../utils/getTopSearchItem";
export type SearchItem = {
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
type Types = "tracks" | "artists" | "albums" | "playlists";
export type SearchData = {
	[key in Types]: {
		href: string;
		items: SearchItem[];
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
	const accessToken = localStorage.getItem("accessToken") || "";
	const { data, error, isLoading } = useFetchData<SearchData, Error>(
		url,
		accessToken,
		"GET"
	);
	if (data !== (null || undefined)) {
		// const modifiedData = getTopSearch(data);
		console.log("getSearchItem", data, error, isLoading);
		localStorage.setItem("searchData", JSON.stringify(data));
	}
	// return <div>getSearchItem</div>;
};

export default getSearchItem;
