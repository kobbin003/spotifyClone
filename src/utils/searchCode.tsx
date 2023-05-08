import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
function searchCode() {
	const navigate = useNavigate();

	const [code, setCode] = useState<string>();
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const code = urlSearchParams.get("code");
		if (typeof code === "string") {
			setCode(code);
		}
		console.log("code", code);
		// code&&
	}, []);
	useEffect(() => {
		if (code) navigate("/me");
	}, [code]);
}

export default searchCode;
