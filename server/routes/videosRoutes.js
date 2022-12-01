import express from 'express';

import { restrictToOrg, restrictToUser } from '../controllers/authController.js';
import {
  getAllVideos,
  uploadVideoFiles,
  uploadVideo,
  getOneVideoDetails,
  streamVideo,
  accessVideo,
  getAllOrgVideos,
  hasAccessVideo,
} from '../controllers/videosController.js';

const router = express.Router();

router.route('/').get(getAllVideos).post(restrictToOrg, uploadVideoFiles, uploadVideo);
router.get('/org/:orgId', getAllOrgVideos);
router.get('/:videoId', getOneVideoDetails);
router.get('/stream/:videoId', streamVideo);
router.post('/access-video/:videoId', restrictToUser, accessVideo);
router.post('/has-access-to-video/:videoId', restrictToUser, hasAccessVideo);

export default router;
