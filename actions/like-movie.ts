"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";

export const addMovieToLiked = async (movie_id: number) => {
	const user = await currentUser();

	if (!user) {
		return {
			error: "You must be logged in to do that.",
		};
	}

	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return {
			error: "You must be logged in to do that.",
		};
	}

	await db.user.update({
		where: {
			id: user.id,
		},
		data: {
			likedMovies: {
				push: movie_id,
			},
		},
	});
};

export const removeMovieFromLiked = async (movie_id: number) => {
	const user = await currentUser();

	if (!user) {
		return {
			error: "You must be logged in to do that.",
		};
	}

	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return {
			error: "You must be logged in to do that.",
		};
	}

	await db.user.update({
		where: {
			id: user.id,
		},
		data: {
			likedMovies: {
				set: user.likedMovies.filter((id) => id !== movie_id),
			},
		},
	});
};
