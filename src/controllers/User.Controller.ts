import { Request, Response, NextFunction } from "express";
import { IUser } from "../AllInterfaces/User.Interface";
import UserModel from "../models/User.model";
import { AppError,HttpCode } from "../Utils/Apperror";
import { asynHandler } from "../Utils/asynHandler";

export const register = asynHandler(async (req: Request<{},{},IUser>, res: Response, next: NextFunction) => {
    const { name, email, password, confirmPassword } = req.body;
    
    const user = await UserModel.create({email, password, name, confirmPassword});
        if(!user){
            next(new AppError({
                message: "Account Not Created",
                httpCode: HttpCode.BAD_REQUEST,
            }))
        }
    return res.status(HttpCode.CREATED).json({
        message: "Successfully Created User",
        data:user,
    })
})

export const login = asynHandler(async (req:Request,res:Response,next:NextFunction) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email })

    if (!user) next(new AppError({
        message: "Account does not exist",
        httpCode: HttpCode.NOTFOUNd,
    }));
  await user?.comparePassword(password)

    return res.status(200).json({
        message: "Successfully Login",
        data:user
    })
 
})