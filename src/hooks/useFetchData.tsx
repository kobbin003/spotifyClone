import React, { useEffect, useState } from "react";
import useGetRefreshToken from "./useGetRefreshToken";

type FetchDataState<T, U> = {
	data: T | null;
	error: U | null;
	isLoading: boolean;
};

const useFetchData = <T, U extends {}>(
	url: string,
	// accessToken: string,
	method: string
): FetchDataState<T, U> => {
	const [data, setData] = useState<T | null>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<U | null>();
	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
	// const accessToken = localStorage.getItem("accessToken") || "";
	useEffect(() => {
		// setAccessToken(localStorage.getItem("accessToken") || "");
		if (localStorage.getItem("accessToken")) {
			console.log("YES-accesstoken-fetchdata");
			setAccessToken(localStorage.getItem("accessToken") || "");
		} else {
			console.log("NO-accesstoken-fetchdata");
		}
	}, [localStorage.getItem("accessToken")]);
	useEffect(() => {
		console.log("initial-localstorage");
	}, []);

	useEffect(() => {
		setIsLoading(true);
		const options = {
			method,
			headers: {
				"Content-Type": "Application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		};
		if (accessToken) {
			console.log("accesstoken-fetchdata");
			fetch(url, options)
				.then((response) => {
					// if (response.ok) {
					return response.json();
					// }
					// else {
					// 	throw new Error(
					// 		`Network response was not OK. Error:code${response.status} `
					// 	);
					// }
				})
				.then((data) => {
					//* setError IF data has error
					// console.log("fetchdata", data);
					if (data.error) {
						// console.log("data.error", data.error);
						setError(data.error);
						setIsLoading(false);
						// console.log("data.error.message", data.error.message);
						// return data.error.message;
						return data.error.message;
					} else {
						setData(data);
						setError(null);
						setIsLoading(false);
						// return "HI";
					}
				})
				.then((res) => {
					if (res === ("The access token expired" || "Invalid access token")) {
						console.log("useFetchData: access token expired");
						//! USE refresh token to get a new access_token
						const client_id = import.meta.env.VITE_CLIENT_ID;
						const client_secret = import.meta.env.VITE_CLIENT_SECRET;
						const payload = client_id + ":" + client_secret;
						const encodedPayload = window.btoa(payload);
						let queryParams = new URLSearchParams();
						const refreshToken = localStorage.getItem("refreshToken");
						queryParams.set("grant_type", "refresh_token");
						queryParams.set("refresh_token", refreshToken || "");
						const url = `https://accounts.spotify.com/api/token?${queryParams}`;
						const options = {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded",
								Authorization: `Basic ${encodedPayload}`,
							},
							json: true,
						};

						// const data = useFetchToken(queryParams);
						// console.log("refreshtoken", data);
						// console.log("expired");
						return fetch(url, options);
					}
				})
				.then((res) => res?.json())
				.then((res) => {
					console.log("res", res);
					if (res) {
						localStorage.setItem("accessToken", res?.access_token);
					} else {
						console.log("token not expired");
					}
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		}
	}, [url, accessToken]);
	return {
		data: data !== undefined ? data : null,
		error: error !== undefined ? error : null,
		isLoading,
	};
};

export default useFetchData;
