import {Link} from "@/components/atoms";
import classNames from "classnames";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

import {ISocialListProps} from "./interface";

import "./styles.scss";

const SocialList: React.FC<ISocialListProps> = props => {
	const {className} = props;

	const classSocialProps = classNames("m-social", className);

	return (
		<ul className={classSocialProps}>
			<li>
				<Link className="m-social-link" target to={""}>
					<FaFacebook />
				</Link>
			</li>
			<li>
				<Link className="m-social-link" target to="">
					<FaTwitter />
				</Link>
			</li>
			<li>
				<Link className="m-social-link" target to="">
					<FaInstagram />
				</Link>
			</li>
			<li>
				<Link className="m-social-link" target to="">
					<FaLinkedin />
				</Link>
			</li>
		</ul>
	);
};

export default SocialList;
