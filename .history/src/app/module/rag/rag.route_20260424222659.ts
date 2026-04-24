import { Router } from 'express'
import { RagController } from './rag.controller'
const router = Router()
router.get("/stats", RagController.getStats)
router.post("/ingest-doctors", Rag)
export const RagRoutes = router
