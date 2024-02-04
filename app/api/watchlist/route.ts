import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const GET = async (req: Request, res: Response) => {
	try {
		const user = await currentUser();

		if (!user) {
			return {
				error: "You must be logged in to do that.",
			};
		}

		const watchlistMovies = await db.movie.findMany({
			where: {
				movie_id: {
					in: user?.watchlistMovies,
				},
			},
			select: {
				movie_id: true,
			},
		});

		return NextResponse.json(user.watchlistMovies, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
};

/*
export const GET = async (req: Request, res: Response) => {
	try {
		const user = await currentUser();

		if (!user) {
			return {
				error: "You must be logged in to do that.",
			};
		}

		const watchlistMovies = await db.movie.findMany({
			where: {
				movie_id: {
					in: user?.watchlistMovies,
				},
			},
			select: {
				movie_id: true,
			},
		});

		return NextResponse.json(watchlistMovies, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
};
*/
