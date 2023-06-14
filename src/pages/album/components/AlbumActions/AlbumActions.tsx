import React, { useState } from "react";
import { Container, DropDown } from "./style";

const AlbumActions = () => {
	const [dropDownVisibility, setDropDownVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const handleDropDownMenu = () => {
		setDropDownVisibility((prev) => (prev === "hidden" ? "visible" : "hidden"));
	};
	return (
		<Container>
			<img
				src="/public/icons/spotify_play.svg"
				alt=""
			/>
			<img
				src="/public/icons/heartGreen.svg"
				alt=""
			/>
			<img
				src="/public/icons/heratGreenInverse.svg"
				alt=""
			/>
			<img
				src="/public/icons/threedots.svg"
				alt=""
				onClick={handleDropDownMenu}
			/>
			<DropDown dropDownVisibility={dropDownVisibility}>
				<a href="">Add To Your Library</a>
			</DropDown>
		</Container>
	);
};

export default AlbumActions;
