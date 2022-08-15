import type { router } from '../routes.js';

export type RouteHandler = Parameters<typeof router.addHandler>[1];
