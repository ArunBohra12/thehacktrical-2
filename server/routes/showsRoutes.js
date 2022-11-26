import express from 'express';

import { createShow, getAllShows, getUpcomingShows, deleteShow } from '../controllers/showsControllers.js';

const router = express.Router();

router.get('/upcoming', getUpcomingShows);

router
  .route('/')
  .get(getAllShows)

  // need to restrict below route
  .post(createShow);

router.route('/:showId').delete(deleteShow);

export default router;
