import { Router } from "express"
import { register } from "../controllers/User.Controller"
import { registerValidation } from "../Middleware/validator/userValidation/userValidation"

const router = Router()

router.post("/register", registerValidation,register)


export default router