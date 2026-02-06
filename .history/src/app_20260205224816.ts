import express, {Application,Request,Response} from "express";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    const specialty = 
    res.send('HEALTH CARE BACKEND RUNNING')
});

export default app;
