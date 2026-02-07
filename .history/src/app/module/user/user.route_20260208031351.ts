import { Router } from "express";
import { UserController } from "./user.controller";


const createDoctorZodSchema

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;