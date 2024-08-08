import {Response} from "express";
import * as jwt from "jsonwebtoken"

import * as bcrypt from "bcrypt"

export const hashData  = async (value: string): Promise<string> => {
    try {
        const SALT = await bcrypt.genSalt(10);
        return bcrypt.hash(value, SALT)
    } catch (err) {
        throw new Error(err)
    }
}

export class ResponseService {
    resolve(response: Response, msg: string, data: Object | Array<Object> | null, status: number) {
      return response.status(status).json({
        message: msg,
        data,
      });
    }
    
    reject(response: Response, error: { status: number; response: { error: any; }; message: string; }) : Response<number, Record<string, string>> {
      const statusCode = error?.status || 400
      if (error?.response) {
        return response.status(statusCode).send({
          statusCode,
          message: error.response.error,
        });
      }
      return response.status(statusCode).send({
        statusCode,
        message: error?.message || 'Something went wrong',
      });
    }
}

export const generateToken = ({email, userId}:{email: string, userId: string}) => {
    const accessToken = jwt.sign({userId: userId, email: email, type: "access"},
        `${process.env.JWT_SECRET}`,
        { expiresIn: "1d"}
    )

    const refreshToken = jwt.sign({userId: userId, email: email, type: "refresh"},
        `${process.env.JWT_SECRET}`,
        { expiresIn: "2d"}
    )

    return {accessToken, refreshToken}
}
