import styled from "styled-components";

export const LoggedInAppLayout = styled.div`
	/* display: flex; */
	/* overflow-x: hidden; */

	/* width: 600px; */
`;
export const LoggedOutAppLayout = styled.div`
	display: grid;
	grid-template-rows: 9vh auto;
	grid-template-columns: 250px auto;
`;

export const GridItem = styled.div`
	border: 2px solid red;
`;
