"use client";

import { useEffect } from "react";
import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMovieStore } from "@/lib/store";

interface iWatchlistButtonProps {
	movie_id: number;
}

const WatchlistButton = ({ movie_id }: iWatchlistButtonProps) => {
	const watchlistedMovieIDs = useMovieStore((state) => [
		...state.watchlistedMovieIDs,
	]);
	const addToWatchlist = useMovieStore((state) => state.addToWatchlist);
	const removeFromWatchlist = useMovieStore(
		(state) => state.removeFromWatchlist
	);

	useEffect(() => {
		useMovieStore.persist.rehydrate();
	}, []);

	return (
		<>
			{watchlistedMovieIDs.includes(movie_id) ? (
				<Button
					size="sm"
					variant="outline"
					className="flex items-center gap-x-2 transition duration-500"
					onClick={() => removeFromWatchlist(movie_id)}>
					<Bookmark
						width="17"
						height="17"
						className="text-emerald-500 fill-emerald-500"
					/>
					Watchlist
				</Button>
			) : (
				<Button
					size="sm"
					variant="outline"
					className="flex items-center gap-x-2"
					onClick={() => addToWatchlist(movie_id)}>
					<Bookmark width="17" height="17" />
					Watchlist
				</Button>
			)}
		</>
	);
};

export default WatchlistButton;
