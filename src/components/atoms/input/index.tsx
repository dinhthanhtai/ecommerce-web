import {IInputProps} from "./interface";
import classNames from "classnames";

import "./style.scss";

const Input: React.FC<IInputProps> = props => {
	const {className, suffix = null, name, placeholder, ...rest} = props;

	const classInput = classNames("a-input", className);

	return (
		<div className={classInput}>
			<input
				className="a-input-main"
				id={name}
				placeholder={placeholder}
				{...rest}
			/>
			{suffix && (
				<label htmlFor={name} className="a-input-suffix">
					{suffix}
				</label>
			)}
		</div>
	);
};

export default Input;
