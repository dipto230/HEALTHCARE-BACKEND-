import express, {Application,NextFunction,Request,Response} from "express";
import { prisma } from "./app/lib/prisma";

import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1", IndexRoutes)

app.get('/', async (req: Request, res: Response) => {
    const specialty = await prisma.specialty.create({
        data: {
            title:"Cardiology"
        }
    })
    // res.send('HEALTH CARE BACKEND RUNNING')
    res.status(201).json({
        success: true,
        message: 'API IS WORKING',
        data:specialty
    })
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(globalErrorHandler(err, req, res, next))

export default app;
