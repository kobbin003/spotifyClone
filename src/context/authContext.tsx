import { createContext } from "react";
type AuthContext = {
	handleOnClickLogin: (
		e: React.MouseEvent<HTMLAnchorElement>,
		isLoggedIn: boolean
	) => void;
};
export const authContext = createContext<AuthContext>({
	handleOnClickLogin: (
		e: React.MouseEvent<HTMLAnchorElement>,
		isLoggedIn: boolean
	): void => {},
});
