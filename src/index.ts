import express, { Application } from "express"
import appConfig from "./app"
import enviromentvariable from "./Config/enviromentvariable"

const app:Application = express()

appConfig(app)

app.listen(enviromentvariable.port , () => {
    console.log("server is running fine")
})