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
export const useGetAccessToken = (code: string) => {
	// const [codeState, setCodeState] = useState<string>(code);
	// DONE THIS(codeState) because i want to useFetch,
	// WHEN code(argument) changes
	// WHICH changes on storage event in LoggedInLayout.tsx
	// BECAUSE it cannot use hook inside useEffect in LoggedInLayout.tsx
	// console.log("useGetAccesstoken", codeState);

	// FORFEIT useFetchToken if "accesstoken" already stored
	// OR ELSE it will print invalid authorization code
	// SINCE one code can generate only one access_token.
	if (localStorage.getItem("accessToken")) {
		console.log("access token found!");
		// return data as if accesstoken was fetched or else it wont display <MainContent>
		return {
			data: { access_token: localStorage.getItem("accessToken") },
			error: null,
			isLoading: false,
		};
	}
	const redirect_uri = "http://localhost:5173/callback";
	const queryParams = new URLSearchParams({
		code,
		redirect_uri,
		grant_type: "authorization_code",
	});
	const { data, error, isLoading } = useFetchToken<TokenData, ErrorData>(
		queryParams
	);
	// set LocalStorage item:
	// 		//! TYPE ASSERTIONS
	useEffect(() => {
		if (data && (data as TokenData)?.access_token) {
			console.log("DATA", data, error);
			localStorage.setItem("accessToken", (data as TokenData).access_token);
			localStorage.setItem("refreshToken", (data as TokenData).refresh_token);
		}
	}, [data?.access_token]);
	// useEffect(() => {
	// 	setCodeState(code);
	// }, [code]);
	return { data, error, isLoading };
};
