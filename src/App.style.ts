import styled from "styled-components";

export const LoggedInAppLayout = styled.div`
	display: grid;
	grid-template-rows: 100vh;
	grid-template-columns: minmax(20px, auto) auto;
	column-gap: 100px;
	background-color: var(--black-darkest);
`;
export const LoggedOutAppLayout = styled.div`
	display: grid;
	grid-template-rows: 9vh auto;
	grid-template-columns: 250px auto;
`;

export const GridItem = styled.div`
	border: 2px solid red;
`;
