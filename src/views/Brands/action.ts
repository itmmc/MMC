import axios from 'axios'
import { toast } from 'react-toastify'
import baseUrl from '../../ApiFile'

export const getBrands = async (setBrands: any, setLoading: any) => {
    setLoading(true)

    await axios({
        url: `${baseUrl}/brand/get`,
        method: 'get',
    })
        .then((res: any) => {
            setLoading(false)
            setBrands(res.data.data.brands)
        })
        .catch((error) => {
            setLoading(false)

            console.log(error)
        })
}

export const createBrand = async (data: any, history: any, setLoading: any) => {
    setLoading(true)

    await axios({
        url: `${baseUrl}/brand/${data.brandId ? 'update' : 'create'}`,
        method: 'post',
        data: data,
    })
        .then((res: any) => {
            toast.success(
                `Brand ${data.brandId ? 'Updated' : 'Created'} Successfully`,
                {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                }
            )

            setLoading(false)
            history.push('/brands-list')
        })
        .catch((err) => {
            setLoading(false)
            toast.error(`Something went wrong!`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}

export const deleteBrand = async (id: any, getAllBrands: any) => {
    await axios({
        url: `${baseUrl}/brand/delete`,
        method: 'post',
        data: {
            brandId: id,
        },
    })
        .then((res: any) => {
            toast.success(`Brand Deleted Successfully `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })

            getAllBrands()
        })
        .catch((err) => {})
    toast.error(`Something went wrong!`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: 'light',
    })
}
