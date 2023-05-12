import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
function useGetAccessCode() {
	const location = useLocation();
	const [code, setCode] = useState<string>();
	const urlSearchParams = new URLSearchParams(window.location.search);
	// console.log(location, urlSearchParams);
	useEffect(() => {
		const code = urlSearchParams.get("code");
		if (typeof code === "string") {
			setCode(code);
		}
	}, [location.pathname]);
	if (code) return code;
}

export default useGetAccessCode;
