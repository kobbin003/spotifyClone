import useFetchData from "../useFetchData";
type ExternalUrls = {
	spotify: string;
};
export type Album = {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: {
		reason: string;
	};
	type: string;
	uri: string;
	copyrights: {
		text: string;
		type: string;
	}[];
	external_ids: {
		isrc: string;
		ean: string;
		upc: string;
	};
	genres: string[];
	label: string;
	popularity: number;
	artists: {
		external_urls: ExternalUrls;
		followers: {
			href: string;
			total: number;
		};
		genres: string[];
		href: string;
		id: string;
		images: {
			url: string;
			height: number;
			width: number;
		}[];
		name: string;
		popularity: number;
		type: string;
		uri: string;
	}[];
	tracks: {
		href: string;
		limit: number;
		next: string;
		offset: number;
		previous: string;
		total: number;
		items: {
			artists: {
				external_urls: ExternalUrls;
				href: string;
				id: string;
				name: string;
				type: string;
				uri: string;
			}[];
			available_markets: string[];
			disc_number: number;
			duration_ms: number;
			explicit: boolean;
			external_urls: ExternalUrls;
			href: string;
			id: string;
			is_playable: boolean;
			linked_from: {
				external_urls: {
					spotify: string;
				};
				href: string;
				id: string;
				type: string;
				uri: string;
			};
			restrictions: {
				reason: string;
			};
			name: string;
			preview_url: string;
			track_number: number;
			type: string;
			uri: string;
			is_local: boolean;
		}[];
	};
};
export type AlbumError = {};
const getAlbum = (
	id: string
): {
	data: Album | null;
	error: AlbumError | null;
	isLoading: boolean;
} => {
	// console.log("accesstoken", accessToken);
	const url = `https://api.spotify.com/v1/albums/${id}`;
	const { data, error, isLoading } = useFetchData<Album, AlbumError>(
		url,
		// accessToken,
		"GET"
	);
	console.log("getAlbum", { data, error, isLoading });
	return { data, error, isLoading };
};

export default getAlbum;
