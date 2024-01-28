import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UserSignupParams {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}
