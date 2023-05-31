import styled from "styled-components";
export const Container = styled.div`
	/** // ? NO NEED OF CONTAINER. 
	//?  SINCE all the child element are fixed  */
	position: relative;
	width: 100%;
	background: yellow;
`;
export const FixedContainer = styled.div<{
	left: number;
	widthHandleDragger: number;
}>`
	position: fixed;
	width: calc(100vw - ${(prop) => prop.left + prop.widthHandleDragger}em);
	height: calc(50 / 16 * 1em);
	/* min-width: 320px; */
	/** //! DO NOT make min-width of fixed container with space in right size
		//! OR ELSE it will overflow when container gets minimized
	 */
	background-color: var(--black-dark);
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* z-index: 3; */
	overflow-x: hidden;
`;

export const NavigatePageSection = styled.section`
	position: relative;
	height: 100%;
	display: flex;
	min-width: 80px;
	justify-content: center;
	align-items: center;
	align-content: center;
	a {
		position: relative;
		text-decoration: none;
		color: #ffffff;
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: flex-end;
	}
	a:hover {
		filter: brightness(200%);
	}
`;
export const NavArrowIcon = styled.img<{ direction: string }>`
	height: 90%;
	width: 90%;
	position: relative;
	left: ${(prop) => (prop.direction === "left" ? "0.4em" : "0px")};
`;

//-----------------
type IconProp = {
	readonly spotify?: boolean;
	readonly globe?: boolean;
	readonly big?: boolean;
	readonly user?: boolean;
};

export const Icon = styled.img<IconProp>`
	height: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else if (props.big) {
			return "1.8em";
		} else if (props.user) {
			return "1.5em";
		} else {
			return "1.6em";
		}
	}};
	width: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else if (props.big) {
			return "1.8em";
		} else if (props.user) {
			return "1.5em";
		} else {
			return "1.6em";
		}
	}};
	padding-right: ${(props) => {
		if (props.spotify) {
			return "0.2em";
		} else if (props.user) {
			return "0";
		} else {
			return "0.9em";
		}
	}};
`;

export const ProfileContainer = styled.div`
	position: relative; //?
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	font-size: 0.9rem;
	/* padding-right: 1em; //? */
`;

export const ButtonLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	text-decoration: none;
	border-radius: 30px 30px 30px 30px;
	font-size: 0.9em;
	height: 10px;
	transform: scale(0.95);
`;

export const UpgradeLink = styled(ButtonLink)`
	font-size: 0.8rem;
	background: #ffffff;
	color: #000000;
	/* color: white; */
	padding: 0.75em 1em;
	margin-right: 0.3em;
`;

export const InstallAppLink = styled(ButtonLink)`
	background: #000000;
	color: #ffffff;
	padding: 0.7em 0.65em;
	/* min-width: 70px; */
	& img {
		padding-right: 0.1em;
	}

	& span {
		font-size: 0.3em;
		font-weight: inherit;
		white-space: nowrap;
	}
`;

export const ProfileButton = styled.button`
	/* width: auto; */
	display: inline-block;
	background-color: transparent;
	border: none;
	cursor: pointer;
	margin-left: 0.2em;
	margin-right: 1em;
	/* img {
		position: relative;
		left: 10px;
	} */
`;

export const DropDown = styled.div<{
	dropDownVisibility: "hidden" | "visible";
}>`
	position: fixed;
	/* height: 200px;
	width: 200px; */
	background-color: var(--profile-dropdown);

	right: 2em;
	top: 3.5em;
	/* padding-right: 1em; */
	/* 
	 */
	border-radius: 5px 5px 5px 5px;
	/* margin: 1em; */
	/* padding: 0em 0.8em 0.8em; */
	visibility: ${(prop) => prop.dropDownVisibility};
	display: flex;
	flex-direction: column;
	a {
		text-decoration: none;
		display: inline-block;
		border-radius: 2px;
		color: var(--profile-dropdown-font);
		font-weight: 500;
		font-size: 0.8rem;
		/* transform: scale(0.99, 1); */
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
			/* filter: brightness(150%); */
			background-color: #d1cbcb5f;
			/** set on hover background & padding */
		}
	}
`;
