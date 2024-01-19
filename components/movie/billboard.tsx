import { getMovieById } from "@/data/movie";
import Image from "next/image";

const Billboard = async () => {
	const movie = await getMovieById(339403);
	const poster = `https://image.tmdb.org/t/p/original${movie?.poster_path}`;

	console.log(movie);
	return (
		<div className="h-[65vh] w-full flex justify-start items-center">
			<video
				poster={poster}
				className="w-full absolute top-0 left-0 h-[65vh] object-cover -z-10 brightness-[50%]"
			/>

			<div className="absolute w-[90%] lg:w-[40%] mx-auto">
				<h1 className="text-white text-4xl font-bold">{movie?.title}</h1>
				<p className="text-white text-lg mt-5 line-clamp-3">
					{movie?.description}
				</p>
			</div>
		</div>
	);
};

export default Billboard;
