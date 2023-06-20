import React, {
	useState,
	useRef,
	ChangeEvent,
	MouseEvent,
	FocusEvent,
	useEffect,
} from "react";
import {
	ResetButton,
	SearchIcon,
	SearchInputContainerIn,
	SearchInputContainerOut,
} from "./SearchBar.style";
import { debounce } from "lodash";
import { StyledComponent } from "styled-components";
const SearchBar = ({
	loggedIn,
	passQueryToNavBar,
	showSearchTypes,
	styledComponent: StyledComponent, //component should be Uppercase.
}: {
	loggedIn?: boolean;
	passQueryToNavBar?: React.Dispatch<React.SetStateAction<string | undefined>>;
	showSearchTypes?: React.Dispatch<React.SetStateAction<boolean>>;
	styledComponent: StyledComponent<any, any>; //style to apply to the component.
}) => {
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
		// pass search query to parent
		if (passQueryToNavBar) passQueryToNavBar(e.target.value);
	};
	const debouncedHandleOnChange = debounce(handleOnChange, 500);
	const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
		if (showSearchTypes) {
			showSearchTypes(true);
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
	useEffect(() => {
		console.log("searchValue", searchValue);
	}, [searchValue]);

	return (
		<StyledComponent>
			<input
				ref={searchInput}
				type="search"
				placeholder="What do you want to listen to?"
				value={searchValue}
				autoFocus
				onFocus={handleOnFocus}
				onChange={handleOnChange}
				// onChange={debouncedHandleOnChange}
			></input>
			<SearchIcon
				loggedIn
				src="/icons/navBar/searchWhiteGrey.svg"
			></SearchIcon>
			<ResetButton
				loggedIn
				visible={resetButtonVisibility}
				type="button"
				onClick={handleReset}
			>
				<img src="/icons/navBar/clearInputWhiteGrey.svg" />
			</ResetButton>
		</StyledComponent>
	);
};

export default SearchBar;
