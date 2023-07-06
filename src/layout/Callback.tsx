import React, { useEffect } from "react";
import useGetAccessCode from "../hooks/useGetAccessCode";
import { useNavigate } from "react-router-dom";

const Callback = () => {
	const navigate = useNavigate();

	const code = useGetAccessCode();

	useEffect(() => {
		// console.log("code-callback", code);
		if (code) {
			// console.log("code-callback-yes", code);
			navigate("/me");
			localStorage.setItem("code", code);
		}
		// else {
		// 	console.log("code-callback-no", code);
		// 	navigate("/");
		// 	localStorage.removeItem("code");
		// }
	}, [code]);
	return <div>Loading...</div>;
};

export default Callback;
