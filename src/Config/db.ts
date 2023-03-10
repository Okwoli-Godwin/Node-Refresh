import mongoose from "mongoose";
import enviromentvariable from "./enviromentvariable";

const Db = enviromentvariable.MONGODB_STRING_LOCALHOST

const dbConfig = async () => {
    try {
        const conn = await mongoose.connect(Db)
        console.log(`Db connected @ ${conn.connection.host}`)
    } catch (error) {
        console.log(`failed ${error}`)
    }
}

export default dbConfig