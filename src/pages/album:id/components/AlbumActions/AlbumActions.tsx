import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { Container, DropDown } from "./style";
import { useOutletContext } from "react-router-dom";

const AlbumActions = () => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	// const [queryFromSearchBar, left, widthHandleDragger, setScroll]: [
	// 	string,
	// 	number,
	// 	number,
	// 	React.Dispatch<React.SetStateAction<"scroll" | "hidden">>
	// ] = useOutletContext();
	const contextValue: [
		...rest: [],
		setScroll: Dispatch<SetStateAction<"scroll" | "hidden">>
	] = useOutletContext();
	const [setScroll, ...rest] = contextValue.reverse();
	const handleDropDownMenu = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
		setScroll((prev) => (prev == "hidden" ? "scroll" : "hidden"));
	};

	return (
		<Container>
			<img
				src="icons/spotify_play.svg"
				alt=""
			/>
			<img
				src="icons/heartGreen.svg"
				alt=""
			/>
			{/* <img
				src="icons/heratGreenInverse.svg"
				alt=""
			/> */}
			<div>
				<img
					src="icons/threedots.svg"
					alt=""
					onClick={handleDropDownMenu}
				/>
				<DropDown dropDownVisibility={dropDownVisibility}>
					<a href="">Add To Your Library</a>
				</DropDown>
			</div>
		</Container>
	);
};

export default AlbumActions;
