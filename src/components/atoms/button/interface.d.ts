import {ReactNode} from "react";

export interface IButtonProps {
	children?: ReactNode;
	className?: string;
	icon?: ReactNode;
	rightIcon?: ReactNode;
	disabled?: boolean;
	loading?: boolean;
}
