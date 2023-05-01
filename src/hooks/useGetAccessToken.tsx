import React, { useEffect, useState } from "react";
// import * as dotenv from "dotenv";
// dotenv.config();

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
	const options = {
		method: "POST",
		headers: {
			Accept: "*/*",
			"User-Agent": "Thunder Client (https://www.thunderclient.com)",
			"Content-Type": "application/x-www-form-urlencoded",
			// Authorization: `Bearer ${accessToken}`,
		},
	};
	const client_id = import.meta.env.CLIENT_ID;
	const client_secret = import.meta.env.CLIENT_SECRET;
	const url = `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;
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
