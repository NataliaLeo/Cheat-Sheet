import { MouseEventHandler } from "react";
import { TagButton } from "../TagButton/TagButton";

export type TagsListType = {
	tags: Array<string>;
	changeFilter: (newTag: string) => void;
};

export const TagsList = ({ tags, changeFilter }: TagsListType) => {
	tags = ["All", ...tags];
	return (
		<div className="flex gap-2 flex-wrap justify-center">
			{tags.map((el) => (
				<TagButton tag={el} key={el} onClick={changeFilter} />
			))}
		</div>
	);
};
