import { instanceToPlain } from "class-transformer";
import { generateToken, ResponseService } from "../helper"
import { createUser, CreateUserDto, getUserByEmail, updateUser } from "./auth.service"
import * as bcrypt from "bcrypt"
import {Request, Response} from "express";


let responseService: ResponseService = new ResponseService();

export const createUserController = async (req: Request, res: Response) => {
    try {
        await createUser(req.body as CreateUserDto)
        return responseService.resolve(res, "created", {}, 201)
    } catch (error: any) {
       return responseService.reject(res, error)  
    }
}

export const loginController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { email, password } = req.body;
  
      let user = await getUserByEmail(email);
      console.log(user);
      
      if (!user) {
        throw new Error(`Incorrect email and password`);
      }
  
      const doMatch: boolean = await bcrypt.compare(password, user.password);
      if (!doMatch) {
        throw new Error(`Incorrect email and password`);
      }

      const token = generateToken({email, userId: user.userId});
      
      await updateUser(user.userId, user);
      const data = { ...user, ...token };
      responseService.resolve(res, "Signin successfully", instanceToPlain(data), 200)
    } catch (error: any) {
      responseService.reject(res, error);
    }
  };