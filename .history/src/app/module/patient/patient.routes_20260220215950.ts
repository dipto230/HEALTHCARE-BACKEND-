
import {Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
import { validateRequest } from "../../middleware/validateRequest"
import { PatientValidation } from "./patient.validation"
import { multerUpload } from "../../../config/multer.config"
const router = Router()

router.patch("/update-my-profile",
    checkAuth(Role.PATIENT),
    multerUpload.array("medicalReports"),
    validateRequest(PatientValidation.updatePatientProfileZodSchema),
    PatientContr

)