import { db } from "@/lib/db";

export const getMovieById = async (movie_id: number) => {
	try {
		const movie = await db.movie.findFirst({
			where: {
				movie_id,
			},
		});

		return movie;
	} catch {
		return null;
	}
};
