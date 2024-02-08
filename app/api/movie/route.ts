import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
	try {
		const movies = await db.movie.findMany({
			take: 10,
		});
		return NextResponse.json(movies, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
};
