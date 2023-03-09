import {
	IoBagHandleOutline,
	IoMenuOutline,
	IoHomeOutline,
	IoHeartOutline,
	IoGridOutline,
} from "react-icons/io5";

import {Button} from "@/components/atoms";

import "./styles.scss";

const MobileNavigation = () => {
	return (
		<div className="m-mobile-bottom-navigation">
			<Button className="action-btn">
				<IoMenuOutline className="icon" />
			</Button>
			<Button className="action-btn">
				<IoBagHandleOutline />
				<span className="count">0</span>
			</Button>
			<Button className="action-btn">
				<IoHomeOutline />
			</Button>
			<Button className="action-btn">
				<IoHeartOutline />
				<span className="count">0</span>
			</Button>
			<Button className="action-btn">
				<IoGridOutline />
			</Button>
		</div>
	);
};

export default MobileNavigation;
