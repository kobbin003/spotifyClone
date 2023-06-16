import useFetchData from "../useFetchData";

type Artist = {
	external_urls: { spotify: string };
	followers: { href: string; total: number };
	genres: string[];
	href: string;
	id: string;
	images: { url: string; height: number; width: number }[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};
type ArtistError = { status: number; message: string };
const getArtist = (id: string) => {
	const url = `https://api.spotify.com/v1/artists/${id}`;
	const { data, error, isLoading } = useFetchData<Artist, ArtistError>(
		url,
		"GET"
	);
	return { data, error, isLoading };
};

export default getArtist;
