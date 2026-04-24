import { Router } from 'express'
const router = Router()
router.get("/stats", RagController)
export const RagRoutes = router
