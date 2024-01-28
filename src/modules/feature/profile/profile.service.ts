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

    private async _retrieveById(id: string): Promise<Profile | null> {
        return await this._profileRepository.retrieve(id)
    }

    private async _retrieveByUserId(id: string): Promise<Profile | null> {
        const users = await this._profileRepository.search({ user: id })

        return users.length === 0 ? null : users[0]
    }

    async create(user: User): Promise<Profile> {
        return await this._profileRepository.create(this._profileFactory.create(user))
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Profile | null> => this._retrieveById(id),
            byUser: (id: string): Promise<Profile | null> => this._retrieveByUserId(id),
        }
    }
}
