import { RoleType } from './_role.type'

export interface JwtPayload {
    profile: string
    role: RoleType
    user: string
    verified: boolean
}
