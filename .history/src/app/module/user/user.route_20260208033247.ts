import { Router } from "express";
import { UserController } from "./user.controller";
import z from "zod";
import { Gender } from "../../../generated/prisma/enums";


const createDoctorZodSchema = z.object({
    password: z.string("password is required").min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 character "),
    doctor: z.object({
        name: z.string("Name is required").min(5, "Name must be at least 5 characters").max(30, "Name must be at most 30 character"),
        email: z.email("Invalid email address"),
        contactNumber: z.string("Contact number is required").min(11, "Contact number must be at least 11 characters").max(14, "Contact number must be at most 15 characters"),
        address: z.string("Address is required").min(10, "Address must be at least 10 characters").max(100, "Address must be at most 100 characters").optional(),
        registrationNumber: z.string("Registration number is required"),
        experience: z.int("Experience must be an integer").nonnegative("Experience can not be negative").optional(),
        gender: z.enum([Gender.MALE, Gender.FEMALE], "Gender must be either MALE or FEMALE"),
        appointmentFee:z.number("")
    })
    
})

const router = Router()



router.post("/create-doctor", UserController.createDoctor)

export const UserRoutes = router;