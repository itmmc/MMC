import axios from 'axios'
import baseUrl from '../../../src/ApiFile'
import { toast } from 'react-toastify'

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
        })
}

export const getBrand = async (
    setAllBrands: any,
    setBrands: any,
    setBrandsLoading: any
) => {
    setBrandsLoading(true)

    await axios({
        url: `${baseUrl}/brand/get`,
        method: 'get',
    })
        .then((res: any) => {
            const filtered = res.data.data.brands.filter(
                (x: any) => x.name !== 'Animal Feeds Brand'
            )
            setAllBrands(res.data.data.brands)
            setBrands(filtered)
            setBrandsLoading(false)
        })
        .catch((err: any) => {
            setBrandsLoading(false)
        })
}

export const creatCategory = async (
    formState: any,
    setCategoryLoading: any,
    history: any
) => {
    setCategoryLoading(true)

    await axios({
        url: `${baseUrl}/category/${formState.id ? 'update' : 'create'}`,
        method: 'post',
        data: formState,
    })
        .then((res: any) => {
            setCategoryLoading(false)
            toast.success(`Category Added Successfully `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })

            history.push('/categories')
        })
        .catch((err: any) => {
            setCategoryLoading(false)
            toast.error(`Error in Create Category ${err}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            console.log(err)
        })
}

export const deleteCategory = async (
    id: string,
    setAlertMessage: any,
    setLoading: any,
    refreshCat: any
) => {
    setLoading(true)

    await axios({
        url: `${baseUrl}/category/delete`,
        method: 'post',
        data: {
            id: id,
        },
    })
        .then((res: any) => {
            setLoading(false)
            refreshCat()

            toast.info(`Category Deleted Successfully `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })

        .catch((err: any) => {
            setLoading(false)
            toast.error(`Some Thing Went Wrong ${err}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}
