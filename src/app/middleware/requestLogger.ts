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

    const logData = {
      time: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      userAgent: req.headers["user-agent"],

      // 🔥 extra details
      query: req.query,
      params: req.params,

      // ⚠️ be careful with sensitive data
      body:
        req.method === "POST" || req.method === "PUT"
          ? sanitizeBody(req.body)
          : undefined,

      headers: {
        authorization: req.headers.authorization ? "Bearer ***" : undefined,
        contentType: req.headers["content-type"],
      },
    };

    const logString = JSON.stringify(logData, null, 2) + "\n";

    const logDir = path.join(process.cwd(), "logs");
    const logFile = path.join(logDir, "requests.log");

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    fs.appendFileSync(logFile, logString);

    console.log(logData); // console version
  });

  next();
};

// 🔐 remove sensitive fields
const sanitizeBody = (body: any) => {
  if (!body) return body;

  const cloned = { ...body };

  if (cloned.password) cloned.password = "***";
  if (cloned.token) cloned.token = "***";

  return cloned;
};