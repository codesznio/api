import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as SendGrid from '@sendgrid/mail'

// Schema
import { User } from '@/modules/feature/user/schema/user.schema'

@Injectable()
export class MailerService {
    constructor(private readonly _configService: ConfigService) {
        SendGrid.setApiKey(this._configService.get<string>('sendgrid.key'))
    }

    async send(mail: SendGrid.MailDataRequired): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await SendGrid.send(mail)
    }

    async sendWelcomeEmail(user: User): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: user.credentials.email,
            subject: 'Welcome to CODESZN!',
            from: 'Account Recovery <no-reply@codeszn.com>',
            html: `You signed up for an account bitch`,
        })
    }

    async sendPasswordRecoveryEmail(
        user: User,
        token: string,
    ): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: user.credentials.email,
            subject: 'Follow the steps to recover your account!',
            from: 'Account Recovery <no-reply@codeszn.com>',
            html: `
                Hey, looks like you forgot your password. Click the following link to reset your password <a href="https://codeszn.com?id=${user._id}&token=${token}">Reset Password</a>
            `,
        })
    }

    async sendPasswordResetEmail(user: User): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: user.credentials.email,
            subject: 'Password Changed.',
            from: 'Codeszn Security <security@codeszn.com>',
            html: `
                Your password has been changed, if you did not initiate this request please reply to this email.
            `,
        })
    }
}
