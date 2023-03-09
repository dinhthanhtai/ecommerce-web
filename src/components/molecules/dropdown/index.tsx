"use client";

import React, {useState} from "react";
import {IDropdownProps} from "./interface";

const Dropdown: React.FC<IDropdownProps> = props => {
	let {options = [], defaultValue = "", onChange} = props;

	const [selectedItem, setSelectedItem] = useState();

	options = ["taidinh", "hong hanh"];

	return (
		<div className="m-dropdown">
			<div className="m-dropdown-header">{selectedItem}</div>
			<ul className="m-dropdown-menu">
				{options.map((el, idx) => {
					return (
						<div key={idx} onClick={() => setSelectedItem(el)}>
							{el}
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
