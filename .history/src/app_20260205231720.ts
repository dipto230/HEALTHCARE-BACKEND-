import express, {Application,Request,Response} from "express";
import { prisma } from "./app/lib/prisma";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1/s")

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

export default app;
