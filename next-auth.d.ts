import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
	isOAuth: boolean;
	watchlistMovies: number[];
	likedMovies: number[];
	dislikedMovies: number[];
};

declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}
