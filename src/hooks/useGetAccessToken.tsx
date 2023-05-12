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
	const [codeState, setCodeState] = useState<string>(code);
	// DONE THIS(codeState) because i want to useFetch,
	// WHEN code(argument) changes
	// WHICH changes on storage event in LoggedInLayout.tsx
	// BECAUSE it cannot use hook inside useEffect in LoggedInLayout.tsx
	console.log("useGetAccesstoken", codeState);

	// FORFEIT useFetchToken if "accesstoken" already stored
	// OR ELSE it will print invalid authorization code
	// SINCE one code can generate only one access_token.
	if (localStorage.getItem("accessToken")) {
		console.log("access token found!");
		return {};
	}
	const redirect_uri = "http://localhost:5173/callback";
	const queryParams = new URLSearchParams({
		code: codeState,
		redirect_uri,
		grant_type: "authorization_code",
	});
	const { data, error, isLoading } = useFetchToken<TokenData, ErrorData>(
		queryParams
	);
	// set LocalStorage item:
	// 		//! TYPE ASSERTIONS
	if (data && (data as TokenData)?.access_token) {
		console.log("DATA", data, error);
		localStorage.setItem("accessToken", (data as TokenData).access_token);
		localStorage.setItem("refreshToken", (data as TokenData).access_token);
	} else if ((data as ErrorData)?.error) {
		console.log("ERROR", data, error);
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
	}
	useEffect(() => {
		// console.log("getaccesstoken", code);
		setCodeState(code);
		// console.log("DATA", data, error);
	}, [code]);
	// console.log("DATA OUT COMPONENT", data, error);
	return { data, error, isLoading };
};
