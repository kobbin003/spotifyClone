import useFetchData from "../useFetchData";
export type UserAlbumItem = {
	album_type: string;
	total_tracks: number;
	id: string;
	images: { url: string; height: number; width: number }[];
	name: string;
	release_date: string;
	genres: string[] | [];
	popularity: number;
	artists: { id: number; name: string; [key: string]: any }[];
	tracks: {
		total: number;
		items: {
			artists: {
				id: string;
				name: string;
			}[];
			duration_ms: number;
			id: string;
			name: string;
			track_number: number;
		}[];
	};
};
export type UserAlbums = {
	items: {
		added_at: string;
		album: UserAlbumItem;
	}[];
};
export type UserAlbumsError = {
	status: number;
	message: string;
};
const getUserAlbums = (): {
	data: UserAlbums | null;
	error: UserAlbumsError | null;
	isLoading: boolean;
} => {
	// console.log("accesstoken", accessToken);
	const url = `https://api.spotify.com/v1/me/albums`;
	const { data, error, isLoading } = useFetchData<UserAlbums, UserAlbumsError>(
		url,
		// accessToken,
		"GET"
	);
	// console.log("getUserAlbums", { data, error, isLoading });
	return { data, error, isLoading };
};

export default getUserAlbums;
