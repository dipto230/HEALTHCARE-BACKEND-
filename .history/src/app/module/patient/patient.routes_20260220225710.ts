
import {NextFunction, Request, Response, Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
import { validateRequest } from "../../middleware/validateRequest"
import { PatientValidation } from "./patient.validation"
import { multerUpload } from "../../../config/multer.config"
import { patientController } from "./patient.controller"
import { IUpdatePatientInfoPayload, IUpdatePatientProfilePayload } from "./patient.interface"
import { updateMyPatientProfileMiddleware } from "./patient.middlewares"

const router = Router()


router.patch("/update-my-profile",
    checkAuth(Role.PATIENT),
    multerUpload.fields([
        {name:"profilePhoto", maxCount:1},
        {name:"medicalReport", maxCount:5}
    ]),

    updateMyPatientProfileMiddleware
    validateRequest(PatientValidation.updatePatientProfileZodSchema),
    patientController.updateMyProfile

)