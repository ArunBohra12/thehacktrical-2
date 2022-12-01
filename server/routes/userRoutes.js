import express from 'express';
import { restrictToUser } from '../controllers/authController.js';
import {
  getBuyCreditsCheckoutSession,
  getAllAccessedVideos,
  getAllBookedShows,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/getBuyCreditsCheckoutSession/:userId', restrictToUser, getBuyCreditsCheckoutSession);
router.get('/videos', restrictToUser, getAllAccessedVideos);
router.get('/shows', restrictToUser, getAllBookedShows);

export default router;
