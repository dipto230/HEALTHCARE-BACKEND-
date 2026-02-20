
import {Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
import { Role } from "../../../generated/prisma/enums"
const router = Router()

router.patch("/update-my-profile",
    checkAuth(Role.)
)