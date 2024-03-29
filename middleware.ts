import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	apiMoviePrefix,
	apiWatchlistPrefix,
	authRoutes,
	publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isApiMovieRoute = nextUrl.pathname.startsWith(apiMoviePrefix);
	const isApiWatchlistRoute = nextUrl.pathname.startsWith(apiWatchlistPrefix);

	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute || isApiMovieRoute || isApiWatchlistRoute) {
		return null;
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return null;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/auth/login", nextUrl));
	}

	/*
	if (
		isLoggedIn &&
		!isOnboardingCompleted &&
		!isPublicRoute &&
		!nextUrl.pathname.startsWith("/onboarding")
	) {
		return Response.redirect(new URL("/onboarding", nextUrl));
	}
     */

	return null;
});

// Paths used to invoke the middleware
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
