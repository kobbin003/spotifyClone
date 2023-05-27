import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { Container } from "./style";

const SearchType = ({
	selectType,
}: {
	selectType: Dispatch<SetStateAction<string>>;
}) => {
	const types = ["artist", "track"];
	const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		selectType(e.currentTarget.name);
		console.log(e.currentTarget.name);
	};
	return (
		<Container>
			{types.map((type) => (
				<button
					key={type}
					onClick={handleOnClick}
					name={type}
				>
					{type}
				</button>
			))}
		</Container>
	);
};

export default SearchType;
