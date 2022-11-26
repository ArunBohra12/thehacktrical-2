import fs from 'fs';

export const checkPathExists = async path => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    console.log('🔥🔥 ERROR 🔥🔥 => Directory that does not exist, is being accessed');
    console.log(error);
    return false;
  }
};
