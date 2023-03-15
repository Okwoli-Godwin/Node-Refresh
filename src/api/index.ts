import { Router } from "express";
import authRoute from "../Route/auth.route"

const router = Router()

router.use("/",authRoute)

export default router;