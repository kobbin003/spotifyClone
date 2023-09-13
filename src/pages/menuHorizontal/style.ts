import styled from "styled-components";

export const MenuContainer = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	display: flex;
	color: var(--font-grey);
`;

export const Menu = styled.ul`
	padding: 0.5em 0;
	position: relative;
	list-style-type: none;
	background-color: #282828;
	z-index: 1;
	width: 15em;
	font-weight: 600;
	li {
		cursor: pointer;
		position: relative;
		height: 2em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		> button {
			border: none;
			background-color: transparent;
			cursor: pointer;
			text-align: left;
			display: flex;
		}
		img {
			height: 100%;
			width: auto;
		}
		> * {
			width: 100%;
		}
		&:hover {
			background-color: var(--data-display-background-hover);
			> button {
				color: white;
			}
		}
	}
`;

export const MenuLeft = styled(Menu)`
	visibility: hidden;
	padding: 0.3em;
	z-index: 5;
	> li {
		border-radius: 3px;
		margin: 0.1em 0;
	}
	> li:nth-of-type(1) {
		position: relative;
		display: flex;
		background-color: #3e3e3e;
		padding: 0.1em 0.3em;
		> input {
			position: relative;
			background-color: #3e3e3e;
			border: none;
			color: var(--font-grey);
			margin-left: 0.3em;
			&::placeholder {
				font-size: 1rem;
				color: var(--font-grey);
			}
			&:focus {
				outline: none;
			}
			&::-webkit-search-cancel-button {
				display: none;
			}
		}
		> img {
			position: relative;
			height: 1.2em;
		}
		> button {
			position: relative;
			height: 1.2em;
			width: 1.2em;
			border: none;
			background-color: transparent;
			cursor: pointer;
			> img {
				height: 1.2em;
			}
		}
	}
	> li:nth-of-type(2) {
		border-radius: 3px 3px 0 0;
		border-bottom: 1px solid #696969;

		> button {
			display: flex;
			align-items: center;
			position: relative;
			height: 100%;
			width: 100%;
			border: none;
			text-align: left;
			background-color: transparent;
			color: var(--font-grey);
			padding: 0.3em;
		}
	}
`;
export const InnerUl = styled(Menu)`
	padding: 0.3em;
	max-height: 12em;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 1em;
	}
	::-webkit-scrollbar-track {
		background-color: #acabab;
	}

	::-webkit-scrollbar-thumb {
		background-color: #696969;
	}
	> li {
		border-radius: 3px;
		position: relative;
		> button {
			position: relative;
			height: 100%;
			width: 100%;
			border: none;
			text-align: left;
			background-color: transparent;
			color: var(--font-grey);
			padding: 0.3em;
			display: flex;
			align-items: center;
			> img {
				background-color: tomato;
			}
		}
	}
`;

export const MenuRight = styled(Menu)`
	border-radius: 5px;
	max-height: 4em;
	z-index: 1;
	> li {
		> button {
			color: var(--font-grey);
			padding-left: 1em;
			font-size: 0.95rem;
		}
	}
	> li:nth-of-type(1) {
		position: relative;
		display: flex;
		flex-direction: row;
		> img {
			position: relative;
			height: 1.2em;
		}
		> button {
			position: relative;
			height: 1.2em;
			width: fit-content;
			border: none;
			background-color: transparent;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			> img {
				height: 1.2em;
			}
		}
	}
`;
