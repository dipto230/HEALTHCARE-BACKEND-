import express, {Application,NextFunction,Request,Response} from "express";
import { prisma } from "./app/lib/prisma";

import { IndexRoutes } from "./app/routes";

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

app.use((err: any, req:Request, res:Response, next:NextFunction) => {
    console.log(err)
    res.status(500).json({
        succes
    })
})

export default app;
