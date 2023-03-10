import express, {Application, Request, Response, NextFunction} from "express"
import cors from "cors"
import morgan from "morgan"
import { errorHandler } from "./Middleware/errorhandler"
import { AppError, HttpCode } from "./Utils/Apperror"
import api from "./api/index"

const appConfig = (app: Application) => {
    app.use(express.json()).use(cors()).use(morgan("dev"))

    //api endpoint
    .use("/api", api)

    .all("", (req: Request, res: Response, next: NextFunction) => {
        next(
            new AppError({
                message: `this route ${req.originalUrl} was not found`,
                httpCode: HttpCode.NOTFOUNd
            })
        )
    })
    //Error handler
    .use(errorHandler)
}

export default appConfig