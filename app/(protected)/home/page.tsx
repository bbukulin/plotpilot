"use client";

import Billboard from "@/components/movie/billboard";
import GenreList from "@/components/movie/genre-list";
import MovieList from "@/components/movie/movie-list";
import useContentBased from "@/hooks/use-content-based";
import useUserBased from "@/hooks/use-user-based";

const Home = () => {
	const {
		data: contentBased,
		isLoading: contentLoading,
		error: contentError,
	} = useContentBased();
	const {
		data: userBased,
		isLoading: userLoading,
		error: userError,
	} = useUserBased();

	return (
		<div>
			<Billboard />
			<div className="px-16 space-y-4">
				<MovieList
					data={contentBased}
					listTitle="Content based recommendations"
				/>
				{userBased && (
					<MovieList data={userBased} listTitle="User based recommendations" />
				)}
			</div>
		</div>
	);
};

export default Home;
