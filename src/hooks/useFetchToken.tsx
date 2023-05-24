import { useEffect, useState } from "react";
type FetchState<T, U> = {
	data: T | null | AccessTokenLocalStorage;
	error: U | null;
	isLoading: boolean;
};
type AccessTokenLocalStorage = { access_token: string | null };
export const useFetchToken = <T, U extends {}>(
	queryParams: URLSearchParams
): FetchState<T, U> => {
	// console.log("useFetchToken");
	const [data, setData] = useState<T | AccessTokenLocalStorage | null>();
	const [error, setError] = useState<U | null>();
	const [isLoading, setIsLoading] = useState(true);

	const client_id = import.meta.env.VITE_CLIENT_ID;
	const client_secret = import.meta.env.VITE_CLIENT_SECRET;
	const payload = client_id + ":" + client_secret;
	const encodedPayload = window.btoa(payload);
	const url = `https://accounts.spotify.com/api/token?${queryParams}`;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${encodedPayload}`,
		},
		json: true,
	};
	useEffect(() => {
		setIsLoading(true);
		// FORFEIT useFetchToken if "accesstoken" already stored
		// OR ELSE it will print invalid authorization code
		// SINCE one code can generate only one access_token.
		if (localStorage.getItem("accessToken")) {
			console.log("access token found!");
			// return data as if accesstoken was fetched or else it wont display <MainContent>
			setData({ access_token: localStorage.getItem("accessToken") });
			setError(null);
			setIsLoading(false);
			console.log("token present");
			return;
		}
		////////////////
		console.log("token not present");
		fetch(url, options)
			.then((res) => {
				// if (res.ok) { //! putting this will not let you get error
				return res.json();
				// }
			})
			.then((data) => {
				if (data.error) {
					setError(data.error);
					setIsLoading(false);
				} else {
					setData(data);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setError(err);
				setIsLoading(false);
			});
	}, [url]);

	return {
		data: data !== undefined ? data : null,
		error: error !== undefined ? error : null,
		isLoading,
	};
};
