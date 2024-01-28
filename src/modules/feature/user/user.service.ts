import { Injectable } from '@nestjs/common'

// User
import { User } from './schema/user.schema'
import { UserFactory } from './user.factory'
import { UserRepository } from '@/modules/feature/user/user.repository'

// Types
import { Api } from '@/data/types/api'

@Injectable()
export class UserService {
    constructor(
        private _userFactory: UserFactory,
        private _userRepository: UserRepository,
    ) {}

    private async _retrieveByEmail(email: string): Promise<User | null> {
        const users = await this._userRepository.search({ 'credentials.email': email })

        return users.length === 0 ? null : users[0]
    }

    private async _retrieveById(id: string): Promise<User | null> {
        return await this._userRepository.retrieve(id)
    }

    async create(dto: Api.UserCreateParams): Promise<User> {
        const user = await this._userRepository.create(this._userFactory.create(dto))
        // const profile = await this._profileService.create(user)
        // await this._permissionService.create(profile, user)
        // return user

        return user
    }

    get retrieve() {
        return {
            byEmail: (email: string): Promise<User | null> => this._retrieveByEmail(email),
            byId: (id: string): Promise<User | null> => this._retrieveById(id),
        }
    }
}
