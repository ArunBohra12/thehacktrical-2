import express from 'express';

import {
  createShow,
  getAllShows,
  getUpcomingShows,
  deleteShow,
  bookShowTicket,
  likeAShow,
  uploadShowImage,
} from '../controllers/showsControllers.js';
import { restrictToOrg, restrictToUser } from '../controllers/authController.js';
import { getAllShowReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/upcoming', getUpcomingShows);

router.route('/').get(getAllShows).post(restrictToOrg, uploadShowImage, createShow);

router.route('/:showId').delete(deleteShow);
router.get('/:showId/getReviews', getAllShowReviews);

router.patch('/like/:showId', restrictToUser, likeAShow);
router.post('/:showId/bookTicket', restrictToUser, bookShowTicket);

export default router;
