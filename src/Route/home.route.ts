import { Router, Request, Response, NextFunction } from "express";

const router = Router()

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({message: `Welcome to set o6`})
    } catch (error) {
        next(error)
    }
})

export default router