import { Router } from "express";
import { UserController } from "./user.controller";
import z from "zod";


const createDoctorZodSchema = z.object({
    name:z.string("Name is required").min(5,"Name must be at least 5 characters").max(30, "Name must be ")
})

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;