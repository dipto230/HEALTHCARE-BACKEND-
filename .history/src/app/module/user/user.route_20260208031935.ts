import { Router } from "express";
import { UserController } from "./user.controller";
import z from "zod";


const createDoctorZodSchema = z.object({
    password: z.string("password is required").min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 character "),
    doctor: z.object({
        
    })
    
})

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;