import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { checkPathExists } from './fileSystem.js';

const createMulterStorage = (path, filePrefix) =>
  multer.diskStorage({
    destination: async (req, file, cb) => {
      const folderExists = await checkPathExists(path);
      if (!folderExists) {
        console.log("Folder you're trying to upload does not exist 🔥🔥");
        return cb(new Error('Unable to upload the file'));
      }

      cb(null, path);
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split('/')[1];
      const imageId = uuidv4();

      cb(null, `${filePrefix}-${imageId}-${Date.now()}.${extension}`);
    },
  });

const multerImageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) return cb(null, true);

  return cb(new Error('Please upload only images'), false);
};

export const multerImageUpload = (path, filePrefix = 'image') => {
  return multer({
    storage: createMulterStorage(path, filePrefix),
    fileFilter: multerImageFilter,
  });
};
