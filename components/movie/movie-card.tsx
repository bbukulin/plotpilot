"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ScoreBadge from "./score-badge";
import useMoviePoster from "@/hooks/use-movie-poster";

interface iMovieCardProps {
	movie: Record<string, any>;
}

const MovieCard = ({ movie }: iMovieCardProps) => {
	const { data: moviePoster } = useMoviePoster(movie?.movie_id);

	const router = useRouter();
	const onClick = () => {
		router.push(`/movie/${movie.movie_id}`);
	};

	return (
		<div className="relative cursor-pointer" onClick={onClick}>
			<Image
				width={300}
				height={500}
				src={`https://image.tmdb.org/t/p/original${moviePoster?.posters[0]?.file_path}`}
				alt={movie.title}
				className="block w-full"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 from-10% to-transparent to-40%" />

			<div className="absolute bottom-0 left-0 w-full p-4 text-white space-y-2">
				<p className="text-lg font-medium line-clamp-1">{movie.title}</p>
				<div className="flex flex-row items-center gap-x-2 w-full">
					<ScoreBadge score={movie.weighted_rating} />
					<p className="text-gray-400 line-clamp-1">
						{movie?.genres.join(" • ")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
