const useLocalStorage = (storageKey: string, fallbackState: string) => {
	const [value, setValue] = React.useState(
		localStorage.getItem(storageKey) ?? fallbackState
	);

	React.useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(value));
	}, [value, storageKey]);

	return [value, setValue];
};
