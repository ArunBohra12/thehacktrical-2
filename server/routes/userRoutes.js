import express from 'express';
import { restrictToUser } from '../controllers/authController.js';
import { getBuyCreditsCheckoutSession, getAllAccessedVideos } from '../controllers/userController.js';

const router = express.Router();

router.get('/getBuyCreditsCheckoutSession/:userId', restrictToUser, getBuyCreditsCheckoutSession);
router.get('/videos', restrictToUser, getAllAccessedVideos);

export default router;
