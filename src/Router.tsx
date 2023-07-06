import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
// import Search from "./pages/search/Search";
import LoggedOutLayout from "./layout/LoggedOutLayout";
import LoggedInLayout from "./layout/LoggedInLayout";

// import Artist from "./pages/search/pages/artist/Artist";
// import Albums from "./pages/search/pages/album/Album";
// import Track from "./pages/search/pages/track/Track";
// import Playlist from "./pages/search/pages/playlist/Playlist";

import { Suspense, lazy } from "react";
import Artist from "./pages/artist:id/Artist";
import Callback from "./layout/Callback";
const Search = lazy(() => import("./pages/search/Search"));
const Artists = lazy(() => import("./pages/search/pages/artists/Artists"));
const Albums = lazy(() => import("./pages/search/pages/albums/Albums"));
const AllAlbums = lazy(() => import("./pages/allAlbums/AllAlbums"));
const Album = lazy(() => import("./pages/album:id/Album"));
const Track = lazy(() => import("./pages/search/pages/track/Track"));
const Playlist = lazy(() => import("./pages/search/pages/playlist/Playlist"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoggedOutLayout />,
		errorElement: <p>Error</p>,
	},
	{
		path: "/callback",
		element: <Callback />,
		errorElement: <p>Error</p>,
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
				element: (
					<Suspense fallback={<h4>Loading...</h4>}>
						<Search />
					</Suspense>
				),
				children: [
					// { index: true, element: <Search /> },
					// 	// "artist", "track", "album", "playlist"
					{
						path: "artist",
						element: (
							<Suspense fallback={<h4>Loading...</h4>}>
								<Artists />
							</Suspense>
						),
					},
					{
						path: "album",
						element: (
							<Suspense fallback={<h4>Loading...</h4>}>
								<Albums />
							</Suspense>
						),
					},
					{
						path: "track",
						element: (
							<Suspense fallback={<h4>Loading...</h4>}>
								<Track />
							</Suspense>
						),
					},
					{
						path: "playlist",
						element: (
							<Suspense fallback={<h4>Loading...</h4>}>
								<Playlist />
							</Suspense>
						),
					},
				],
			},
			{
				path: "album/:id",
				element: (
					<Suspense fallback={<h4>Loading...</h4>}>
						<Album />
					</Suspense>
				),
			},
			{
				path: "artist/:id",
				element: <Artist />,
			},
			{
				path: "artist/:id/allAlbums",
				element: (
					<Suspense fallback={<h4>Loading...</h4>}>
						<AllAlbums />
					</Suspense>
				),
			},
			{
				path: "*",
				element: <div>NO MATCH!!!</div>,
			},
		],
	},
]);
