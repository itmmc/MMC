import axios from 'axios'
import baseUrl from '../../ApiFile'
import { toast } from 'react-toastify'
import Categories from '@views/Categories/Categories'

export const getProducts = async (
    setProducts: any,
    setProductsLoading: any
) => {
    setProductsLoading(true)

    await axios({
        url: `${baseUrl}/product/get`,
        method: 'get',
    })
        .then((res: any) => {
            setProducts(res.data.data.products)
            setProductsLoading(false)
        })
        .catch((err: any) => {
            setProductsLoading(false)
            toast.error(`Something went wrong!`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}

export const getCategories = async (
    setCategories: any,
    setCategoryLoading: any
) => {
    setCategoryLoading(true)

    await axios({
        url: `${baseUrl}/category/get`,
        method: 'get',
    })
        .then((res: any) => {
            setCategories(res.data.data.categories)
            setCategoryLoading(false)
        })
        .catch((err: any) => {
            setCategoryLoading(false)
            toast.error(`Something went wrong!`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}
