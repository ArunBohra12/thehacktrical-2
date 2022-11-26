import express from 'express';

import { restrictToOrg } from '../controllers/authController.js';
import {
  getAllVideos,
  uploadVideoFiles,
  uploadVideo,
  getOneVideoDetails,
  // streamVideo,
} from '../controllers/videosController.js';

const router = express.Router();

router.route('/').get(getAllVideos).post(restrictToOrg, uploadVideoFiles, uploadVideo);
router.get(':videoId', getOneVideoDetails);
// router.get('/stream/:videoId', streamVideo);

export default router;
