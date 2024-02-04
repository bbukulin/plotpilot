"use client";

import { useEffect } from "react";
import { ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMovieStore } from "@/lib/store";

interface iLikeButtonProps {
	movie_id: number;
}

const LikeButton = ({ movie_id }: iLikeButtonProps) => {
	const likedMovieIDs = useMovieStore((state) => [...state.likedMovieIDs]);
	const addToLiked = useMovieStore((state) => state.addToLiked);
	const removeFromLiked = useMovieStore((state) => state.removeFromLiked);

	useEffect(() => {
		useMovieStore.persist.rehydrate();
	}, []);

	console.log("LIKED", likedMovieIDs);

	return (
		<>
			{likedMovieIDs.includes(movie_id) ? (
				<Button
					size="sm"
					variant="outline"
					onClick={() => removeFromLiked(movie_id)}>
					<ThumbsUp width="16" height="16" className="text-red-500" />
				</Button>
			) : (
				<Button
					size="sm"
					variant="outline"
					onClick={() => addToLiked(movie_id)}>
					<ThumbsUp width="16" height="16" />
				</Button>
			)}
		</>
	);
};

export default LikeButton;
