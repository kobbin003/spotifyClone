import { useEffect, useState } from "react";
type FetchState<T, U> = {
	data: T | null;
	error: U | null;
	isLoading: boolean;
};
export const useFetchToken = <T, U extends {}>(
	queryParams: URLSearchParams
): FetchState<T, U> => {
	// console.log("useFetchToken");
	const [data, setData] = useState<T | null>();
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
