import { useFetchToken } from "./useFetchToken";

const useGetRefreshToken = async (refreshToken: string) => {
	let queryParams = new URLSearchParams();
	if (!refreshToken) {
		queryParams.set("grant_type", "refresh_token");
		refreshToken && queryParams.set("refresh_token", refreshToken);
	}
	const data = await useFetchToken(queryParams);
	console.log("refreshtoken", data);
};

export default useGetRefreshToken;
