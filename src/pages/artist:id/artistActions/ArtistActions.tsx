import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { useOutletContext } from "react-router-dom";
import {
	Container,
	DropDown,
} from "../../album:id/components/AlbumActions/style";
import { FollowButton, FollowingButton } from "./style";
import checkUserHas from "../../../hooks/spotify-data/check/checkUserHas";
import putData from "../../../hooks/spotify-data/putData/putData";

const ArtistActions = ({ id }: { id: string }) => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const contextValue: [
		...rest: [],
		setScroll: Dispatch<SetStateAction<"scroll" | "hidden">>
	] = useOutletContext();
	const [artistFollowed, setArtistFollowed] = useState(true);

	const [reRender, setReRender] = useState(false);
	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
	const kebabRef = useRef<HTMLImageElement>(null);
	// const [setScroll, ...rest] = contextValue.reverse();
	const handleDropDownMenu = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
		// setScroll((prev) => (prev == "hidden" ? "scroll" : "hidden"));
	};

	const handleArtistFollowed = () => {
		const url = `https://api.spotify.com/v1/me/following?type=artist`;
		const body = { ids: [id] };
		const method = artistFollowed ? "DELETE" : "PUT";
		putData(url, method, body, accessToken, setAccessToken, () => {
			setArtistFollowed((prev) => !prev);
			window.dispatchEvent(new Event("artistLibraryModified"));
		});
	};
	// addEventListener - "click" , to find which element was clicked
	useEffect(() => {
		const handleClickedElementFinder = (e: any) => {
			const el = e.target as HTMLElement;
			if (el != kebabRef.current) {
				setDropDownVisibility("hidden");
				// console.log("not equal");
			}
		};
		window.addEventListener("click", handleClickedElementFinder);
		return () =>
			window.removeEventListener("click", handleClickedElementFinder);
	}, []);
	//
	useEffect(() => {
		//! want the artist id ! ! ! ! ! ! ! !
		const artistIdQuery = id;
		// console.log(artistIdQuery);
		const url = `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistIdQuery}`;
		checkUserHas(url, "GET", accessToken, setAccessToken, (data) => {
			setArtistFollowed(data[0]);
			// console.log(data);
		});
	}, []);
	return (
		<Container>
			<img
				src="/icons/spotify_play.svg"
				alt=""
			/>
			{/* <img
				src="/icons/heartGreen.svg"
				alt=""
			/> */}
			{artistFollowed ? (
				<FollowingButton onClick={handleArtistFollowed}>
					FOLLOWING
				</FollowingButton>
			) : (
				<FollowButton onClick={handleArtistFollowed}>Follow</FollowButton>
			)}
			<div>
				<img
					src="/icons/threedots.svg"
					alt=""
					onClick={handleDropDownMenu}
					style={{ cursor: "pointer" }}
					ref={kebabRef}
				/>
				<DropDown dropDownVisibility={dropDownVisibility}>
					{artistFollowed ? (
						<button onClick={handleArtistFollowed}>
							Remove From Your Library
						</button>
					) : (
						<button onClick={handleArtistFollowed}>Add To Your Library</button>
					)}
				</DropDown>
			</div>
		</Container>
	);
};

export default ArtistActions;
