/**
 * an array of accessible routes to public
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * an array of routes that are used for authentication
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * the prefix of api authentication routes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect after user is loggedIn
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
