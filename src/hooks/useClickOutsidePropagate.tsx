import { RefObject, useEffect } from "react";

const useOutsideClickPropagate = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	const handleClick = (e: any) => {
		// console.log("propagated");
		/** do stopPropagation in the click event on the ref element. */
		callback();
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
};

export default useOutsideClickPropagate;
