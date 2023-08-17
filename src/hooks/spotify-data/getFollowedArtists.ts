import useFetchData from "../useFetchData";
import useFetchDataDependent from "../useFetchDataDependent";

export type FollowedArtist = {
	artists: {
		href: string;
		limit: number;
		next: string;
		cursors: {
			after: string;
			before: string;
		};
		total: number;
		items: FollowedArtistItem[];
	};
};
export type FollowedArtistItem = {
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string;
		total: number;
	};
	genres: string[];
	href: string;
	id: string;
	images: [
		{
			url: string;
			height: number;
			width: number;
		}
	];
	name: string;
	popularity: number;
	type: "artist";
	uri: string;
};
export type FollowedArtistError = { status: number; message: string };

const getFollowedArtist = (
	refetchArtist: boolean
): {
	data: { items: FollowedArtistItem[] } | null;
	error: FollowedArtistError | null;
	isLoading: boolean;
} => {
	// console.log("getFollowedArtist");
	const url = `https://api.spotify.com/v1/me/following?type=artist&limit=10`;
	const { data, error, isLoading } = useFetchDataDependent<
		FollowedArtist,
		FollowedArtistError
	>(url, "GET", [refetchArtist]);
	// console.log("getFollowedArtist", { data, error, isLoading });
	return { data: data && { items: data.artists.items }, error, isLoading };
};
export default getFollowedArtist;
