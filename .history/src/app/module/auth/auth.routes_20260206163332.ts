import { Router } from "express";
import { AuthController } from "./auth.controller";


const router = Router()

router.post("/register", AuthController.registerPatient)
router.post("/login", AuthController.loginUser(req, res, next))

export const AuthRoutes = router;