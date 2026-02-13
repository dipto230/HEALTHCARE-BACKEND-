import express, {Application,Request,Response} from "express";


import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import AppError from "./app/middleware/AppError";
import status from "http-status";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./app/lib/auth";
import path from "path";
import cors from "cors";
import { envVars } from "./config/env";

const app: Application = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(process.cwd(), `src/app/templates`))
app.use(cors({
    origin:[envVars.FRONTEND_URL, envVars.]
}))

app.use("/api/auth", toNodeHandler(auth))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser())


app.use("/api/v1", IndexRoutes)

app.get('/', async (req: Request, res: Response) => {
throw new AppError(status.BAD_REQUEST, "Just testing error handler")
    // res.send('HEALTH CARE BACKEND RUNNING')
    res.status(201).json({
        success: true,
        message: 'API IS WORKING',
        // data:specialty
    })
});


app.use(globalErrorHandler)
app.use(notFound)



export default app;
