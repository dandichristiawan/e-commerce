export type signInRequest = {
    username: string
    password: string
    expiresInMins: 120
}

export type signInResponse = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
    refreshToken: string
}