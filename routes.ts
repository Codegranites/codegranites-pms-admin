/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ['/'];

/**
 * An array of routes that are used for authentication
 * @type {string[]}
 */
export const authRoutes = [
  '/sign-in',
  '/sign-up',
  '/verify-email',
  '/forgot-password',
  '/reset-password'
];

/**
 * The prefix for API routes
 * An array of routes that are used for authentication
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/workspace';

/**
 * An array of routes that are accessible to the admin
 * These routes require authentication
 * @type {string[]}
 */
export const adminRoutes = [
  '/admin-dashboard',
  '/admin-client',
  '/admin-messages',
  '/admin-profile',
  '/admin-project',
  'admin-settings',
  '/admin-transactions',
  'admin-projects'
];

/**
 * An array of routes that are accessible to the client
 * These routes require authentication
 * @type {string[]}
 */
export const clientRoutes = [
  '/dashboard',
  '/hisory',
  'messages',
  '/notifications',
  '/profile'
];
