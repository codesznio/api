import { Injectable } from '@nestjs/common'

// Profile
import { Profile } from './profile.schema'
import { ProfileFactory } from './profile.factory'
import { ProfileRepository } from './profile.repository'

// User
import { User } from '@/modules/feature/user/schema/user.schema'

@Injectable()
export class ProfileService {
    constructor(
        private _profileFactory: ProfileFactory,
        private _profileRepository: ProfileRepository,
    ) {}

    async create(user: User): Promise<Profile> {
        return await this._profileRepository.create(this._profileFactory.create(user))
    }
}
