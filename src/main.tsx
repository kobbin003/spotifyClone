import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import { GlobalStyle } from "./index.style";
import { router } from "./Router";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<>
		<RouterProvider router={router} />
		<GlobalStyle />
		<ErrorBoundary fallback={<div>Error</div>}></ErrorBoundary>
		{/* <App /> */}
		{/* </React.StrictMode> */}
	</>
);
