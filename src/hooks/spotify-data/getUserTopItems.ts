import useFetchData from "../useFetchData";

export interface UserTopItemsType {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: Item[];
}

export interface Item {
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

export interface Followers {
	href: string;
	total: number;
}

export interface Image {
	url: string;
	height: number;
	width: number;
}

export type UserTopItemsError = { status: number; message: string };
const getUserTopItems = (type: "tracks" | "artists") => {
	const url = `https://api.spotify.com/v1/me/top/${type}`;
	const { data, error, isLoading } = useFetchData<
		UserTopItemsType,
		UserTopItemsError
	>(url, "GET");
	return { data, error, isLoading };
};

export default getUserTopItems;
