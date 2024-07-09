import { TagLabel } from "../../../shared/ui/TagLabel/TagLabel";

export type CheatCardType = {
	title: string;
	tags: Array<string>;
	content: string;
	date: Date;
};

export const CheatCard = ({ title, tags, content, date }: CheatCardType) => {
	return (
		<div className="p-4 border border-peach rounded-lg basis-96 flex-auto relative">
			<h1 className="text-2xl font-bold mb-2 line-clamp-2 min-h-16">{title}</h1>
			<div className="flex gap-1 flex-wrap">
				{tags.map((el) => (
					<TagLabel key={el} tag={el} />
				))}
			</div>
			<p className="mt-2 mb-8 break-all">
				<a href={content} target="_blank">
					{content}
				</a>
			</p>
			<p className="absolute bottom-4 right-4 text-gray">
				{date.toLocaleDateString("en-GB")}
			</p>
		</div>
	);
};
