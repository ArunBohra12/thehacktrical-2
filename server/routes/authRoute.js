import express from 'express';

import * as authController from '../controllers/authController.js';
import * as userController from '../controllers/organisationController.js';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.get('/:id', userController.getUser)

// need to move below to its own organisation controller
router.patch(
  '/:orgId/orginfo',
  authController.restrictToOrg,
  userController.uploadOrgImage,
  userController.updateOrgInfo
);

export default router;
