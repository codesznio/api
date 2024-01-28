export const RoleType = {
    OWNER: 'OWNER',
    STAFF: 'STAFF',
    USER: 'USER',
}

export type RoleType = (typeof RoleType)[keyof typeof RoleType]
