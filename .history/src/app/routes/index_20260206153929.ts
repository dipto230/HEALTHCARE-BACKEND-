import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";

const router = Router()
router.use("/auth", Auth)
router.use("/specialties", SpecialtyRoutes)

export const IndexRoutes = router