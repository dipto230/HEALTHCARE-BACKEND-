import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";

const router = Router()
router.use("/")
router.use("/specialties", SpecialtyRoutes)

export const IndexRoutes = router