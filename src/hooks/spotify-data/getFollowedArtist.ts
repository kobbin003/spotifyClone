import useFetchData from "../useFetchData";

type FollowedArtist = {
	artists: {
		href: string;
		limit: number;
		next: string;
		cursors: {
			after: string;
			before: string;
		};
		total: number;
		items: [
			{
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
			}
		];
	};
};
type FollowedArtistError = { status: number; message: string };

export const getFollowedArtist = () => {
	// console.log("accesstoken", accessToken);
	const url = `https://api.spotify.com/v1/me/following?type=artist&limit=10`;
	const { data, error, isLoading } = useFetchData<
		FollowedArtist,
		FollowedArtistError
	>(url, "GET");
	// console.log("getFollowedArtist", { data, error, isLoading });
	return { data, error, isLoading };
};
