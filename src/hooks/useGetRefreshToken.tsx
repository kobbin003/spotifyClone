import React from "react";
import { useFetchToken } from "./useFetchToken";

const useGetRefreshToken = async (refreshToken: string) => {
	// const refreshToken: string | null = localStorage.getItem("refreshToken");
	let queryParams = new URLSearchParams();
	if (!refreshToken) {
		// queryParams = ;
		queryParams.set("grant_type", "refresh_token");
		refreshToken && queryParams.set("refresh_token", refreshToken);
	}
	const data = await useFetchToken(queryParams);
	console.log("refreshtoken", data);
	// const data = await fetchToken("POST", queryParams);
	// console.log("refreshtoken", data);
	// res.send(data);
};

export default useGetRefreshToken;
