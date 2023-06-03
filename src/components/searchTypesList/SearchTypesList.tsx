import React, {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useReducer,
	useState,
} from "react";
import { Container, LinkContainer } from "./style";
import { Link, useLocation } from "react-router-dom";

const SearchTypesList = () => {
	type INITIALSTATE = { searchType: string; active: boolean }[];
	// select the last item in the window.location.pathname
	const lastItemAtLocationPathname = window.location.pathname.split("/").at(-1);
	// check if isLoggedIn, By checking the first item in the window.location.pathname
	const isLoggedIn = window.location.pathname.startsWith("/me");
	console.log("isLoggedIn", isLoggedIn);
	const typesState = [
		{ searchType: "artist", active: false },
		{ searchType: "track", active: false },
		{ searchType: "album", active: false },
		{ searchType: "playlist", active: false },
	];
	// set active true if lastItemAtLocationPathname matches searchType.
	const initialState = typesState.map((type) => {
		if (lastItemAtLocationPathname === type.searchType) {
			return { ...type, active: true };
		} else return { ...type };
	});
	type ACTIONTYPE = { type: "ACTIVATE"; payload: { searchType: string } };
	const reducer = (state: INITIALSTATE, action: ACTIONTYPE) => {
		switch (action.type) {
			case "ACTIVATE":
				return state.map((item) => {
					if (item.searchType == action.payload.searchType) {
						return { ...item, active: true };
					} else return { ...item, active: false };
				});
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
		dispatch({ type: "ACTIVATE", payload: { searchType: e.currentTarget.id } });
	};
	return (
		<Container>
			{state.map((type) => (
				<LinkContainer
					key={type.searchType}
					active={type.active}
				>
					<Link
						to={
							isLoggedIn
								? `/me/search/${type.searchType}`
								: `/search/${type.searchType}`
						}
						onClick={handleOnClick}
						id={type.searchType}
						// name={type}
					>
						{type.searchType[0].toUpperCase() + type.searchType.slice(1)}
					</Link>
				</LinkContainer>
			))}
		</Container>
	);
};

export default SearchTypesList;
