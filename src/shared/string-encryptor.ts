import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class StringEncryptor {
    private readonly SALT_NUMBER = 13

    public compare(text: string, hash: string): boolean {
        return bcrypt.compareSync(text, hash)
    }

    public generate(text: string): string {
        const salt = bcrypt.genSaltSync(this.SALT_NUMBER)

        return bcrypt.hashSync(text, salt)
    }

    public generateRandomString(count: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''

        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            result += characters[randomIndex]
        }

        return result
    }

    public generateRandomSixDigitCode(): number {
        return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    }
}
