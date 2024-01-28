import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class EmailVerificationParams {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsOptional()
    token: string

    @IsString()
    @IsOptional()
    numeric: string
}
