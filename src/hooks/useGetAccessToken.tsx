import useGetRefreshToken from "./useGetRefreshToken";
import { useFetchToken } from "./useFetchToken";
import { useEffect, useState } from "react";

export type TokenData = {
	access_token: string;
	token_type: string;
	scope: string;
	expires_in: number;
	refresh_token: string;
};
export type ErrorData = {
	error: string;
	error_dscription: string;
};
type AccessTokenLocalStorage = { access_token: string };

export const useGetAccessToken = () => {
	//? try it in useFetchToken:
	//! USING this statement here
	//! WILL BREAK the hook law of
	//! USING A HOOK inside an if-else statement
	// if (localStorage.getItem("accessToken")) {
	// 	console.log("access token found!");
	// 	return {
	// 		data: { access_token: localStorage.getItem("accessToken") },
	// 		error: null,
	// 		isLoading: false,
	// 	};
	// }
	// console.log("useGetAccessToken.tsx");
	const redirect_uri = "http://localhost:5173/callback";
	const queryParams = new URLSearchParams({
		// code: code ?? "",
		redirect_uri,
		grant_type: "authorization_code",
	});
	let { data, error, isLoading } = useFetchToken<
		TokenData,
		AccessTokenLocalStorage,
		ErrorData
	>(queryParams);

	useEffect(() => {
		// set LocalStorage item:

		if (data && "refresh_token" in data) {
			// console.log("DATA", data, error);
			dispatchEvent(new Event("accessTokenSet"));
			localStorage.setItem("accessToken", (data as TokenData).access_token);
			localStorage.setItem("refreshToken", (data as TokenData).refresh_token);
		} else if (data && !("refresh_token" in data)) {
			// console.log("DATA has accesstoken", data, error);
			localStorage.setItem(
				"accessToken",
				(data as AccessTokenLocalStorage).access_token
			);
			// dispatchEvent(new Event("accessTokenSet"));
		}
	}, [data?.access_token]);

	return { data: data, error, isLoading };
};
