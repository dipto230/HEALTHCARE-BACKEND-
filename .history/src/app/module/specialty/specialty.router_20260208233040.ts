/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Router,Request, NextFunction } from "express";
import { SpecialtyController } from "./specialty.controller";
import { CookieUtils } from "../../util/cookie";
import AppError from "../../middleware/AppError";
import status from "http-status";
import { jwtUtils } from "../../util/jwt";
import { envVars } from "../../../config/env";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

router.post('/', SpecialtyController.createSpecialty);
router.get('/',checkAuth(), SpecialtyController.getAllSpecialties);
router.delete('/:id', SpecialtyController.deleteSpecialty);
router.patch('/:id', SpecialtyController.updateSpecialty);

export const SpecialtyRoutes = router