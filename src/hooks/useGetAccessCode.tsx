import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
function useGetAccessCode() {
	// const location = useLocation();
	const [code, setCode] = useState<string | null>();
	const urlSearchParams = new URLSearchParams(window.location.search);
	// console.log(location, urlSearchParams);
	useEffect(() => {
		const codeFromQuery = urlSearchParams.get("code");
		// if (typeof code === "string") {
		setCode(codeFromQuery);
		// }
	}, []);
	if (code) return code;
}

export default useGetAccessCode;
