import { memo, useEffect, useState } from "react";
import { useFetchToken } from "./useFetchToken";
export type TokenData = {
	access_token: string;
	token_type: string;
	scope: string;
	expires_in: number;
};
export type ErrorData = {
	error: string;
	error_dscription: string;
};
// const useGetRefreshToken = (accessTokenExpired: boolean) => {
// 	const client_id = import.meta.env.VITE_CLIENT_ID;
// 	const client_secret = import.meta.env.VITE_CLIENT_SECRET;
// 	const payload = client_id + ":" + client_secret;
// 	const encodedPayload = window.btoa(payload);
// 	const refreshToken = localStorage.getItem("refreshToken");
// 	let queryParams = new URLSearchParams();
// 	// console.log("params", queryParams);
// 	queryParams.set("grant_type", "refresh_token");
// 	queryParams.set("refresh_token", refreshToken as string);
// 	const url = `https://accounts.spotify.com/api/token?${queryParams}`;
// 	const options = {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 			Authorization: `Basic ${encodedPayload}`,
// 		},
// 		json: true,
// 	};
// 	useEffect(() => {
// 		// setIsLoading(true);
// 		fetch(url, options)
// 			.then((res) => {
// 				// if (res.ok) { //! putting this will not let you get error
// 				return res.json();
// 				// }
// 			})
// 			.then((data) => {
// 				if (data.error) {
// 					// setError(data.error);
// 					// setIsLoading(false);
// 					console.log("getrefresherror", data);
// 				} else {
// 					// setData(data);
// 					// setIsLoading(false);
// 					console.log("getrefreshdata", data);
// 					localStorage.setItem("accessToken", data.access_token);
// 				}
// 			})
// 			.catch((err) => {
// 				// setError(err);
// 				// setIsLoading(false);
// 			});
// 		console.log("accesstokenexpired", accessTokenExpired);
// 	}, [url, accessTokenExpired]);
// };
const useGetRefreshToken = (accessTokenExpired: boolean) => {
	// if (!accessTokenExpired) {
	// 	return;
	// }
	const refreshToken = localStorage.getItem("refreshToken");
	let queryParams = new URLSearchParams();
	queryParams.set("grant_type", "refresh_token");
	queryParams.set("refresh_token", refreshToken || "");
	const data = useFetchToken(queryParams);
	console.log("refreshtoken", data);
};

export default useGetRefreshToken;
