import { Router } from "express";
import { UserController } from "./user.controller";
import z from "zod";


const createDoctorZodSchema = z.object({
    password: z.string("password is required").min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 character "),
    doctor: z.object({
        name: z.string("Name is required").min(5, "Name must be at least 5 characters").max(30, "Name must be at most 30 character"),
        email:z.email("Invalid email address") 
    })
    
})

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;