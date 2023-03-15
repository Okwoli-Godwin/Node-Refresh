import { Schema, model } from "mongoose";
import { IUser } from "../AllInterfaces/User.Interface";
import isEmail from "validator/lib/isEmail"

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: [true,"Please Enter Your Name"],        
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        validate: [isEmail, "Please Enter a Valid Email"],
        lowercase: true,
        unique: true,
        trim:true,
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        
    },
    confirmPassword: {
        type: String,
        required:[true,"Please Enter the correct Password"]
    },
    role: {
        enum: ["user", "admin", "manager"],
        message:"You must either be a user,admin or a manager",
        default:"user"
    }
}, {
    timestamps:true
})


const UserModel = model<IUser>("User", userSchema);

export default UserModel