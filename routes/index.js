import express from 'express';
const router = express.Router();

import userRoutes from './user.route.js';

const defaultRoute = [
  { path: '/users', route: userRoutes },
];

defaultRoute.forEach((link) => {
  router.use(link.path, link.route);
});

export default router;