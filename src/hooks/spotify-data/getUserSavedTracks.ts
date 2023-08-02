import useFetchData from "../useFetchData";
import useFetchDataDependent from "../useFetchDataDependent";

export type UserSavedTracks = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: {
		added_at: string;
		track: Track;
	}[];
};
export type Track = {
	album: Album;
	artists: Artist2[];
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
export interface Album {
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
export interface Artist {
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}
export interface Artist2 {
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
export interface Followers {
	href: string;
	total: number;
}
export type UserSavedTracksError = {
	status: number;
	message: string;
};

const getUserSavedTracks = (
	rerender: boolean
): {
	data: UserSavedTracks | null;
	error: UserSavedTracksError | null;
	isLoading: boolean;
} => {
	// console.log("accesstoken", accessToken);
	// console.log("userSavedTracks - called");

	const url = `https://api.spotify.com/v1/me/tracks?limit=10&offset=0`;
	const { data, error, isLoading } = useFetchDataDependent<
		UserSavedTracks,
		UserSavedTracksError
	>(url, "GET", [rerender]);
	return { data, error, isLoading };
};

export default getUserSavedTracks;
