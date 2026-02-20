
import {NextFunction, Request, Response, Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
import { validateRequest } from "../../middleware/validateRequest"
import { PatientValidation } from "./patient.validation"
import { multerUpload } from "../../../config/multer.config"
import { patientController } from "./patient.controller"
import { IUpdatePatientInfoPayload, IUpdatePatientProfilePayload } from "./patient.interface"

const router = Router()
const updateMyProfileMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    
}

router.patch("/update-my-profile",
    checkAuth(Role.PATIENT),
    multerUpload.fields([
        {name:"profilePhoto", maxCount:1},
        {name:"medicalReport", maxCount:5}
    ]),
    (req: Request, res: Response, next: NextFunction) => {
        
    },
    validateRequest(PatientValidation.updatePatientProfileZodSchema),
    patientController.updateMyProfile

)