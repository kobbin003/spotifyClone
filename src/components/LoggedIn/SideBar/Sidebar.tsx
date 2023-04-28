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

const Sidebar = () => {
	const [width, setWidth] = useState(14.5);
	const [isDraggable, setIsDraggable] = useState(false);
	// const handleMouseDown = () => {
	// 	!isDraggable ? setIsDraggable(true) : setIsDraggable(false);
	// 	console.log("mouse enter", isDraggable);
	// };
	const handleClick = () => {
		!isDraggable ? setIsDraggable(true) : setIsDraggable(false);
		console.log("mouse enter", isDraggable);
	};
	const handleMouseMove = (e: any) => {
		if (isDraggable) {
			const newWidth = e.clientX / 16;
			setWidth(newWidth);
			console.log("mouse move", isDraggable, e);
		}
	};
	// const handleMouseUp = () => {
	// 	setIsDraggable(false);
	// 	console.log("Mouse leave", isDraggable);
	// };
	return (
		<>
			<Container width={`${width}`}>
				<Home>
					<UnorderedList>
						<li>
							<Icon src="/icons/home.svg"></Icon>
							<a href="">Home</a>
						</li>
						<li>
							<Icon src="/icons/search.svg"></Icon>
							<a href="">Search</a>
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
									<img src="/public/icons/AddLibrary/add.svg" />
								</button>
								<button>
									<img src="/public/icons/AddLibrary/right-arrow.svg" />
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
					// left={`${width}`}
					// onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onClick={handleClick}
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
// #4b49492c

export default Sidebar;
