// No auth needed to hit these routes
export const publicRoutes = ["/", "/auth/new-verification"];

// Auth explicit routes
export const authRoutes = [
	"/auth/login",
	"/auth/register",
	"/auth/error",
	"/auth/reset",
	"/auth/new-password",
];
export const apiAuthPrefix = "/api/auth";
export const apiMoviePrefix = "/api/movie";
export const apiWatchlistPrefix = "/api/watchlist";

export const DEFAULT_LOGIN_REDIRECT = "/home";
export const DEFAULT_ONBOARDING_REDIRECT = "/home";
