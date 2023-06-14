import styled from "styled-components";
export const Container = styled.div`
	/* background-color: goldenrod; */
	width: 97%;
	min-width: 300px;
`;
export const Row = styled.li`
	width: 100%;
	display: grid;
	grid: auto / minmax(30px, 50px) minmax(150px, 1fr) minmax(50px, 0.4fr);
	/* align-items: center; */
	& > div {
		align-self: center;
	}
	& > div:nth-of-type(1) {
		/* background-color: pink; */
		justify-self: center;
	}
	& > div:nth-of-type(2) {
		/* background-color: darkmagenta; */
		white-space: nowrap;
		overflow: hidden;
	}
	& > div:nth-of-type(3) {
		/* background-color: violet; */
		justify-self: flex-end;
		padding-right: 1em;
	}
`;
export const Header = styled(Row)``;
export const TrackItem = styled(Row)`
	& > div:nth-of-type(2) {
		display: flex;
		flex-direction: column;
	}
`;
