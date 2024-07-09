import { TagsList } from "../../../shared/ui/TagsList/TagsList";
import { Button } from "../../../shared/ui/Button/Button";

type SearchPanelType = {
	changeFilter: (newTag: string) => void;
	sortCards: () => void;
	tags: Array<string>;
};

export const SearchPanel = ({
	changeFilter,
	sortCards,
	tags,
}: SearchPanelType) => {
	return (
		<div className="flex flex-col bg-peach py-6 px-10">
			<div>
				<TagsList tags={tags} changeFilter={changeFilter} />
			</div>
			<div className="flex mt-6 justify-center flex-row flex-wrap gap-2">
				<Button text="Сначала новые" onClick={sortCards} />
				<Button text="Сначала старые" onClick={sortCards} />
			</div>
		</div>
	);
};
