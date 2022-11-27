import express from 'express';

import { restrictToUser } from '../controllers/authController.js';
import { createShowReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/:showId', restrictToUser, createShowReview);

export default router;
