import dotenv from "dotenv"
dotenv.config()

const enviromentvariable = {
    PORT : process.env.PORT!,
    MONGODB_STRING_LOCALHOST: process.env.MONGODB_STRING_LOCALHOST!
}

export default enviromentvariable