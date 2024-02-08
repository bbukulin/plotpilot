"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { OnboardingSchema } from "@/schemas";
import { DEFAULT_ONBOARDING_REDIRECT } from "@/routes";
import { currentUser } from "@/lib/auth";

export const onboarding = async (
	values: z.infer<typeof OnboardingSchema>,
	uncheckedMovieIds: number[]
) => {
	const user = await currentUser();
	const validatedFields = OnboardingSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: "Please select at least 5 movies",
		};
	}

	const { onboardingMovies } = validatedFields.data;

	const data = {
		liked_movie_ids: onboardingMovies,
		disliked_movie_ids: uncheckedMovieIds,
	};

	fetch("http://127.0.0.1:5000/contentBasedPrediction", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((recommendedMovies) => {
			return db.user.update({
				where: {
					id: user?.id,
				},
				data: {
					contentBasedRecs: {
						set: recommendedMovies,
					},
				},
			});
		})
		.catch((error) => {
			console.error("There was a problem with the fetch operation:", error);
		});

	await db.user.update({
		where: {
			id: user?.id,
		},
		data: {
			onboardingMovies: {
				push: onboardingMovies,
			},
			onboardingCompleted: true,
		},
	});

	return {
		success: "Onboarding movies added!",
	};
};
