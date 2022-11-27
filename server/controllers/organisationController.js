import Organisation from '../models/orgModel.js';
import catchAsync from './catchAsync.js';
import { multerImageUpload } from '../utils/multer.js';
import User from '../models/userModel.js';

export const uploadOrgImage = multerImageUpload('public/uploads/images', 'org-img').single('photo');

export const updateOrgInfo = catchAsync(async (req, res) => {
  const { orgVision } = req.body;
  const photo = `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}`;

  const orgData = await Organisation.findByIdAndUpdate(
    req.params.orgId,
    {
      photo,
      orgVision,
    },
    { new: true }
  );

  res.json({
    status: 'success',
    data: orgData,
  });
});


export const getUser = catchAsync(async (req,res) => {
  const id = req.params.id;

  const user = await User.findById(id).populate('accessedVideos')

  if (!user) {
    user = await Organisation.findById(id)
  }

  // user.populate('accessedVideos', '');

  res.json({
    status: 'success',
    user
  })
})