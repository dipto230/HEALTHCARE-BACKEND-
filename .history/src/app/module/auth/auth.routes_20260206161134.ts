import { Router } from "express";


const router = Router()

router.post("/register", Auth)

export const AuthRoutes = router;