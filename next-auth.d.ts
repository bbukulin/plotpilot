import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
	isOAuth: boolean;
	watchlistMovies: number[];
	likedMovies: number[];
	dislikedMovies: number[];
	contentBasedRecs: number[];
	userBasedRecs: number[];

	onboardingGenres: number[];
	onboardingKeywords: number[];
	onboardingCompleted: boolean;

	user_id: number;
};

declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}
