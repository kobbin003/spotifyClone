import useFetchData from "../useFetchData";
import useFetchDataDependent from "../useFetchDataDependent";

export type UserPlaylist = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: UserPlaylistItem[];
};
export type UserPlaylistItem = {
	collaborative: boolean;
	description: string;
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: { height: number; width: number; url: string }[];
	name: string;
	owner: {
		external_urls: {
			spotify: string;
		};
		followers: {
			href: string;
			total: number;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
		display_name: string;
	};

	public: boolean;
	snapshot_id: string;
	tracks: { href: string; total: number };
	type: string;
	uri: string;
};
export type UserPlaylistError = {
	status: number;
	message: string;
};

const getUserPlaylist = (
	refetch: boolean
): {
	data: UserPlaylist | null;
	error: UserPlaylistError | null;
	isLoading: boolean;
} => {
	const url = `https://api.spotify.com/v1/me/playlists?limit=10&offset=0`;
	const { data, error, isLoading } = useFetchDataDependent<
		UserPlaylist,
		UserPlaylistError
	>(url, "GET", [refetch]);
	// console.log("getCurrentUserPlaylist", { data, error, isLoading });
	return { data, error, isLoading };
};

export default getUserPlaylist;
