import { Router } from "express";
import homeroute from "../Route/home.route"

const router = Router()

router.get("/", homeroute)

export default router
