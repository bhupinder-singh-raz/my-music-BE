import express from 'express';
const app = express();
import ErrorHandler from "./middleware/errorHandler.js";
import ConstantsService from './services/constants.service.js';
import LoggerService from './services/logger.service.js';
import HTTP_Request_Logger from './middleware/httpRequestLogger.js';
import router from './routes/index.js';
import cors from 'cors';

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));

app.use(cors({
  origin: function (origin, callback) {
    callback(null, true)
  },
  credentials: true
}));

app.use(HTTP_Request_Logger());

app.use("/", router);

app.use(ErrorHandler);

app.listen(
  ConstantsService.PORT,
  ConstantsService.HOST,
  () => {
    LoggerService.logInfo(
      `Server running at http://${ConstantsService.HOST}:${ConstantsService.PORT}/`
    );
  }
);
