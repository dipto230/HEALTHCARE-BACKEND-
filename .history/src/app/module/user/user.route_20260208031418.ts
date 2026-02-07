import { Router } from "express";
import { UserController } from "./user.controller";
import z from "zod";


const createDoctorZodSchema = z.object({
    
})

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;