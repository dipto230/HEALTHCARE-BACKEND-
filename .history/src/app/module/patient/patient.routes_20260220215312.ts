
import {Router} from "express"
import { checkAuth } from "../../middleware/checkAuth"
const router = Router()

router.patch("/update-my-profile",
    checkAuth(Role)
)