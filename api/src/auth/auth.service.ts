import { AppDataSource } from "../data-source"
import {Repository } from "typeorm"
import { User } from "../entities/User"
import { instanceToPlain } from "class-transformer"
import { hashData } from "../helper"

const userRepository: Repository<User> = AppDataSource.getRepository(User)

export interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string
}

export const getUserByID = async(userId: string) => {
    try {
        const user = await userRepository.findOne({where: {userId}})
        return instanceToPlain(user)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        return await userRepository.findOne({where: {email}})
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateUser = async (id: string, user:User) => {
        return await userRepository.update(id, user)
}

export const createUser = async (payload: CreateUserDto) => {
    try {
        const existingUser = await getUserByEmail(payload.email)
        if(existingUser){
            throw new Error("User with email already exist");
        }

        const hashedPassword: string = await hashData(payload.password)

        const newUser = new User()
        newUser.email = payload.email;
        newUser.firstName = payload.firstName;
        newUser.lastName = payload.lastName;
        newUser.password = hashedPassword;

        await userRepository.save(newUser);

    } catch (error: any) {
        throw new Error(error)
    }

}