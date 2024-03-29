import React from "react";
import {
	Container,
	CreatePlaylist,
	DraggableHandle,
	Dragger,
	Home,
	Icon,
	Library,
	UnorderedList,
} from "./style";
import { Link } from "react-router-dom";
import UserLibraryContainer from "./component/UserLibraryContainer";
import CreatePlaylistButton from "./component/createPlaylistButton/CreatePlaylistButton";
import getUserProfile from "../../../hooks/spotify-data/getUserProfile";
export type sideBarProps = {
	width: number;
	widthHandleDragger: number;
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => void;
	tokenSet: boolean;
};
const Sidebar = ({
	width,
	widthHandleDragger,
	handleClick,
	handleMouseMove,
	tokenSet,
}: sideBarProps): JSX.Element => {
	const { data, error, isLoading } = getUserProfile();
	return (
		<Container width={width}>
			<Home>
				<UnorderedList>
					<li>
						<Icon src="/icons/home.svg"></Icon>
						<Link to="/me/">Home</Link>
					</li>
					<li>
						<Icon src="/icons/search.svg"></Icon>
						<Link to="/me/search/artist">Search</Link>
					</li>
				</UnorderedList>
			</Home>
			<Library>
				<UnorderedList>
					<li>
						<Icon src="/icons/library.svg"></Icon>
						<a href="">Your Library</a>
						<CreatePlaylist>
							{data && <CreatePlaylistButton id={data.id} />}
							<button>
								<img src="/icons/AddLibrary/right-arrow.svg" />
							</button>
						</CreatePlaylist>
					</li>
				</UnorderedList>
				{tokenSet && <UserLibraryContainer />}
			</Library>
			<DraggableHandle
				onClick={handleClick}
				onMouseMove={handleMouseMove}
				widthHandleDragger={widthHandleDragger}
			>
				<div></div>
				<Dragger>
					<div></div>
					<div></div>
					<div></div>
				</Dragger>
				<div></div>
			</DraggableHandle>
		</Container>
	);
};

export { Sidebar as default };
