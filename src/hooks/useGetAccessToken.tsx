import React, { useEffect, useState } from "react";

interface AnyObject {
	[key: string]: any;
}

const useGetAccessToken = (): [
	data: AnyObject,
	error: AnyObject,
	isLoading: boolean
] => {
	const [data, setData] = useState({});
	const [error, setError] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const clientId = import.meta.env.VITE_CLIENT_ID;
	const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
	const grantType = "client_credentials";
	const queryParams = new URLSearchParams({
		grant_type: "client_credentials",
		client_id: clientId,
		client_secret: clientSecret,
	});
	const url = `https://accounts.spotify.com/api/token?${queryParams}`;
	// const authOptions = {
	// 	headers: {
	// 		"Content-Type": "application/x-www-form-urlencoded",
	// 		// Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
	// 	},
	// 	params: {
	// 		grant_type: "client_credentials",
	// 	},
	// 	json: true,
	// };
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			// Authorization: `Basic${`${clientId}:${clientSecret}`}`,
		},
		json: true,
	};
	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((result) => {
				setIsLoading(false);
				setData(result);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			});

		// return () => {};
	}, []);
	return [data, error, isLoading];
};

export default useGetAccessToken;
