import React, {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useReducer,
	useState,
} from "react";
import { Container, LinkContainer } from "./style";
import { Link } from "react-router-dom";

const SearchTypesList = () => {
	type INITIALSTATE = { searchType: string; active: boolean }[];
	const initialState = [
		{ searchType: "artist", active: true },
		{ searchType: "track", active: false },
		{ searchType: "album", active: false },
		{ searchType: "playlist", active: false },
	];
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
						to={`/me/search/${type.searchType}`}
						onClick={handleOnClick}
						id={type.searchType}
						// name={type}
					>
						{type.searchType}
					</Link>
				</LinkContainer>
			))}
		</Container>
	);
};

export default SearchTypesList;
