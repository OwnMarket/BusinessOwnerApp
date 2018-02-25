export class LoginModel {
    readonly grant_type: string = "password"
    username: string
    password: string
}