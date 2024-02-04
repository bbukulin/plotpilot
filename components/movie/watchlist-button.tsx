"use client";

import { useEffect } from "react";
import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMovieStore } from "@/lib/store";

interface iWatchlistButtonProps {
	movie_id: number;
	label?: boolean;
}

const WatchlistButton = ({
	movie_id,
	label = false,
}: iWatchlistButtonProps) => {
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

	console.log("WATCHLIST", watchlistedMovieIDs);

	return (
		<>
			{watchlistedMovieIDs.includes(movie_id) ? (
				<Button
					size="sm"
					variant="outline"
					className="flex items-center gap-x-2"
					onClick={() => removeFromWatchlist(movie_id)}>
					<Bookmark width="16" height="16" className="text-red-500" />
				</Button>
			) : (
				<Button
					size="sm"
					variant="outline"
					className="flex items-center gap-x-2"
					onClick={() => addToWatchlist(movie_id)}>
					<Bookmark width="16" height="16" />
				</Button>
			)}
		</>
	);
};

export default WatchlistButton;
