import axios from 'axios'
import baseUrl from '../../../src/ApiFile'
import { ToastContainer, toast } from 'react-toastify'

const reloadPage = (pageUrl: any) => {
    window.location.href = pageUrl
    window.location.reload()
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
            setBrands(filtered)
            setAllBrands(res.data.data.brands)
            setBrandsLoading(false)
        })
        .catch((err: any) => {
            setBrandsLoading(false)
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
        })
}

export const getProducts = async (setProduct: any, setProductLoading: any) => {
    setProductLoading(true)

    await axios({
        url: `${baseUrl}/product/get`,
        method: 'get',
    })
        .then((res: any) => {
            setProduct(res.data.data.products)
            setProductLoading(false)
        })
        .catch((err: any) => {
            setProductLoading(false)
        })
}

export const getProductsById = async (
    id: any,
    setProduct: any,
    setLoading: any
) => {
    setLoading(true)

    await axios({
        url: `${baseUrl}/product/getById`,
        method: 'post',
        data: { id: id },
    })
        .then((res: any) => {
            setProduct(res?.data?.data?.product)
            setLoading(false)
        })
        .catch((err: any) => {
            setLoading(false)
        })
}

export const postProduct = async (
    formState: any,
    setProductLoading: any,
    history: any
) => {
    setProductLoading(true)

    await axios({
        url: `${baseUrl}/product/${formState.id ? 'update' : 'create'}`,
        method: 'post',
        data: formState,
    })
        .then((res: any) => {
            setProductLoading(false)

            toast.success(`Products Added Successfully `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            history.push('/products')
        })
        .catch((err: any) => {
            setProductLoading(false)
            toast.error(`Something went wrong!`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}

export const deleteProduct = async (
    id: string,
    setAlertMessage: any,
    setLoading: any,
    refreshCat: any
) => {
    setLoading(true)

    await axios({
        url: `${baseUrl}/product/delete`,
        method: 'post',
        data: {
            id: id,
        },
    })
        .then((res: any) => {
            setLoading(false)
            refreshCat()
            toast.success(`Product Deleted Successfully `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
        .catch((err: any) => {
            setLoading(false)
            setAlertMessage((alertMessage: any) => ({
                ...alertMessage,
                message: 'Some thing went wrong!',
                status: 'errorbr',
            }))
            toast.error(`Some Thing Went Wrong ${err}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            console.log(err)
        })
}
