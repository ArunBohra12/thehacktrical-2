import express from 'express';

import {
  createShow,
  getAllShows,
  getUpcomingShows,
  deleteShow,
  bookShowTicket,
} from '../controllers/showsControllers.js';
import { restrictToOrg, restrictToUser } from '../controllers/authController.js';
import { getAllShowReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/upcoming', getUpcomingShows);

router.route('/').get(getAllShows).post(restrictToOrg, createShow);

router.route('/:showId').delete(deleteShow);

router.get('/:showId/getReviews', getAllShowReviews);
router.post('/:showId/bookTicket', restrictToUser, bookShowTicket);

export default router;
