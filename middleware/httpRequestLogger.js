import morgan from "morgan";
import LoggerService from "../services/logger.service.js";

export default function HTTP_Request_Logger() {
  return morgan("dev", {
    stream: {
      write: (message) => LoggerService.logInfo(message),
    },
  });
}
