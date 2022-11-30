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
} from '../controllers/videosController.js';

const router = express.Router();

router.route('/').get(getAllVideos).post(restrictToOrg, uploadVideoFiles, uploadVideo);
router.get('/org/:orgId', getAllOrgVideos);
router.get('/:videoId', getOneVideoDetails);
router.get('/stream/:videoId', streamVideo);
router.post('/accessVideo/:videoId', restrictToUser, accessVideo);

export default router;
