import { Schema, model } from "mongoose";
import { IUserDocument } from "../AllInterfaces/User.Interface";
import isEmail from "validator/lib/isEmail"
import bcrypt from "bcrypt"


const userSchema: Schema<IUserDocument> = new Schema({
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
        type:String,
        enum: ["user", "admin", "manager"],
        message:"You must either be a user,admin or a manager",
        default:"user"
    }
}, {
    timestamps:true
})

userSchema.pre("save",async function (next) {
    let user = this
    if (!this.isModified("password")) next()
    
    const salt = await bcrypt.genSalt(12)

    user.password = await bcrypt.hash(user.password, salt)
    user.confirmPassword = user.password

    next();
})

const UserModel = model<IUserDocument>("User", userSchema);

export default UserModel