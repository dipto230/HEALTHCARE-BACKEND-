import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    const log = `[${new Date().toISOString()}] ${req.method} ${
      req.originalUrl
    } ${res.statusCode} - ${duration}ms - ${req.ip}\n`;

  
    const logDir = path.join(process.cwd(), "logs");
    const logFile = path.join(logDir, "requests.log");

   
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    // ✍️ append log to file
    fs.appendFileSync(logFile, log);

    // also show in console
    console.log(log);
  });

  next();
};