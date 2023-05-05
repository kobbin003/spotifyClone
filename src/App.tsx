import { useEffect, useState } from "react";
// import "./App.css";
import { LoggedInAppLayout, LoggedOutAppLayout } from "./App.style";
import LoggedInPage from "./components/pages/LoggedInPage";
import LoggedOutPage from "./components/pages/LoggedOutPage";
function App() {
	const [code, setCode] = useState<string>();
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const code = urlSearchParams.get("code");
		if (typeof code === "string") {
			setCode(code);
		}
		console.log("code", code);
	}, []);
	return (
		<>
			{code ? (
				<LoggedInAppLayout>
					<LoggedInPage></LoggedInPage>
				</LoggedInAppLayout>
			) : (
				<LoggedOutAppLayout>
					<LoggedOutPage></LoggedOutPage>
				</LoggedOutAppLayout>
			)}
			{/* <Trial></Trial> */}
		</>
	);
}

export default App;
