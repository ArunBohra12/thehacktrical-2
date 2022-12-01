import express from 'express';

import {
  createShow,
  getAllShows,
  getUpcomingShows,
  deleteShow,
  bookShowTicket,
  likeAShow,
  uploadShowImage,
  getAllOrgShows,
  getOneShow,
} from '../controllers/showsControllers.js';
import { restrictToOrg, restrictToUser } from '../controllers/authController.js';
import { getAllShowReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/upcoming', getUpcomingShows);

router.get('/org/:orgId', getAllOrgShows);

router.route('/').get(getAllShows).post(restrictToOrg, uploadShowImage, createShow);

router.route('/:showId').get(getOneShow).delete(deleteShow);
router.get('/:showId/getReviews', getAllShowReviews);

router.patch('/like/:showId', restrictToUser, likeAShow);
router.post('/:showId/book-ticket', restrictToUser, bookShowTicket);

export default router;
