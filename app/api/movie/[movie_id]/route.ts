import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
	req: Request,
	{ params }: { params: { movie_id: number } }
) => {
	const movie_id = Number(params.movie_id);

	try {
		const movie = await db.movie.findFirst({
			where: {
				movie_id: {
					equals: movie_id,
				},
			},
		});
		return NextResponse.json(movie, { status: 200 });
	} catch {
		return NextResponse.json({ message: "Not Found" }, { status: 404 });
	}
};
 