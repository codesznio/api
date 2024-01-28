import { JwtPayload } from './_jwt-payload.interface'

export interface JwtRefreshPayload extends JwtPayload {
    refresh: string
}
