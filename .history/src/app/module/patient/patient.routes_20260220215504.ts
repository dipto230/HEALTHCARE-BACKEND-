
import {Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
import { validateRequest } from "../../middleware/validateRequest"
import { PatientValidation } from "./patient.validation"
const router = Router()

router.patch("/update-my-profile",
    checkAuth(Role.PATIENT),
    validateRequest(PatientValidation.updatePatientPro)
)