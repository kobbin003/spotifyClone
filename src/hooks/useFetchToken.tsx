import { useEffect, useState } from "react";
type FetchState<T, U, E> = {
	data: T | U | null;
	error: E | null;
	isLoading: boolean;
};
type AccessTokenLocalStorage = { access_token: string | null };
export const useFetchToken = <T, U, E extends {}>(
	queryParams: URLSearchParams
): FetchState<T, U, E> => {
	// console.log("useFetchToken");
	const [data, setData] = useState<T | U | null | undefined>();
	const [error, setError] = useState<E | null>();
	const [isLoading, setIsLoading] = useState(true);
	const [code, setCode] = useState<string>(localStorage.getItem("code") || "");

	const client_id = import.meta.env.VITE_CLIENT_ID;
	const client_secret = import.meta.env.VITE_CLIENT_SECRET;
	const payload = client_id + ":" + client_secret;
	const encodedPayload = window.btoa(payload);
	// set "code" in queryParams
	queryParams.append("code", code);
	const url = `https://accounts.spotify.com/api/token?${queryParams}`;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${encodedPayload}`,
		},
		json: true,
	};
	// console.log("initial code", code, localStorage.getItem("code"));
	useEffect(() => {
		if (localStorage.getItem("code")) {
			// console.log("code change", code, localStorage.getItem("code"));
			setCode(localStorage.getItem("code") || "");
		}
	}, []);
	useEffect(() => {
		setIsLoading(true);
		// FORFEIT useFetchToken if "accesstoken" already stored
		// OR ELSE it will print invalid authorization code
		// SINCE one code can generate only one access_token.
		if (localStorage.getItem("accessToken")) {
			// console.log("access token found!");
			// return data as if accesstoken was fetched or else it wont display <MainContent>
			setData({
				access_token: localStorage.getItem("accessToken"),
			} as U);
			//* The reason you don't need a type assertion when calling setData(data) is because TypeScript can infer the type of data based on the initial state value provided(i.e null) to the useState hook. In that case, the type inference works correctly.
			//* However, when you try to set a different value for data with { access_token: localStorage.getItem("accessToken") }, TypeScript is not able to infer the exact type of the new value, and it raises an error. To overcome this, you can use a type assertion to explicitly tell TypeScript that the new value matches the expected type.

			setError(null);
			setIsLoading(false);
			// console.log("token present");
			return;
		}
		////////////////
		// console.log("token not present");
		//* fethc only if code present
		if (code) {
			// console.log("code present");
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
		}
	}, [url]);
	useEffect(() => {}, [code]);

	return {
		data: data !== undefined ? data : null,
		error: error !== undefined ? error : null,
		isLoading,
	};
};
