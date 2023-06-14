import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	img {
		height: 200px;
		width: 200px;
	}
`;
export const DropDown = styled.div<{
	dropDownVisibility: "hidden" | "visible";
}>`
	position: fixed;
	background-color: var(--profile-dropdown);
	/** //! adjust right and top */
	right: 2em;
	top: 3.5em;
	border-radius: 5px 5px 5px 5px;
	visibility: ${(prop) => prop.dropDownVisibility};
	display: flex;
	flex-direction: column;
	z-index: 2;
	a {
		text-decoration: none;
		display: inline-block;
		border-radius: 2px;
		color: var(--profile-dropdown-font);
		font-weight: 500;
		font-size: 0.8rem;
		padding-right: 3em;
		padding-left: 1em;
		padding-top: 0.35em;
		padding-bottom: 0.35em;
		margin: 0 0.4em;
		&:first-child {
			margin-top: 0.4em;
		}
		&:last-child {
			border-top: 1px solid #d1cbcb5f;
			margin-bottom: 0.4em;
		}
		&:hover {
			background-color: #d1cbcb5f;
		}
	}
`;
