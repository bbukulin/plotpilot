/* eslint-disable @next/next/no-img-element */

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "./movie-card";

interface iMovieListProps {
	data: Record<string, any>[];
	listTitle: string;
}

const MovieList = ({ data, listTitle }: iMovieListProps) => {
	return (
		<div>
			<p className="text-xl font-medium pb-1">{listTitle}</p>
			<Carousel>
				<CarouselContent>
					{data?.map((movie: Record<string, any>) => (
						<CarouselItem key={movie.id} className="basis-1/6">
							<MovieCard movie={movie} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default MovieList;
