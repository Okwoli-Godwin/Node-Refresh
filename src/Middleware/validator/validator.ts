import { NextFunction } from "express"
import joi from "joi"
import { AppError, HttpCode } from "../../Utils/Apperror"

export const validator = (schemaName: joi.ObjectSchema, body: object, next: NextFunction) => {
    const value = schemaName.validate(body, {
        abortEarly:false,
        stripUnknown: true,
        allowUnknown:true
    })

    try {
        value.error
            ? next(
                new AppError({
                    httpCode: HttpCode.UNAUTHORISED,
                    message: value.error.details[0].message,
                })) : next();
    } catch (error:any) {
        next(new AppError({
            httpCode: HttpCode.UNAUTHORISED,
            message: error,
        })
        )
    }
}