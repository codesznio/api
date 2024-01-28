import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Utils
import { Profile } from './profile.schema'

// Modules
import { User } from '@/modules/feature/user/schema/user.schema'

@Injectable()
export class ProfileFactory {
    create(user: User): Profile {
        const profile = new Profile()

        profile.user = user._id as unknown as Types.ObjectId

        return profile
    }
}
