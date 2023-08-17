import React from "react";
import useFetchData from "../useFetchData";
import { getTopSearch } from "../../utils/getTopSearchItem";
import useFetchDataDependent from "../useFetchDataDependent";
import useSearchDataDependent from "../useSearchDataDependent";
export interface ExternalUrls {
	spotify: string;
}
export interface Image {
	url: string;
	height: number;
	width: number;
}
export interface Restrictions {
	reason: string;
}
export interface Copyright {
	text: string;
	type: string;
}

export interface ExternalIds {
	isrc: string;
	ean: string;
	upc: string;
}
export interface Followers {
	href: string;
	total: number;
}
export type SearchItemArtist = {
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

export type SearchItemTrack = {
	album: {
		album_type: string;
		total_tracks: number;
		available_markets: string[];
		external_urls: ExternalUrls;
		href: string;
		id: string;
		images: Image[];
		name: string;
		release_date: string;
		release_date_precision: string;
		restrictions: Restrictions;
		type: string;
		uri: string;
		copyrights: Copyright[];
		external_ids: ExternalIds;
		genres: string[];
		label: string;
		popularity: number;
		album_group: string;
		artists: {
			external_urls: ExternalUrls;
			href: string;
			id: string;
			name: string;
			type: string;
			uri: string;
		}[];
	};
	artists: {
		external_urls: ExternalUrls;
		followers: Followers;
		genres: string[];
		href: string;
		id: string;
		images: Image[];
		name: string;
		popularity: number;
		type: string;
		uri: string;
	}[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: ExternalIds;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	is_playable: boolean;
	linked_from: {};
	restrictions: Restrictions;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
	is_local: boolean;
};

export type SearchItemAlbum = {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: Restrictions;
	type: string;
	uri: string;
	copyrights: Copyright[];
	external_ids: ExternalIds;
	genres: string[];
	label: string;
	popularity: number;
	album_group: string;
	artists: {
		external_urls: ExternalUrls;
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[];
};
export type SearchItemPlaylist = {
	collaborative: boolean;
	description: string;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	owner: {
		external_urls: ExternalUrls;
		followers: Followers;
		href: string;
		id: string;
		type: string;
		uri: string;
		display_name: string;
	};
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		total: number;
	};
	type: string;
	uri: string;
};

export type SearchDataArtist = {
	artists: {
		href: string;
		items: SearchItemArtist[];
		limit: number;
		offset: number;
		total: number;
	};
};
export type SearchDataTrack = {
	tracks: {
		href: string;
		items: SearchItemTrack[];
		limit: number;
		offset: number;
		total: number;
	};
};
export type SearchDataAlbum = {
	albums: {
		href: string;
		items: SearchItemAlbum[];
		limit: number;
		offset: number;
		total: number;
	};
};
export type SearchDataPlaylist = {
	playlists: {
		href: string;
		items: SearchItemPlaylist[];
		limit: number;
		offset: number;
		total: number;
	};
};
type SearchTypes = "track" | "artist" | "album" | "playlist";

type Error = {
	error: {
		status: number;
		message: string;
	};
};

const getSearchItem = <T>(query: string, type: SearchTypes) => {
	const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}&limit=10&offset=0`;
	const { data, error, isLoading } = useSearchDataDependent<T, Error>(
		url,
		"GET",
		[query]
	);

	// console.log("getSearchItem", data, error, isLoading);
	return { data, error, isLoading };
};

export default getSearchItem;
