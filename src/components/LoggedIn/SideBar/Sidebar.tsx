import React, { useState } from "react";
import {
	ActionCards,
	ButtonLink,
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

export type sideBarProps = {
	width: number;
	widthHandleDragger: number;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleMouseMove: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Sidebar = ({
	width,
	widthHandleDragger,
	handleClick,
	handleMouseMove,
}: sideBarProps): JSX.Element => {
	return (
		<>
			<Container width={width}>
				<Home>
					<UnorderedList>
						<li>
							<Icon src="/icons/home.svg"></Icon>
							<Link to="/me/">Home</Link>
						</li>
						<li>
							<Icon src="/icons/search.svg"></Icon>
							<Link to="/me/search">Search</Link>
						</li>
					</UnorderedList>
				</Home>
				<Library>
					<UnorderedList>
						<li>
							<Icon src="/icons/library.svg"></Icon>
							<a href="">Your Library</a>
							<CreatePlaylist>
								<button>
									<img src="/icons/AddLibrary/add.svg" />
								</button>
								<button>
									<img src="/icons/AddLibrary/right-arrow.svg" />
								</button>
							</CreatePlaylist>
						</li>
					</UnorderedList>
					<ActionCards>
						<h4>Create your first playlist</h4>
						<p>It's easy, we'll help you</p>
						<ButtonLink>
							<span>CreatePlaylist</span>
						</ButtonLink>
					</ActionCards>
					<ActionCards>
						<h4>Let's find some podcasts to follow</h4>
						<p>We'll keep you updated on new episodes</p>
						<ButtonLink>
							<span>Browse podcasts</span>
						</ButtonLink>
					</ActionCards>
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
		</>
	);
};

export { Sidebar as default };
