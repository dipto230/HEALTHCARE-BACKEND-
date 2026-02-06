import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post('/', SpecialtyController.createSpecialty)
router.get('/', SpecialtyController.getAllSpe)
export const SpecialtyRoutes = router