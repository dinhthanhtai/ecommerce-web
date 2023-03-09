import {isValidElement} from "react";
import {ClipLoader} from "react-spinners";
import {IButtonProps} from "./interface";
import classNames from "classnames";

import "./styles.scss";

const Button: React.FC<IButtonProps> = props => {
	let {children, icon, className, rightIcon, loading, ...rest} = props;

	if (!isValidElement(icon)) icon = null;
	if (!isValidElement(rightIcon)) rightIcon = null;

	const buttonClass = classNames("a-button", className);

	return (
		<button className={buttonClass} {...rest}>
			{loading ? <ClipLoader /> : icon}
			{children}
			{rightIcon}
		</button>
	);
};

export default Button;
