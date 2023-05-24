import styled from "styled-components";
export const SearchInputContainer = styled.div`
	position: relative;

	width: 25vw;
	min-width: 100px;
	/* background-color: pink; */
	padding: 3px;
	display: flex;
	align-items: center;

	input {
		height: 100%;
		width: 100%;
		border-radius: 5555px;
		border: none;
		caret: unset;

		&::-webkit-search-cancel-button {
			display: none;
		}
	}
`;
export const SearchInputContainerOut = styled(SearchInputContainer)`
	height: 80%;
	input {
		color: #000000;
		caret-color: #000000;
		background-color: #ffffff;
		padding-left: 1.8em;
		padding-right: 1.8em;
		&::placeholder {
			font-size: 0.8rem;
			font-weight: 500;
		}
		&:focus {
			/** no need of outline 
					BECAUSE autofous on "/search" */
			outline: none;
		}
	}
`;

export const SearchInputContainerIn = styled(SearchInputContainer)`
	height: 75%;
	input {
		color: #ffffff;
		caret-color: #ffffff;
		background-color: #242424;
		/* padding-left: 2em; */
		padding-left: 1.8em;
		padding-right: 1.8em;
		&::placeholder {
			font-size: 0.7rem;
			font-weight: 500;
		}
	}
`;
// export const SearchInputContainerIn = styled.div`
// 	position: relative;
// 	height: 80%;
// 	width: 25vw;
// 	min-width: 100px;
// 	background-color: pink;
// 	padding: 3px;
// 	input {
// 		height: 100%;
// 		width: 100%;
// 		border-radius: 5555px;
// 		border: none;
// 		caret: unset;

// 		padding-left: 40px;
// 		&::placeholder {
// 			font-size: 0.8rem;
// 			font-weight: 500;
// 		}
// 		&::-webkit-search-cancel-button {
// 			display: none;
// 		}
// 		&:hover {
// 			filter: brightness(150%);
// 		}
// 	}
// `;
export const SearchIcon = styled.img<{ in?: boolean }>`
	height: ${(props) => (props.in ? "40%" : "55%")};
	/* width: 10%; */
	position: absolute;
	left: ${(props) => (props.in ? "0.8em" : "0.6em")};
`;
export const ResetButton = styled.button<{
	visible: string;
	in?: boolean;
}>`
	height: 90%;
	width: 26px;
	display: block;
	background-color: transparent;
	/* background-color: red; */
	/* padding-left: 0.3em; */
	padding-left: ${(props) => props.in && "0.3em"};
	/* padding-right: 1em; */
	padding-right: ${(props) => props.in && "1em"};
	border: none;
	position: absolute;
	right: 0.5em;
	cursor: pointer;
	z-index: 10;
	display: flex;
	align-items: center;
	visibility: ${(props) => props.visible};
	img {
		height: ${(props) => (props.in ? "40%" : "70%")};
		/* height: 90%; */
		/* width: 100%; */
		/* min-width: 20px; */
	}
`;
