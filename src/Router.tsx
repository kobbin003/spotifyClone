import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import LoggedOutLayout from "./layout/LoggedOutLayout";
import LoggedInLayout from "./layout/LoggedInLayout";
import Artist from "./pages/search/pages/artist/Artist";
import Album from "./pages/search/pages/album/Album";
import Track from "./pages/search/pages/track/Track";
import Playlist from "./pages/search/pages/playlist/Playlist";
import HomeLoggedOut from "./pages/loggedOutHome/HomeLoggedOut";
import AlbumOut from "./pages/search/pages/album/AlbumOut";
import PlaylistOut from "./pages/search/pages/playlist/PlaylistOut";
import TrackOut from "./pages/search/pages/track/TrackOut";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoggedOutLayout />,
		children: [
			{
				index: true,
				element: <HomeLoggedOut />,
			},
			// {
			// 	path: "search",
			// 	element: <Search />,
			// 	children: [
			// 		// { index: true, element: <Search /> },
			// 		// 	// "artist", "track", "album", "playlist"
			// 		{
			// 			path: "artist",
			// 			element: <Artist />,
			// 		},
			// 		{ path: "album", element: <AlbumOut /> },
			// 		// { path: "album", element: <Album /> },
			// 		{ path: "track", element: <TrackOut /> },
			// 		{ path: "playlist", element: <PlaylistOut /> },
			// 	],
			// },
			{
				path: "*",
				element: <div>NO MATCH!!!</div>,
			},
		],
	},
	{
		path: "/me",
		element: <LoggedInLayout />,
		// errorElement: <div>error</div>,
		children: [
			{
				index: true,
				element: <Home />,
				// element: <DataFiller />,
			},
			{
				path: "search",
				element: <Search />,
				children: [
					// { index: true, element: <Search /> },
					// 	// "artist", "track", "album", "playlist"
					{ path: "artist", element: <Artist /> },
					{ path: "album", element: <Album /> },
					{ path: "track", element: <Track /> },
					{ path: "playlist", element: <Playlist /> },
				],
			},
			{
				path: "*",
				element: <div>NO MATCH!!!</div>,
			},
		],
	},
]);
