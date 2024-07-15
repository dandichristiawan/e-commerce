import { signInRequest, signInResponse } from "@/features/login/libs/definitions"

export async function LoginApi(formData: signInRequest): Promise<signInResponse> {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    if (!response.ok) {
        throw new Error('Login Failed!')
    }

    const data = await response.json()

    return data as signInResponse
}