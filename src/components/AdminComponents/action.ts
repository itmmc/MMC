import axios from 'axios'
import { toast } from 'react-toastify'
import baseUrl from '../../ApiFile'

export const getNewsLetter = async (setNewsData: any, setLoading: any) => {
    setLoading(true)
    await axios({
        url: `${baseUrl}/news/get`,
        method: 'get',
    })
        .then((res: any) => {
            setNewsData(res.data.data.news)
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
        })
}
