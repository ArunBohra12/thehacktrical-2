import express from 'express';
import { restrictToUser } from '../controllers/authController.js';
import { getBuyCreditsCheckoutSession } from '../controllers/userController.js';

const router = express.Router();

router.get('/getBuyCreditsCheckoutSession/:userId', restrictToUser, getBuyCreditsCheckoutSession);

export default router;
