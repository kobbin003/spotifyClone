import styled from "styled-components";

export const LoggedOutAppContainer = styled.div`
	display: grid;
	grid-template-rows: 9vh auto;
	grid-template-columns: 250px auto;
	background-color: var(--black-dark);
	height: fit-content;
	left: 250px;
	width: 100%;
	/* border: 0.5px solid goldenrod; */
	overflow-x: hidden;
`;
export const Content = styled.main`
	margin-top: 50px;
	position: relative;
	grid-column: 2/3;
	grid-row: 2/3;
	color: var(--font-grey);
	width: 100%;
	/* width: calc(100vw - (100vw - 100%) - 250px); */
	/** //*100vw - scroll width - sidebar-width */
	/** //! don't unmute the "border" */
	background-color: goldenrod;
	/* border: 0.5px solid goldenrod; */
`;
