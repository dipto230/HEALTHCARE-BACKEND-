import { Response, Router,Request, NextFunction } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post('/', SpecialtyController.createSpecialty);
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const 
        
    } catch (error) {
        
    }
} SpecialtyController.getAllSpecialties);
router.delete('/:id', SpecialtyController.deleteSpecialty);
router.patch('/:id', SpecialtyController.updateSpecialty);

export const SpecialtyRoutes = router