import styled from "styled-components";
export const Container = styled.div`
	position: relative;
	height: 50px;
	background: yellow;
`;
export const FixedContainer = styled.div<{
	left: number;
	widthHandleDragger: number;
}>`
	position: fixed;
	width: calc(100vw - ${(prop) => prop.left + prop.widthHandleDragger / 2}em);
	height: 50px;
	background-color: var(--black-dark);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const InnerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #101010;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const NavigatePageSection = styled.section`
	position: relative;
	height: 100%;
	display: flex;
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
};

export const Icon = styled.img<IconProp>`
	height: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else if (props.big) {
			return "1.8em";
		} else return "1.6em";
	}};
	width: ${(props) => {
		if (props.spotify) {
			return "1.5em";
		} else if (props.globe) {
			return "1.1em";
		} else if (props.big) {
			return "1.8em";
		} else return "1.6em";
	}};
	padding-right: ${(props) => (props.spotify ? "0.2em" : "0.9em")};
`;

export const ButtonLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	text-decoration: none;
	border-radius: 30px 30px 30px 30px;
	font-size: 0.9rem;
`;

export const ProfileContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	font-size: 0.9rem;
	padding-right: 3em; //?
`;

export const UpgradeLink = styled(ButtonLink)`
	font-size: 0.3rem;
	background: #ffffff;
	color: #000000;
	padding: 1em 2.5em;
	margin-right: 2em;
`;

export const InstallAppLink = styled(ButtonLink)`
	background: #000000;
	color: #ffffff;
	padding: 0.5em;
	/* display: inline-flex;
	justify-content: center;
	align-items: center;
	border: none; */
	& img {
		padding-right: 0.1em;
	}

	& span {
		font-size: 0.3em;
		font-weight: inherit;
	}
`;

export const ProfileButton = styled.button`
	width: auto;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
