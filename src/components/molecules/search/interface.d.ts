export interface ISearchProps {
	srcImage: StaticImageData;
	altImage: string;
	className?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
