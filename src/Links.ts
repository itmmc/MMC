import baseUrl from './ApiFile'
import axios from 'axios'

export const getSocialMediaData = async (setsocialmedialinks: any) => {
    try {
        const response = await axios.get(
            `${baseUrl}/gernalSetting/getSocialMediaLinks`
        )

        setsocialmedialinks(response.data.data.companySocialMediaLinks[0])
    } catch (error) {
        console.error(error)
    }
}
