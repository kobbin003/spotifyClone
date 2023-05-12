import React, { useEffect, useState } from "react";
import useGetRefreshToken from "./useGetRefreshToken";
// type AnyObject = {
// 	[key: string]: any;
// };
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
	const options = {
		method,
		headers: {
			"Content-Type": "Application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	};
	useEffect(() => {
		setIsLoading(true);
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				//* setError IF data has error
				if (data.error) {
					setError(data.error);
					setIsLoading(false);
				} else {
					setData(data);
					setIsLoading(false);
				}
				//* get refresh_token IF access_token expired
				if (/(?=access)(?=token)(?=expired)/i.test(data.error_description)) {
					const refreshToken = localStorage.getItem("refreshToken");
					if (refreshToken) {
						useGetRefreshToken(refreshToken);
					}
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
