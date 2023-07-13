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
		&:hover {
			scale: 1.05;
		}
	}
`;
