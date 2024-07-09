import React, { useState } from "react";

export type TagType = {
	tag: string;
};

export const AllTagsList: Array<string> = ["JS", "CSS", "React"];

export const TagLabel = ({ tag }: TagType): React.JSX.Element => {
	return (
		<span className="rounded-lg bg-peach/50 px-2 min-w-12 text-center whitespace-nowrap">
			{tag}
		</span>
	);
};
