import LoggerService from "../services/logger.service.js";

export default function ErrorHandle(err, req, res, next) {
  LoggerService.logError(`ERROR HANDLER || METHOD ${req.method} || ROUTE ${req.url} || ERROR ${err.message}`);
  LoggerService.logError(err.stack);
  LoggerService.logError(err.message);
  res.status(500).send(err.message);
}
