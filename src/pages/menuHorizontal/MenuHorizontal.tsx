import { MouseEvent, useRef } from "react";
import { MenuContainer, MenuLeft, MenuRight } from "./style";
import MenuLeftContent from "./menuLeftContent/MenuLeftContent";

const MenuHorizontal = () => {
	const menuLeftRef = useRef<HTMLUListElement>(null);
	const addToPlaylistRef = useRef<HTMLLIElement>(null);

	const handleMouseEnter = (e: MouseEvent<HTMLLIElement>) => {
		const menuLeftElement = menuLeftRef.current as HTMLUListElement;
		const addToPlaylistElement = addToPlaylistRef.current as HTMLLIElement;
		if (e.target == addToPlaylistElement) {
			menuLeftElement.style.visibility = "visible";
		} else {
			menuLeftElement.style.visibility = "hidden";
		}
	};

	return (
		<MenuContainer>
			<MenuLeft ref={menuLeftRef}>
				<MenuLeftContent />
			</MenuLeft>
			<MenuRight>
				<li
					ref={addToPlaylistRef}
					onMouseEnter={handleMouseEnter}
				>
					<button>
						<span>Add to playlist</span>
						<img
							src="/public/icons/dropSide.svg"
							alt=""
						/>
					</button>
				</li>
				<li onMouseEnter={handleMouseEnter}>
					<button>Save to your Liked Songs</button>
				</li>
			</MenuRight>
		</MenuContainer>
	);
};

export default MenuHorizontal;
