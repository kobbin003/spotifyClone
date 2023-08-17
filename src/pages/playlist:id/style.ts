import styled from "styled-components";

export const Container = styled.div`
	/* background-color: blanchedalmond; */
	height: 100%;
	padding-bottom: 2em;
	overflow: hidden;
`;
export const MidContainer = styled.div`
	height: 15vh;
	display: flex;
	align-items: center;
	padding-left: 1em;
	& > img {
		height: 50%;
		cursor: pointer;
		margin-right: 1em;
		&:hover {
			scale: 1.05;
			filter: brightness(150%);
		}
	}
`;
export const DropDown = styled.div<{
	dropDownVisibility: "hidden" | "visible";
}>`
	position: relative;
	background-color: var(--profile-dropdown);
	/** //! adjust right and top */
	top: calc(15vh / 2.5);
	/* left: -50px; */
	border-radius: 5px 5px 5px 5px;
	visibility: ${(prop) => prop.dropDownVisibility};
	display: flex;
	flex-direction: column;
	padding-bottom: 5px;
	z-index: 2;

	button {
		border-radius: 2px;
		background-color: transparent;
		border: none;
		color: var(--profile-dropdown-font);
		font-weight: 500;
		font-size: 0.8rem;
		padding-right: 3em;
		padding-left: 1em;
		padding-top: 0.35em;
		padding-bottom: 0.35em;
		margin: 0 0.4em;
		cursor: pointer;
		&:first-child {
			margin-top: 0.4em;
		}

		&:hover {
			background-color: #d1cbcb5f;
		}
	}
`;
