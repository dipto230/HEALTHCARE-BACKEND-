
import {NextFunction, Request, Response, Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
import { validateRequest } from "../../middleware/validateRequest"
import { PatientValidation } from "./patient.validation"
import { multerUpload } from "../../../config/multer.config"
import { patientController } from "./patient.controller"
import { IUpdatePatientProfilePayload } from "./patient.interface"
const router = Router()

router.patch("/update-my-profile",
    checkAuth(Role.PATIENT),
    multerUpload.fields([
        {name:"profilePhoto", maxCount:1},
        {name:"medicalReport", maxCount:5}
    ]),
    (req: Request, res: Response, next: NextFunction) => {
        const payload: IUpdatePatientProfilePayload = req.body;
        const files
        next();
    },
    validateRequest(PatientValidation.updatePatientProfileZodSchema),
    patientController.updateMyProfile

)