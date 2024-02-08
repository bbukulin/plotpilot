"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const userBasedAPI = async () => {
	const user = await currentUser();

	const data = {
		user_id: user?.user_id,
	};

	fetch("http://127.0.0.1:5000/userBasedPrediction", {
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
					userBasedRecs: {
						set: recommendedMovies,
					},
				},
			});
		})
		.catch((error) => {
			console.error("There was a problem with the fetch operation:", error);
		});

	return {
		success: "User based recommendations have been updated.",
	};
};
