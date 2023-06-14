export function msToMin(ms: number) {
	const min = ms / (1000 * 60);
	const minSplit = JSON.stringify(min).split(".");
	const minDecimalTwo = minSplit[1].slice(0, 2);
	const inMinutes = minSplit[0] + "." + minDecimalTwo;
	return inMinutes;
}
