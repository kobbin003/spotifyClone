import { useEffect, useState } from "react";
import useFetchData from "../useFetchData";

type UserProfile = {
	country: string;
	display_name: string;
	email: string;
	followers: { href: number; total: number };
	id: string;
	images: [];
	product: string;
	external_urls: { spotify: string };
};
type UserProfileErrorError = {
	status: number;
	message: string;
};
const getCurrentUserProfile = () => {
	const url = "https://api.spotify.com/v1/me";
	const { data, error, isLoading } = useFetchData<
		UserProfile,
		UserProfileErrorError
	>(url, "GET");
	return { data, isLoading, error };
};

export default getCurrentUserProfile;
