import { useState } from "react";
import { SearchPanel } from "../widgets/ui/SearchPanel/SearchPanel";
import { CheatCard, CheatCardType } from "../entities/ui/CheatCard/CheatCard";
import "../style.css";

const cards = [
	{
		id: 1,
		title: "Настройка tailwind в связке с react-ts-webpack",
		tags: ["JS", "React"],
		content:
			"https://dev.to/ynwd/how-to-setup-react-tailwind-webpack-and-typescript-in-a-monorepo-3ogm",
		date: new Date(2024, 6, 10),
	},
	{
		id: 2,
		title: "Статьи почитать",
		tags: ["React", "Общее развитие"],
		content: "https://tproger.ru/tag/web",
		date: new Date(2024, 6, 5),
	},
	{
		id: 3,
		title: "Анимация горизонтальный скролл блока GSAP",
		tags: ["GSAP"],
		content: "https://codepen.io/designcourse/pen/gOjZKOO",
		date: new Date(2024, 6, 4),
	},
	{
		id: 4,
		title: "Учебник Яндекса по алгоритмизации",
		tags: ["Алгоритмы", "Общее развитие"],
		content:
			"https://education.yandex.ru/handbook/algorithms/article/dinamicheskoe-programmirovanie",
		date: new Date(2024, 6, 12),
	},
	{
		id: 5,
		title: "Список вопросов по CSS",
		tags: ["CSS", "Общее развитие"],
		content:
			"https://github.com/AndrewMosh/css_interview_cheatsheet?tab=readme-ov-file",
		date: new Date(2024, 6, 14),
	},
	{
		id: 6,
		title: "Анимация конверт GSAP",
		tags: ["GSAP"],
		content: "https://codepen.io/jakegilesphillips/pen/MveNLe",
		date: new Date(2024, 6, 15),
	},
	{
		id: 7,
		title: "Дока Статьи",
		tags: ["Общее развитие"],
		content: "https://doka.guide/",
		date: new Date(2024, 6, 12),
	},
];

const tagsForSearch: Array<string> = [];
cards.forEach((el) =>
	el.tags.forEach((tag) => {
		if (!tagsForSearch.includes(tag)) {
			tagsForSearch.push(tag);
		}
	})
);
console.log(tagsForSearch);

const App = () => {
	const [tagsFilter, setTagsFilter] = useState<string>("All");
	const [cardsSorter, setCardsSorter] = useState<string>("lastFirst");
	const changeFilter = (newTag: string) => {
		setTagsFilter(newTag);
	};

	const sortCards = () => {
		setCardsSorter(cardsSorter === "lastFirst" ? "firstFirst" : "lastFirst");
	};

	const filteredCards =
		tagsFilter == "All"
			? cards
			: cards.filter((el) => el.tags.includes(tagsFilter));

	const sortedCards =
		cardsSorter == "lastFirst"
			? cards.sort(function (a, b) {
					if (a.date > b.date) {
						return 1;
					}
					if (a.date < b.date) {
						return -1;
					}
					return 0;
			  })
			: cards.sort(function (a, b) {
					if (a.date > b.date) {
						return -1;
					}
					if (a.date < b.date) {
						return 1;
					}
					return 0;
			  });

	return (
		<div>
			{/* <SettingsPanel /> */}
			<SearchPanel
				tags={tagsForSearch}
				changeFilter={changeFilter}
				sortCards={sortCards}
			/>
			<div className="flex mx-10 my-8 gap-8 flex-wrap">
				{filteredCards.map((el) => (
					<CheatCard
						key={el.id}
						title={el.title}
						tags={el.tags}
						content={el.content}
						date={el.date}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
