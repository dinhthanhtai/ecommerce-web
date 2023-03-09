"use client";

import React from "react";
import {Button, Input, Link} from "@/components/atoms";
import Image from "next/image";
import {FaSistrix} from "react-icons/fa";
import classNames from "classnames";

import {ISearchProps} from "./interface";

import "./styles.scss";

const Search: React.FC<ISearchProps> = props => {
	const {
		className,
		srcImage = "",
		value,
		onChange,
		altImage,
		placeholder,
	} = props;

	const classSearch = classNames("m-search", className);

	return (
		<div className={classSearch}>
			<Link to="">
				<Image src={srcImage} alt={altImage} width={200} height={56} />
			</Link>

			<Input
				value={value}
				type="search"
				name="search"
				className="m-search-field"
				placeholder={placeholder}
				onChange={onChange}
				suffix={<FaSistrix />}
			/>
		</div>
	);
};

export default Search;
