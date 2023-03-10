import express from "express"
import enviromentvariable from "./Config/enviromentvariable"
import appConfig from "./app"
import dbConfig from "./Config/db"

const app = express()

//Application
appConfig(app)
dbConfig()

app.listen(enviromentvariable.PORT, () => {
    console.log("Server is up and running")
})
