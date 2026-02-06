import { Router } from "express";
import { AuthController } from "./auth.controller";


const router = Router()

router.post("/register", AuthController.registerPatient)
router.post(path)

export const AuthRoutes = router;