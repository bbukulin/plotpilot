"use client";

import { useEffect } from "react";
import { ThumbsDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMovieStore } from "@/lib/store";

interface iDislikeButtonProps {
	movie_id: number;
}

const DislikeButton = ({ movie_id }: iDislikeButtonProps) => {
	const dislikedMovieIDs = useMovieStore((state) => [
		...state.dislikedMovieIDs,
	]);
	const addToDisliked = useMovieStore((state) => state.addToDisliked);
	const removeFromDisliked = useMovieStore((state) => state.removeFromDisliked);

	useEffect(() => {
		useMovieStore.persist.rehydrate();
	}, []);

	console.log("DISLIKED", dislikedMovieIDs);

	return (
		<>
			{dislikedMovieIDs.includes(movie_id) ? (
				<Button
					size="sm"
					variant="outline"
					className="bg-red-800/20 transition duration-500 border-red-700"
					onClick={() => removeFromDisliked(movie_id)}>
					<ThumbsDown width="16" height="16" className="text-red-500" />
				</Button>
			) : (
				<Button
					size="sm"
					variant="outline"
					onClick={() => addToDisliked(movie_id)}>
					<ThumbsDown width="16" height="16" />
				</Button>
			)}
		</>
	);
};

export default DislikeButton;
