import useFetchData from "../useFetchData";
import useFetchDataDependent from "../useFetchDataDependent";
import useFetchDataDependentRelease from "../useFetchDataDependentRelease";

// export type NewReleases = {
// 	album_type: string;
// 	artists: {
// 		external_urls: {
// 			spotify: string;
// 		};
// 		href: string;
// 		id: string;
// 		name: string;
// 		type: string;
// 		uri: string;
// 	}[];
// 	available_markets: string[];
// 	external_urls: {
// 		spotify: string;
// 	};
// 	href: string;
// 	id: string;
// 	images: {
// 		height: number;
// 		url: string;
// 		width: number;
// 	}[];
// 	name: string;
// 	release_date: string;
// 	release_date_precision: string;
// 	total_tracks: number;
// 	type: string;
// 	uri: string;
// }[];

export type NewReleasesError = {
	status: number;
	message: string;
};
const getNewReleases = (deps: any[]) => {
	// console.log("offset", deps[0], deps[1]);
	const url = `https://api.spotify.com/v1/browse/new-releases?limit=25&offset=${deps[0]}`;
	const { data, error, isLoading } = useFetchDataDependentRelease<
		NewReleases,
		NewReleasesError
	>(url, "GET", [...deps]);
	// console.log("getNewReleases", { data, error, isLoading });
	return { data, error, isLoading };
};

export default getNewReleases;
export interface NewReleases {
	albums: Albums;
}

export interface Albums {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: Item[];
}

export interface Item {
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
	artists: Artist[];
}

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

export interface Artist {
	external_urls: ExternalUrls2;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface ExternalUrls2 {
	spotify: string;
}
