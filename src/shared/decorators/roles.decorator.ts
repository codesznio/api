import { SetMetadata } from '@nestjs/common'

// Data
import { Api } from '@/data/types/api'

export const Roles = (...args: Api.RoleType[]) => SetMetadata('roles', args)
