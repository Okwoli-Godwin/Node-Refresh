import { RequestHandler } from "express";
import { validator } from "../validator";
import { UserSchema } from "./userSchema";

export const registerValidation:RequestHandler=(req,res,next)=>validator(UserSchema.register,req.body,next)
export const loginValidation:RequestHandler=(req,res,next)=>validator(UserSchema.login,req.body,next)