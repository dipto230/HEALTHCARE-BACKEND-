import { Router } from 'express'
import { RagController } from './rag.controller'
const router = Router()
router.get("/stats", RagController)
export const RagRoutes = router
