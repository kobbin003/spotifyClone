import React, { useState, useRef, ChangeEvent, MouseEvent } from "react";
import {
	ResetButton,
	SearchIcon,
	SearchInputContainerIn,
	SearchInputContainerOut,
} from "./Search.style";

const Search = ({ loggedIn }: { loggedIn?: boolean }) => {
	const [resetButtonVisibility, setResetButtonVisibility] = useState<
		"visible" | "hidden"
	>("hidden");
	const [searchValue, setSearchValue] = useState("");
	const searchInput = useRef<HTMLInputElement>(null);
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		// start showing reset button after inital input.
		if (resetButtonVisibility == "hidden") {
			setResetButtonVisibility("visible");
		}
		// stop showing reset button when input is empty.
		if (e.target.value == "") {
			setResetButtonVisibility("hidden");
		}
	};
	const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
		setSearchValue("");
		setResetButtonVisibility("hidden");
		// keep focus on input even after resetting
		if (searchInput.current) {
			searchInput.current.focus();
		}
	};
	return (
		// {loggedIn}
		<>
			{loggedIn ? (
				<SearchInputContainerIn>
					<input
						ref={searchInput}
						type="search"
						placeholder="What do you want to listen to?"
						value={searchValue}
						autoFocus
						onChange={handleOnChange}
					></input>
					<SearchIcon
						in
						src="/icons/navBar/searchWhiteGrey.svg"
					></SearchIcon>
					<ResetButton
						in
						visible={resetButtonVisibility}
						type="button"
						onClick={handleReset}
					>
						<img src="/icons/navBar/clearInputWhiteGrey.svg" />
					</ResetButton>
				</SearchInputContainerIn>
			) : (
				<SearchInputContainerOut>
					<input
						ref={searchInput}
						type="search"
						placeholder="What do you want to listen to?"
						value={searchValue}
						autoFocus
						onChange={handleOnChange}
					></input>
					<SearchIcon src="/icons/navBar/searchBlack.svg"></SearchIcon>
					<ResetButton
						visible={resetButtonVisibility}
						type="button"
						onClick={handleReset}
					>
						<img src="/icons/navBar/clearInputBlack.svg" />
					</ResetButton>
				</SearchInputContainerOut>
			)}
		</>
	);
};

export default Search;
