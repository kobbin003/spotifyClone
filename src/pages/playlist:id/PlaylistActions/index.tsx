import React, { useContext, useEffect, useRef, useState } from "react";
import { DropDown, MidContainer } from "../style";
import putData from "../../../hooks/spotify-data/putData/putData";
import checkUserHas from "../../../hooks/spotify-data/check/checkUserHas";
import { ShowModalContext } from "../../../layout/LoggedInLayout";

const PlayListActions = ({
	playlistId,
	userId,
	ownerId,
}: {
	playlistId: string;
	userId: string;
	ownerId: string;
}) => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
	const [playlistIsSaved, setPlaylistIsSaved] = useState(false);

	const setShowModal = useContext(ShowModalContext).setShowModal;
	const showModal = useContext(ShowModalContext).showModal;

	const kebabRef = useRef<HTMLImageElement>(null);

	const handleDropDownMenu = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
		// setScroll((prev) => (prev == "hidden" ? "scroll" : "hidden"));
	};

	const handleSavePlaylist = () => {
		// console.log("is it saved", playlistIsSaved);
		// setPlaylistIsSaved(prev=>!prev);
		const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers`;
		const method = playlistIsSaved ? "DELETE" : "PUT";
		if (playlistId) {
			const body = {
				ids: [playlistId],
			};
			putData(url, method, body, accessToken, setAccessToken, () => {
				console.log(
					`${playlistIsSaved ? "playlist removed" : "playlist added"}`
				);
				window.dispatchEvent(new Event("playlistLibraryModified"));
				// setReRender((prev) => !prev);
				setPlaylistIsSaved((prev) => method == "PUT");
			});
		}
	};

	const handleEditPlaylist = () => {
		setShowModal({ show: true, playlistId });
		console.log("showModal on edit click", showModal, playlistId);
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

	// Check if user has the playlist saved
	useEffect(() => {
		const userIdQueries = userId;
		// console.log(albumIdQueries);
		const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userIdQueries}`;
		checkUserHas(url, "GET", accessToken, setAccessToken, (data) => {
			setPlaylistIsSaved(data[0]);
			// console.log(data);
		});
	}, []);

	// set the playlistId in the showModalContext
	useEffect(() => {
		setShowModal((prev) => ({ ...prev, playlistId }));
	}, []);
	// useEffect(() => {
	// 	console.log("playlist:id", showModal, playlistId);
	// }, [showModal]);

	return (
		<MidContainer>
			<img
				src="/icons/spotify_play.svg"
				alt="play button"
				// height={50}
				// width={50}
			/>
			{playlistIsSaved ? (
				<img
					src="/public/icons/heartGreen.svg"
					alt=""
					onClick={handleSavePlaylist}
					style={{ cursor: "pointer" }}
				/>
			) : (
				<img
					src="/public/icons/heratGreenInverse.svg"
					alt=""
					onClick={handleSavePlaylist}
					style={{ cursor: "pointer" }}
				/>
			)}
			<img
				src="/public/icons/threedots.svg"
				alt=""
				style={{ cursor: "pointer" }}
				onClick={handleDropDownMenu}
				ref={kebabRef}
				height={25}
				width={25}
			/>
			<DropDown dropDownVisibility={dropDownVisibility}>
				{playlistIsSaved ? (
					<button onClick={handleSavePlaylist}>Remove From Your Library</button>
				) : (
					<button onClick={handleSavePlaylist}>Add To Your Library</button>
				)}
				{ownerId == userId && (
					<>
						<button onClick={handleEditPlaylist}>Edit Library</button>
					</>
				)}
			</DropDown>
		</MidContainer>
	);
};

export default PlayListActions;
