import { useState } from "react";

type ButtonType = {
	text: string;
	onClick?: any;
};

export const Button = ({ text, onClick }: ButtonType) => {
	const [active, setActive] = useState(false);
	const onToggle = () => {
		setActive((prev) => (prev = !prev));
	};
	return (
		<button
			onClick={onClick}
			className="rounded-lg bg-white px-2 min-w-16 mx-2 shadow-md hover:shadow-xl transition-all whitespace-nowrap"
		>
			{text}
		</button>
	);
};
