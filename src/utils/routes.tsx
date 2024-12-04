import BaseLayout from "#components/Layouts/BaseLayout";
import Homepage from "#pages/Homepage";

export const routes = [
	{
		id: 1,
		name: "homepage",
		title: "DeepMovies",
		path: "/",
		load: (
			<BaseLayout>
				<Homepage />
			</BaseLayout>
		),
	},
];
