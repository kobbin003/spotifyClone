import useFetchData from "../useFetchData";
export type ArtistTopTracks = {
	tracks: {
		album: {
			album_type: string;
			total_tracks: number;
			available_markets: string[];
			external_urls: {
				spotify: string;
			};
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
			album_group: string;
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
		};
		artists: {
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
			type: string;
			uri: string;
		}[];
		available_markets: string[];
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: {
			isrc: string;
			ean: string;
			upc: string;
		};
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		is_playable: boolean;
		linked_from: {};
		restrictions: {
			reason: string;
		};
		name: string;
		popularity: number;
		preview_url: string;
		track_number: number;
		type: string;
		uri: string;
		is_local: boolean;
	}[];
};
export type ArtistTopTracksError = {
	status: string;
	message: string;
};
type CallbackType = {
	data: ArtistTopTracks;
	error: ArtistTopTracksError;
	IsLoading: boolean;
};
const getArtistTopTracks = (
	id: string,
	callback?: ({ data, error, IsLoading }: CallbackType) => void
) => {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`;
	const { data, error, isLoading } = useFetchData<
		ArtistTopTracks,
		ArtistTopTracksError
	>(url, "GET");
	return { data, error, isLoading };
};
export const getArtistTopTracksPromise = (
	id: string,
	callback?: ({ data, error, IsLoading }: CallbackType) => void
) => {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`;
	const { data, error, isLoading } = useFetchData<
		ArtistTopTracks,
		ArtistTopTracksError
	>(url, "GET");
	return Promise.resolve({ data, error, isLoading });
};

export default getArtistTopTracks;
