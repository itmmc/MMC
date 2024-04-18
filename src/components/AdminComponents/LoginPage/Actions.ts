import axios from 'axios'
import baseUrl from '../../../ApiFile'

export const handleLogin = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/sign-in`, {
            email,
            password,
        })

        const accessToken = response.data.data.accessToken
        localStorage.setItem('accessToken', accessToken)

        return accessToken
    } catch (error) {
        throw error
    }
}
