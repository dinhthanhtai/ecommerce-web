import Link from "next/link";
import styles from "./styles.module.scss";
import {IAdProps} from "./interface";

const Ad: React.FC<IAdProps> = props => {
	const {to = ""} = props;
	return (
		<Link href={to}>
			<div className={styles.ad} />
		</Link>
	);
};

export default Ad;
