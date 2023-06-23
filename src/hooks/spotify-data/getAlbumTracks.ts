import useFetchData from "../useFetchData";
export type AlbumTrackArtist = {
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
};
export type AlbumTrack = {
	artists: AlbumTrackArtist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_urls: {
		spotify: string;
	};
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
};

export type AlbumTracks = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: AlbumTrack[];
};

type Error = { status: number; message: string };

const getAlbumTracks = (id: string) => {
	const url = `https://api.spotify.com/v1/albums/${id}/tracks`;
	const { data, error, isLoading } = useFetchData<AlbumTracks, Error>(
		url,
		"GET"
	);
	return { data, error, isLoading };
};

export default getAlbumTracks;
