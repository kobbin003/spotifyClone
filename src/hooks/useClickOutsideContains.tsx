import { RefObject, useEffect } from "react";

const useOutsideClickContains = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	const handleClick = (e: any) => {
		console.log(ref.current, e.target);
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
};
export default useOutsideClickContains;
