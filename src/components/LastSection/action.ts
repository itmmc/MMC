import axios from 'axios'
// import baseUrl from 'src/ApiFile'
import { toast } from 'react-toastify'
import baseUrl from '../../ApiFile'

export const createNewsLetter = async (email: any) => {
    await axios({
        url: `${baseUrl}/news/create`,
        method: 'post',
        data: { mail: email },
    })
        .then((res: any) => {
            toast.success(`Email added to the news letter `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
        .catch((err: any) => {
            toast.error(`Something went wrong!`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}
