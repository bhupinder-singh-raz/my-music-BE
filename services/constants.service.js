import dotenv from "dotenv";
dotenv.config();

export default class ConstantsService {
  static LOG_DIRECTORY_PATH = process.env.LOG_DIRECTORY_PATH;
  static PORT = Number(process.env.PORT) || 0;
  static HOST = process.env.HOST || "";
}
