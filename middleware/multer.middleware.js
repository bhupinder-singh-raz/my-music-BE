import multer from 'multer';
import LoggerService from './../services/logger.service.js';

const storage = multer.memoryStorage();

const upload = multer(
  {
    storage,
    limits: {
      fieldSize: 2000 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      LoggerService.logInfo(`multer file filter`);
      LoggerService.logInfo(`multer file ${JSON.stringify(file || {})}`);

      // To accept the file pass `true`, like so:
      cb(null, true)
    }
  }
);

export default upload;