import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post('/', SpecialtyController.createSpecialty)
r
export const SpecialtyRoutes = router