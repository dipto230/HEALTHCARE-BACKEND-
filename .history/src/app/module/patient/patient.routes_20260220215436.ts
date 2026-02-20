
import {Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
import { validateRequest } from "../../middleware/validateRequest"
const router = Router()

router.patch("/update-my-profile",
    checkAuth(Role.PATIENT),
    validateRequest(Patient)
)