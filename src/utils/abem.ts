const abemClasses = (
	rootClass: string,
	...modifiers: (string | false | undefined)[]
): string => {
	return [
		rootClass.trim(),
		modifiers
			.filter(el => typeof el === "string" && el.trim() !== "")
			.map(el => `-${el}`)
			.join(" "),
	].join(" ");
};

export default abemClasses;
