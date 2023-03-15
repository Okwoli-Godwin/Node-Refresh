import dotenv from "dotenv"
dotenv.config()

const enviromentvariable = {
    port : process.env.port,
    MONGODB_STRING_LOCALHOST: process.env.MONGODB_STRING_LOCALHOST!
}

export default enviromentvariable