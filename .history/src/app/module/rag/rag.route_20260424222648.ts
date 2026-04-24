import { Router } from 'express'
import { RagController } from './rag.controller'
const router = Router()
router.get("/stats", RagController.getStats)
router.post("/")
export const RagRoutes = router
