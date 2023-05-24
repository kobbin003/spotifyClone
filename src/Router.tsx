import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import LoggedOutLayout from "./layout/LoggedOutLayout";
import LoggedInLayout from "./layout/LoggedInLayout";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoggedOutLayout />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "search",
				element: <Search />,
			},
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
			},
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "*",
				element: <div>NO MATCH!!!</div>,
			},
		],
	},
]);
