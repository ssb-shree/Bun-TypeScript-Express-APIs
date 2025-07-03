import app from "./app";
import { connectDB } from "./utils/db";

import logger from "./utils/logger";

import config from "config";

const port = config.get<number>("port");

const startServer = async () => {
  const db = await connectDB();
  if (db) {
    app.listen(port, () => logger.info(`server is running at ${port}, DB connected to host ${db.connection.host}`));
  } else {
    logger.error(`shutting down the server due to DB connection failure`);
    process.exit(1);
  }

  console.log("hi");
};

startServer();
