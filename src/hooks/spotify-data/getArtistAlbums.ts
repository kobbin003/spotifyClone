import useFetchData from "../useFetchData";
export type ArtistAlbums = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: [
		{
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
			artists: [
				{
					external_urls: {
						spotify: string;
					};
					href: string;
					id: string;
					name: string;
					type: string;
					uri: string;
				}
			];
		}
	];
};
export type ArtistAlbumsError = {
	status: string;
	message: string;
};
const getArtistAlbums = (id: string) => {
	const url = `https://api.spotify.com/v1/artists/${id}/albums`;
	const { data, error, isLoading } = useFetchData<
		ArtistAlbums,
		ArtistAlbumsError
	>(url, "GET");
	return { data, error, isLoading };
};

export default getArtistAlbums;
