import { memo, useEffect, useState } from "react";
import { useFetchToken } from "./useFetchToken";
export type TokenData = {
	access_token: string;
	token_type: string;
	scope: string;
	expires_in: number;
};
export type ErrorData = {
	error: string;
	error_dscription: string;
};

const useGetRefreshToken = (accessTokenExpired: boolean) => {
	// if (!accessTokenExpired) {
	// 	return;
	// }
	const refreshToken = localStorage.getItem("refreshToken");
	let queryParams = new URLSearchParams();
	queryParams.set("grant_type", "refresh_token");
	queryParams.set("refresh_token", refreshToken || "");
	const data = useFetchToken(queryParams);
	console.log("refreshtoken", data);
};

export default useGetRefreshToken;
