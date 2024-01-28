import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UserCreateParams {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}
