import React, { Dispatch, SetStateAction, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
	Container,
	DropDown,
} from "../../album:id/components/AlbumActions/style";
import { FollowingButton } from "./style";

const ArtistActions = () => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
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
				src="/public/icons/spotify_play.svg"
				alt=""
			/>
			{/* <img
				src="/public/icons/heartGreen.svg"
				alt=""
			/> */}
			<FollowingButton>FOLLOWING</FollowingButton>
			<div>
				<img
					src="/public/icons/threedots.svg"
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

export default ArtistActions;
