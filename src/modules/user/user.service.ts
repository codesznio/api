import { Injectable } from '@nestjs/common'

// User Repository
import { UserRepository } from '@/modules/user/user.repository'

@Injectable()
export class UserService {
    constructor(private _userRepository: UserRepository) {}
}
