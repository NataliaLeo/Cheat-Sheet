import React, { MouseEventHandler, useState } from "react";
import { Button } from "../Button/Button";

export const AllTagsList: Array<string> = ["JS", "CSS", "React"];

type TagType = {
	tag: string;
	onClick: (newTag: string) => void;
};

export const TagButton = ({ tag, onClick }: TagType) => {
	const [active, setActive] = useState(false);
	const onToggle = () => {
		setActive((prev) => (prev = !prev));
	};
	return (
		<Button
			text={tag}
			onClick={() => {
				onClick(tag);
				onToggle();
			}}
		/>
	);
};
