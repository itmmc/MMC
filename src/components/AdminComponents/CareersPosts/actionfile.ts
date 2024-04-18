import axios from 'axios'
import baseUrl from '../../../ApiFile'
import { ToastContainer, toast } from 'react-toastify'

import React from 'react'

export const createPost = async (
    e: any,
    postData: any,
    setIsLoading: any,
    history: any
) => {
    setIsLoading(true)
    e.preventDefault()

    await axios({
        method: 'post',
        url: baseUrl + '/opportunity/create',
        data: postData,
    })
        .then((res: any) => {
            setIsLoading(false)
            toast.success(res.data.message, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })

            history.push('/jobposts')
        })
        .catch(({ response }) => {
            setIsLoading(false)
            toast.error(response.data?.message, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
}

export const getPosts = async (setIsLoading: any, setPostData: any) => {
    setIsLoading(true)

    await axios({
        url: baseUrl + '/opportunity/get',
        method: 'get',
    })
        .then((res: any) => {
            setIsLoading(false)
            setPostData(res.data.data.openingOpportunity)
        })
        .catch((error) => {
            setIsLoading(false)
            console.log(error)
        })
}

export const getPostsbyid = async (
    id: any,
    setIsLoading: any,
    setPostData: any
) => {
    setIsLoading(true)

    await axios({
        url: `${baseUrl}/opportunity/getById`,
        method: 'post',
        data: {
            id: id,
        },
    })
        .then((res: any) => {
            setIsLoading(false)
            setPostData(res.data.data.openingOpportunity)
        })
        .catch((error) => {
            setIsLoading(false)
            console.log(error)
        })
}

export const postUpdate = async (
    id: any,
    e: any,
    postData: any,
    setIsLoading: any,
    history: any
) => {
    setIsLoading(true)
    postData.id = id
    await axios({
        url: `${baseUrl}/opportunity/update`,
        method: 'post',
        data: postData,
    })
        .then((res: any) => {
            setIsLoading(false)

            toast.success('Data Updated Successfully', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })

            history.push('/jobposts')
        })
        .catch((error) => {
            setIsLoading(false)

            toast.error(` ${error}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            console.log(error)
        })
}

export const deleteposts = async (id: any, setIsLoading: any) => {
    await axios({
        url: baseUrl + '/opportunity/delete',
        method: 'post',
        data: {
            id: id,
        },
    })
        .then((res: any) => {
            setIsLoading(false)
            toast.success(res.data.message, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
        })
        .catch((error) => {
            setIsLoading(false)

            toast.error(` ${error}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            console.log(error)
        })
}
