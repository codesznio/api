import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class SignupUserParams {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}
