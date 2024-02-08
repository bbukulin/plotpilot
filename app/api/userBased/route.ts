import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { userBasedAPI } from "@/actions/user-based";

export const GET = async (req: Request, res: Response) => {
	try {
		await userBasedAPI();

		const user = await currentUser();

		if (!user) {
			return {
				error: "You must be logged in to do that.",
			};
		}

		const userBasedRecs = await db.movie.findMany({
			where: {
				movie_id: {
					in: user?.userBasedRecs,
				},
			},
		});

		return NextResponse.json(userBasedRecs, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
};
