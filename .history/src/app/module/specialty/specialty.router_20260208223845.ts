import { Response, Router,Request } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.post('/', SpecialtyController.createSpecialty);
router.get('/',, async(req:Request, res:Response) SpecialtyController.getAllSpecialties);
router.delete('/:id', SpecialtyController.deleteSpecialty);
router.patch('/:id', SpecialtyController.updateSpecialty);

export const SpecialtyRoutes = router