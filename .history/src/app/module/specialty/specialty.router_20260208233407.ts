
import {  Router } from "express";
import { SpecialtyController } from "./specialty.controller";

import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post('/',checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.DOCTOR), SpecialtyController.createSpecialty);
router.get('/',checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.DOCTOR, Role.PATIENT), SpecialtyController.getAllSpecialties);
router.delete('/:id', SpecialtyController.deleteSpecialty);
router.patch('/:id', SpecialtyController.updateSpecialty);

export const SpecialtyRoutes = router