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