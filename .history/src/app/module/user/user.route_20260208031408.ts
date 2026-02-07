import { Router } from "express";
import { UserController } from "./user.controller";


const createDoctorZodSchema = z.object

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;