import React from "react";
import { ContainerLibrary, LibraryItem } from "./style";
import { UserAlbums } from "../../../../hooks/spotify-data/getUserAlbums";
import { Link } from "react-router-dom";
type UserLibraryProps = {
	// playlists: {
	// 	collaborative: boolean;
	// 	description: string;
	// 	external_urls: {
	// 		spotify: string;
	// 	};
	// 	href: string;
	// 	id: string;
	// 	images: { height: number; width: number; url: string }[];
	// 	name: string;
	// 	owner: {
	// 		external_urls: {
	// 			spotify: "string";
	// 		};
	// 		followers: {
	// 			href: "string";
	// 			total: 0;
	// 		};
	// 		href: "string";
	// 		id: "string";
	// 		type: "user";
	// 		uri: "string";
	// 		display_name: "string";
	// 	};

	// 	public: boolean;
	// 	snapshot_id: string;
	// 	tracks: { href: string; total: number };
	// 	type: string;
	// 	uri: string;
	// }[];
	artists: {
		external_urls: {
			spotify: string;
		};
		followers: {
			href: string;
			total: number;
		};
		genres: string[];
		href: string;
		id: string;
		images: [
			{
				url: string;
				height: number;
				width: number;
			}
		];
		name: string;
		popularity: number;
		type: "artist";
		uri: string;
	}[];
	albums: UserAlbums;
};
const UserLibrary = ({ artists, albums }: UserLibraryProps) => {
	return (
		<ContainerLibrary>
			{albums.items.map(({ album }, index) => (
				<LibraryItem key={album.id}>
					<Link to={`/me/album/${album.id}`}>
						<div>
							<img
								src={
									album.images[0]
										? album.images[0].url
										: "/icons/defaultCover.svg"
								}
							/>
						</div>
						<div>
							<div>{album.name}</div>
							<div>
								<span>{album.album_type}</span>
								<b>&nbsp; . &nbsp;</b>
								<span>
									{album.artists.map((artist) => (
										<p key={artist.id}>{artist.name}</p>
									))}
								</span>
							</div>
						</div>
					</Link>
				</LibraryItem>
				// <div key={album.id}>{album.id}</div>
			))}

			{/* <>
				{artists.map((artist, index) => (
					<LibraryItem key={artist.id}>
						<div>
							<img
								src={
									artist.images[0]
										? artist.images[0].url
										: "/icons/defaultCover.svg"
								}
							/>
						</div>
						<div>
							<div>{artist.name}</div>
							<div>
								<span>{artist.type}</span>
							</div>
						</div>
					</LibraryItem>
				))}
			</> */}

			{/* {playlists.map((playlist, index) => (
				<LibraryItem key={playlist.id}>
					<div>
						<img
							src={
								playlist.images[0]
									? playlist.images[0].url
									: "/icons/defaultCover.svg"
							}
						/>
					</div>
					<div>
						<div>{playlist.name}</div>
						<div>
							<span>{playlist.type}</span>
							<b> . </b>
							<span>{playlist.owner.display_name}</span>
						</div>
					</div>
				</LibraryItem>
			))} */}
		</ContainerLibrary>
	);
};

export default UserLibrary;
