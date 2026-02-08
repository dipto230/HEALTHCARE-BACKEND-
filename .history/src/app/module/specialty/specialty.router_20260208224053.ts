import { Response, Router,Request, NextFunction } from "express";
import { SpecialtyController } from "./specialty.controller";
import { CookieUtils } from "../../util/cookie";
import AppError from "../../middleware/AppError";

const router = Router();

router.post('/', SpecialtyController.createSpecialty);
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = CookieUtils.getCookie(req, 'accessToken');
        if (!accessToken) {
            throw new AppError()
        }
        
    } catch (error) {
        
    }
} SpecialtyController.getAllSpecialties);
router.delete('/:id', SpecialtyController.deleteSpecialty);
router.patch('/:id', SpecialtyController.updateSpecialty);

export const SpecialtyRoutes = router