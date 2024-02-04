"use client";

import Billboard from "@/components/movie/billboard";
import GenreList from "@/components/movie/genre-list";
import MovieList from "@/components/movie/movie-list";
import useMovieList from "@/hooks/use-movie-list";

const Home = () => {
	const { data, error } = useMovieList("Action");

	return (
		<div>
			<div className="space-y-4">
				<Billboard />
				<div className="px-16 space-y-4">
					<MovieList data={data} listTitle="Action picks" />
					<MovieList data={data} listTitle="Thriller picks" />
				</div>
			</div>
		</div>
	);
};

export default Home;
