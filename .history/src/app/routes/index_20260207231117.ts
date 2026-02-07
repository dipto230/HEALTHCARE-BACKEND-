import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";
import { AuthRoutes } from "../module/auth/auth.routes";

const router = Router()
router.use("/auth", AuthRoutes)
router.use("/specialties", SpecialtyRoutes)
router.use()

export const IndexRoutes = router