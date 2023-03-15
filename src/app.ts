import express, {Application, Request, Response, NextFunction} from "express"
import cors from "cors"
import morgan from "morgan"


 const appConfig = (app: Application) => {
    app.use(express.json()).use(cors()).use(morgan("dev"))

    .all("*", (req: Request, res: Response, next: NextFunction) => {
        next(
            
        )
    })
 }

 export default appConfig