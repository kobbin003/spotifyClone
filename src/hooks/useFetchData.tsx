import React, { useEffect, useState } from "react";
import useGetRefreshToken from "./useGetRefreshToken";

type FetchDataState<T, U> = {
	data: T | null;
	error: U | null;
	isLoading: boolean;
};

const useFetchData = <T, U extends {}>(
	url: string,
	accessToken: string,
	method: string
): FetchDataState<T, U> => {
	const [data, setData] = useState<T | null>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<U | null>();

	useEffect(() => {
		setIsLoading(true);
		const options = {
			method,
			headers: {
				"Content-Type": "Application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		};
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				//* setError IF data has error
				// console.log("fetchdata", data);
				if (data.error) {
					// console.log("data.error", data.error);
					setError(data.error);
					setIsLoading(false);
					// console.log("data.error.message", data.error.message);
					return data.error.message;
				} else {
					setData(data);
					setError(null);
					setIsLoading(false);
					// console.log("data.no error error.message");
					return "null";
				}
			})
			.then((res) => {
				console.log("chain", res);
				if (res === "The access token expired" || "Invalid access token") {
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
				} else if (res === "null") {
					// console.log("reached 3");
					return;
				}
			})
			.then((res) => res?.json())
			.then((res) => {
				// console.log("res", res);
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
	}, [url, accessToken]);
	return {
		data: data !== undefined ? data : null,
		error: error !== undefined ? error : null,
		isLoading,
	};
};

export default useFetchData;
