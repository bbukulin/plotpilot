/* eslint-disable @next/next/no-img-element */
"use client";

import { Key } from "react";
import { ChevronRight } from "lucide-react";

import useBillboard from "@/hooks/use-billboard";
import useMoviePoster from "@/hooks/use-movie-poster";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import YearDisplay from "@/lib/yeardisplay";
import GenreBadge from "@/components/movie/genre-badge";
import ScoreBadge from "@/components/movie/score-badge";
import WatchlistButton from "@/components/movie/watchlist-button";
import { useRouter } from "next/navigation";

const Billboard = () => {
	const { data: movie, isLoading } = useBillboard();
	const { data: moviePoster } = useMoviePoster(movie?.movie_id);

	const router = useRouter();
	const onClick = () => {
		router.push(`/movie/${movie?.movie_id}`);
	};

	return (
		<div className="relative h-[75vh] w-full flex justify-start items-center overflow-hidden">
			<div
				className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 blur-md"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original${moviePoster?.posters[0].file_path})`,
					filter: "brightness(70%) blur(3px)",
				}}
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black from-20% to-transparent" />
			<div className="z-10 w-full px-4 sm:px-6 lg:px-16 flex items-center justify-between">
				<div className="space-y-4 w-[50%]">
					<div className="space-x-1">
						{movie?.genres.map(
							(genre: string, index: Key | null | undefined) => (
								<GenreBadge key={index} text={genre} />
							)
						)}
					</div>

					<h1 className="text-white text-4xl font-bold">{movie?.title}</h1>

					<div className="space-y-2">
						<div className="flex flex-row items-center gap-x-2">
							<ScoreBadge score={movie?.weighted_rating} />
							<span>•</span>
							<p className="text-md">{YearDisplay(movie?.release_date)}</p>
							<span>•</span>
							<p className="text-md">{movie?.runtime} min</p>
						</div>
						<p className="capitalize text-gray-500">
							{movie?.keywords.join(" • ")}
						</p>
					</div>

					<p className="text-white text-xl mt-5 line-clamp-4">
						{movie?.description}
					</p>

					<div className="flex flex-row items-center gap-x-2 pt-5">
						<Button variant="outline" size="sm" onClick={onClick}>
							More Details
						</Button>

						<WatchlistButton movie_id={movie?.movie_id} label />
					</div>
				</div>
				<Image
					width={400}
					height={600}
					src={`https://image.tmdb.org/t/p/original${moviePoster?.posters[0]?.file_path}`}
					alt={movie?.title}
					className="block rounded-lg border-2 border-white/10"
				/>
			</div>
		</div>
	);
};

export default Billboard;
