import styled from "styled-components";
export const ModalContainer = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
	box-sizing: content-box;
	z-index: 10;
	background-color: #000000c0;
`;

export const Modal = styled.div`
	position: relative;
	height: fit-content;
	width: fit-content;
	border-radius: 5px;
	background-color: #282828;
	color: white;
	display: flex;
	flex-direction: column;
	padding: 1.1em 1.5em;
	> div:nth-of-type(1) {
		display: flex;
		justify-content: space-between;
		> button {
			height: 25px;
			width: 25px;
			background-color: transparent;
			border: none;
			cursor: pointer;
			border-radius: 50%;
			&:hover {
				background-color: var(--data-display-background-hover);
			}
			img {
				height: 100%;
			}
		}
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em 0;
	row-gap: 1em;
	flex-wrap: wrap;
	*::placeholder {
		/* padding: 0.5em; */
		font-size: 0.9rem;
	}
	> div:nth-of-type(1) {
		display: grid;
		grid-template-columns: repeat(5, 80px);
		grid-template-rows: repeat(3, 45px);
		/* gap: 15px; */
		column-gap: 10px;
		row-gap: 15px;
		> * {
			border: none;
			border-radius: 3px;
		}
		> label:nth-of-type(1) {
			background-color: #282828;
			grid-column: 1 / span 2;
			grid-row: 1 / span 3;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				position: relative;
				height: 100%;
				width: 100%;
				border-radius: 5px;
				/* height: 150px;
				width: 160px; */
				object-fit: cover;
				border: 2px solid #3e3e3e;
			}
		}

		> input {
			background-color: #3e3e3e;
			grid-column: 3 / span 3;
			grid-row: 1 / span 1;
			font-size: 0.9rem;
			padding: 0.5em;
			color: white;
		}
		> textarea {
			background-color: #3e3e3e;
			grid-column: 3 / span 3;
			grid-row: 2 / span 2;
			resize: none;
			font-size: 0.9rem;
			padding: 0.5em;
			color: white;

			/* vertical-align: top; */
		}
	}
	> div:nth-of-type(2) {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		> button {
			padding: 0.8em 1.6em;
			border-radius: 10000px;
			border: none;
			cursor: pointer;
			font-weight: 600;
		}
		> button:hover {
			scale: 1.05;
		}
	}
	> div:nth-of-type(3) {
		max-width: 400px;
		font-size: 0.8rem;
		font-weight: 600;
	}
`;

export const Message = styled.div<{ backgroundColor: string }>`
	margin-top: 0.5em;
	width: 100%;
	background-color: ${(prop) => prop.backgroundColor};
	font-size: 1rem;
	color: white;
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 0.2em;
	border-radius: 3px;
	> img {
		height: 1.2rem;
		width: 1.2rem;
		padding-right: 0.3em;
	}
`;
