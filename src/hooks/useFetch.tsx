import React, { useEffect, useState } from "react";

const useFetch = (url: string, accessToken: string) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
			Authorization: `Bearer ${accessToken}`,
		},
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
	}, [url]);
	return [data, error, isLoading];
};

export default useFetch;
