import express from "express"
import enviromentvariable from "./Config/enviromentvariable"

const app = express()

app.listen(enviromentvariable.PORT, () => {
    console.log("server is riunning fine")
})