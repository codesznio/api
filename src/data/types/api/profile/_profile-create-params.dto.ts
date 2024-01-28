import { IsNotEmpty, IsString } from 'class-validator'

export class ProfileCreateParams {
    @IsString()
    @IsNotEmpty()
    id: string
}
