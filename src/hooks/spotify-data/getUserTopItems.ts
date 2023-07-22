import useFetchData from "../useFetchData";
import { UserTopTracksType } from "./userTopTracks.type";

export type UserTopItemsError = { status: number; message: string };
const getUserTopTracks = () => {
	const url = `https://api.spotify.com/v1/me/top/tracks`;
	const { data, error, isLoading } = useFetchData<
		UserTopTracksType,
		UserTopItemsError
	>(url, "GET");
	return { data, error, isLoading };
};

export default getUserTopTracks;
