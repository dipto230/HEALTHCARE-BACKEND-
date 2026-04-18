import { Request, Response, NextFunction } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    const log = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      time: new Date().toISOString(),
      duration: `${duration}ms`,
    };

    console.log(
      `[${log.time}] ${log.method} ${log.url} ${log.status} - ${log.duration} - ${log.ip}`
    );
  });

  next();
};