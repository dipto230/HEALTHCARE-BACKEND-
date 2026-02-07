import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";
import { AuthRoutes } from "../module/auth/auth.routes";
import { UserRoute } from "../module/user/user.route";

const router = Router()
router.use("/auth", AuthRoutes)
router.use("/specialties", SpecialtyRoutes)
router.use("/doctors", UserRoutes)

export const IndexRoutes = router