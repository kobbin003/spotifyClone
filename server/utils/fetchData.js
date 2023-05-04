export const fetchData = async (method, url, token) => {
	const options = {
		method,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			// Authorization: `Bearer ${token}`,
			Authorization: `Bearer BQDidsvlIMeNN5xCfU2f8-dvG_IoSuMDr5v9ysliDylc8i7UOlqOyrXUVu0xxwBQgeXB9CAeWcFX9IQLMRdeKH2N5LIGjU5HjfFIwtUB9ddEAMFS56d3`,
		},
		json: true,
	};
	try {
		const result = await fetch(url, options);
		const data = await result.json();
		return data;
	} catch (error) {
		return error;
	}
};
