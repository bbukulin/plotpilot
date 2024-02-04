/* eslint-disable @next/next/no-img-element */

"use client";

import { Key } from "react";
import Image from "next/image";

import GenreBadge from "@/components/movie/genre-badge";
import ScoreBadge from "@/components/movie/score-badge";
import WatchlistButton from "@/components/movie/watchlist-button";
import YearDisplay from "@/lib/yeardisplay";
import LikeButton from "@/components/movie/like-button";
import DislikeButton from "@/components/movie/dislike-button";

import useMovie from "@/hooks/use-movie";
import useMoviePoster from "@/hooks/use-movie-poster";

const MovieDetails = ({ params }: { params: { movie_id: number } }) => {
	const { data, isLoading } = useMovie(params.movie_id);
	const { data: moviePoster } = useMoviePoster(data?.movie_id);

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
						{data?.genres.map(
							(genre: string, index: Key | null | undefined) => (
								<GenreBadge key={index} text={genre} />
							)
						)}
					</div>

					<h1 className="text-white text-4xl font-bold">{data?.title}</h1>

					<div className="space-y-2">
						<div className="flex flex-row items-center gap-x-2">
							<ScoreBadge score={data?.weighted_rating} />
							<span>•</span>
							<p className="text-md">{YearDisplay(data?.release_date)}</p>
							<span>•</span>
							<p className="text-md">{data?.runtime} min</p>
						</div>
						<p className="capitalize text-gray-500">
							{data?.keywords.join(" • ")}
						</p>
					</div>

					<p className="text-white text-xl mt-5 line-clamp-4">
						{data?.description}
					</p>

					<div className="flex flex-row items-center gap-x-2 pt-5">
						<WatchlistButton movie_id={data?.movie_id} label />
						<LikeButton movie_id={data?.movie_id} />
						<DislikeButton movie_id={data?.movie_id} />
					</div>
				</div>
				<Image
					width={400}
					height={600}
					src={`https://image.tmdb.org/t/p/original${moviePoster?.posters[0]?.file_path}`}
					alt={data?.title}
					className="block rounded-lg border-2 border-white/10"
				/>
			</div>
		</div>
	);
};

export default MovieDetails;
