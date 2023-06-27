import useFetchData from "../useFetchData";
export type UserAlbumArtists = {
	id: string;
	images: { url: string; height: number; width: number }[];
	name: string;
	followers: {
		href: string;
		total: number;
	};
	// [key: string]: any;
}[];

export type UserAlbumTracks = {
	total: number;
	items: UserAlbumTracksItems;
};
export type UserAlbumTracksItems = {
	artists: {
		id: string;
		name: string;
	}[];
	duration_ms: number;
	id: string;
	name: string;
	track_number: number;
}[];
export type UserAlbumItem = {
	album_type: string;
	total_tracks: number;
	id: string;
	images: { url: string; height: number; width: number }[];
	name: string;
	release_date: string;
	genres: string[] | [];
	popularity: number;
	artists: UserAlbumArtists;
	tracks: UserAlbumTracks;
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
	console.log("getUserAlbum");
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
