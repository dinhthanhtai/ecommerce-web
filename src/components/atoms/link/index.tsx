import {default as NavLink} from "next/link";
import classNames from "classnames";

import {ILinkProps} from "./interface";

const Link: React.FC<ILinkProps> = props => {
	const {to: toURL, className, target = false, children} = props;

	const classLink = classNames("a-link", className);

	return (
		<NavLink href={toURL} passHref legacyBehavior>
			{target ? (
				<a className={classLink} target="_blank" rel="noreferrer noopener">
					{children}
				</a>
			) : (
				<a className={classLink}>{children}</a>
			)}
		</NavLink>
	);
};

export default Link;
