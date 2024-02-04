import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
	addMovieToWatchlist,
	removeMovieFromWatchlist,
} from "@/actions/watchlist";
import {
	addMovieToDisliked,
	removeMovieFromDisliked,
} from "@/actions/dislike-movie";
import { addMovieToLiked, removeMovieFromLiked } from "@/actions/like-movie";

import useWatchlist from "@/hooks/use-watchlist";
import useLikedMovies from "@/hooks/use-liked";
import useDislikedMovies from "@/hooks/use-disliked";

export type State = {
	watchlistedMovieIDs: number[];

	likedMovieIDs: number[];
	dislikedMovieIDs: number[];
};

export type Actions = {
	addToWatchlist: (movie_id: number) => void;
	removeFromWatchlist: (movie_id: number) => void;

	addToLiked: (movie_id: number) => void;
	removeFromLiked: (movie_id: number) => void;

	addToDisliked: (movie_id: number) => void;
	removeFromDisliked: (movie_id: number) => void;
};

export const useMovieStore = create<State & Actions>()(
	persist(
		(set) => ({
			watchlistedMovieIDs: [],
			likedMovieIDs: [],
			dislikedMovieIDs: [],

			fetch: async () => {
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const { data: watchlisted } = await useWatchlist();
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const { data: liked } = await useLikedMovies();
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const { data: disliked } = await useDislikedMovies();
				set({ watchlistedMovieIDs: watchlisted });
				set({ likedMovieIDs: liked });
				set({ dislikedMovieIDs: disliked });
			},

			addToWatchlist: (id: number) => {
				set((state) => ({
					watchlistedMovieIDs: [...state.watchlistedMovieIDs, id],
				}));
				addMovieToWatchlist(id);
			},

			removeFromWatchlist: (id: number) => {
				set((state) => ({
					watchlistedMovieIDs: state.watchlistedMovieIDs.filter(
						(movie_id) => movie_id !== id
					),
				}));
				removeMovieFromWatchlist(id);
			},

			addToLiked: (id: number) => {
				set((state) => ({
					likedMovieIDs: [...state.likedMovieIDs, id],
				}));
				addMovieToLiked(id);
			},

			removeFromLiked: (id: number) => {
				set((state) => ({
					likedMovieIDs: state.likedMovieIDs.filter(
						(movie_id) => movie_id !== id
					),
				}));
				removeMovieFromLiked(id);
			},

			addToDisliked: (id: number) => {
				set((state) => ({
					dislikedMovieIDs: [...state.dislikedMovieIDs, id],
				}));
				addMovieToDisliked(id);
			},

			removeFromDisliked: (id: number) => {
				set((state) => ({
					dislikedMovieIDs: state.dislikedMovieIDs.filter(
						(movie_id) => movie_id !== id
					),
				}));
				removeMovieFromDisliked(id);
			},
		}),
		{ name: "movie-store", skipHydration: true }
	)
);
