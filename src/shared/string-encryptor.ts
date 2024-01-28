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
}
