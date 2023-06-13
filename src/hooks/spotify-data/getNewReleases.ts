import useFetchData from "../useFetchData";

export type NewReleases = {
	album_type: string;
	artists: {
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		name: string;
		type: string;
		uri: string;
	}[];
	available_markets: string[];
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: {
		height: number;
		url: string;
		width: number;
	}[];
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}[];

export type NewReleasesError = {
	status: number;
	message: string;
};
const getNewReleases = (): {
	data: NewReleases | null;
	error: NewReleasesError | null;
	isLoading: boolean;
} => {
	// console.log("accesstoken", accessToken);
	const url = `https://api.spotify.com/v1/browse/new-releases?limit=5&offset=0`;
	const { data, error, isLoading } = useFetchData<
		NewReleases,
		NewReleasesError
	>(url, "GET");
	console.log("getNewReleases", { data, error, isLoading });
	return { data, error, isLoading };
};

export default getNewReleases;
