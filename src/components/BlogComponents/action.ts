import axios from 'axios'
import { data } from 'flickity'
import baseUrl from '../../ApiFile'
import { toast } from 'react-toastify'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

export const getBlogs = async (setBlogs: any, setLoading: any) => {
    setLoading(true)
    await axios({
        url: `${baseUrl}/blog/get`,
        method: 'get',
    })
        .then((res: any) => {
            setBlogs(res.data.data.blog)
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
        })
}

export const getBlogById = async (id: any, setData: any) => {
    await axios({
        url: `${baseUrl}/blog/getById`,
        method: 'post',
        data: {
            id: id,
        },
    })
        .then((res: any) => {
            const b = res.data.data.blog
            // Convert the rawContent back to editorState
            const contentState_en = convertFromRaw(
                JSON.parse(b?.description_en)
            )
            const description_en = EditorState.push(
                EditorState.createEmpty(),
                contentState_en,
                'change-block-data'
            )

            // Convert the rawContent back to editorState
            const contentState_ar = convertFromRaw(
                JSON.parse(b?.description_ar)
            )
            const description_ar = EditorState.push(
                EditorState.createEmpty(),
                contentState_ar,
                'change-block-data'
            )
            const html_en = draftToHtml(
                convertToRaw(description_en.getCurrentContent())
            )

            const html_ar = draftToHtml(
                convertToRaw(description_ar.getCurrentContent())
            )

            const blog = {
                description_ar: html_ar,
                description_en: html_en,
                featured: b.featured,
                image: b.image,
                shortDescription_ar: b.shortDescription_ar,
                shortDescription_en: b.shortDescription_en,
                title_ar: b.title_ar,
                title_en: b.title_en,
                _id: b._id,
            }
            setData(blog)
        })
        .catch((err) => {})
}

export const createBlog = async (data: any, history: any, setLoading: any) => {
    setLoading(true)

    await axios({
        url: `${baseUrl}/blog/${data.id ? 'update' : 'create'}`,
        method: 'post',
        data: data,
    })
        .then((res: any) => {
            toast.success(
                `Blog ${data.id ? 'Updated' : 'Created'} Successfully`,
                {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                }
            )

            setLoading(false)
            history.push('/blogs-list')
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

export const deleteBlog = async (id: any, getUserBlogs: any) => {
    await axios({
        url: `${baseUrl}/blog/delete`,
        method: 'post',
        data: {
            id: id,
        },
    })
        .then((res: any) => {
            toast.success(`Blog Deleted Successfully `, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })

            getUserBlogs()
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
