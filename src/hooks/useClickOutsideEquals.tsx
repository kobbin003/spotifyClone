import { RefObject, useEffect } from "react";
const useOutsideClickEquals = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	const handleClick = (e: any) => {
		if (ref.current && ref.current !== e.target) {
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

export default useOutsideClickEquals;
