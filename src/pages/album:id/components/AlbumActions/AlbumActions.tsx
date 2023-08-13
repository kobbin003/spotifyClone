import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { Container, DropDown } from "./style";
import { useOutletContext } from "react-router-dom";
import checkUserHas from "../../../../hooks/spotify-data/check/checkUserHas";
import putData from "../../../../hooks/spotify-data/putData/putData";

const AlbumActions = ({ id }: { id: string | undefined }) => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const [albumIsSaved, setAlbumIsSaved] = useState(false);
	const [reRender, setReRender] = useState(false);
	const [accessToken, setAccessToken] = useState<string>(
		localStorage.getItem("accessToken") || ""
	);
	const kebabRef = useRef<HTMLImageElement>(null);
	const contextValue: [
		...rest: [],
		setScroll: Dispatch<SetStateAction<"scroll" | "hidden">>
	] = useOutletContext();
	const [setScroll, ...rest] = contextValue.reverse();
	const handleDropDownMenu = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
		// setScroll((prev) => (prev == "hidden" ? "scroll" : "hidden"));
	};
	const handleSaveAlbum = () => {
		// console.log("is it saved", albumIsSaved);
		// setAlbumIsSaved(prev=>!prev);
		const url = `https://api.spotify.com/v1/me/albums`;
		const method = albumIsSaved ? "DELETE" : "PUT";
		if (id) {
			const body = {
				ids: [id],
			};
			putData(url, method, body, accessToken, setAccessToken, () => {
				console.log(`${albumIsSaved ? "album removed" : "album added"}`);
				window.dispatchEvent(new Event("albumLibraryModified"));
				// setReRender((prev) => !prev);
				setAlbumIsSaved((prev) => method == "PUT");
			});
		}
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

	// Check if user has the album saved
	useEffect(() => {
		const albumIdQueries = id;
		// console.log(albumIdQueries);
		const url = `https://api.spotify.com/v1/me/albums/contains?ids=${albumIdQueries}`;
		checkUserHas(url, "GET", accessToken, setAccessToken, (data) => {
			setAlbumIsSaved(data[0]);
			// console.log(data);
		});
	}, []);
	return (
		<Container>
			<img
				src="/public/icons/spotify_play.svg"
				alt=""
			/>
			{albumIsSaved ? (
				<img
					src="/public/icons/heartGreen.svg"
					alt=""
					onClick={handleSaveAlbum}
					style={{ cursor: "pointer" }}
				/>
			) : (
				<img
					src="/public/icons/heratGreenInverse.svg"
					alt=""
					onClick={handleSaveAlbum}
					style={{ cursor: "pointer" }}
				/>
			)}

			<div>
				<img
					src="/public/icons/threedots.svg"
					alt=""
					style={{ cursor: "pointer" }}
					onClick={handleDropDownMenu}
					ref={kebabRef}
				/>
				<DropDown dropDownVisibility={dropDownVisibility}>
					{albumIsSaved ? (
						<button onClick={handleSaveAlbum}>Remove From Your Library</button>
					) : (
						<button onClick={handleSaveAlbum}>Add To Your Library</button>
					)}
				</DropDown>
			</div>
		</Container>
	);
};

export default AlbumActions;
