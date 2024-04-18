import React, { useEffect, useState, useMemo } from 'react'
import { deleteBlog, getBlogs } from './action'
import trash from '../../../images/delete.png'
import edit from '../../../images/edit.png'

import view from '../../../images/visibility.png'
import { formatDate } from '@helpers/utils/dateFormat'
import { useHistory } from 'react-router-dom'
import CustomLoader from '@components/CustomLoader'
import NoDataFound from '@components/NoDataFound/NoDataFound'

function ShowBlogs() {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [alertMessage, setAlertMessage] = useState({
        message: '',
        status: '',
    })

    const history = useHistory()

    // const blogList = useMemo(() => {
    //     return (
    //         <table className="table-container">
    //             <thead className="table-head">
    //                 <tr>
    //                     <th align="left">Title in English</th>
    //                     <th align="left">Title in Arabic</th>
    //                     <th align="left">Posted Date</th>
    //                     <th align="left">Last Update</th>
    //                     <th align="right" style={{ paddingRight: '38px' }}>
    //                         Actions
    //                     </th>
    //                 </tr>
    //             </thead>
    //             {isLoading ?
    //                 <CustomLoader /> :
    //                 <tbody>
    //                     {blogs?.map((item: any) => (
    //                         <tr key={item?._id}>
    //                             <td>{item?.title_en}</td>
    //                             <td>{item?.title_ar}</td>
    //                             <td>{formatDate(item?.createdAt)}</td>
    //                             <td>{formatDate(item?.updatedAt)}</td>
    //                             <td align="right">
    //                                 <button
    //                                     className="update-button"
    //                                     onClick={() =>
    //                                         viewBlogDetail(item?._id)
    //                                     }
    //                                 >
    //                                     <img src={view}></img>
    //                                 </button>
    //                                 <button
    //                                     className="update-button"
    //                                     onClick={() => updateHandler(item)}
    //                                 >
    //                                     <img src={edit}></img>
    //                                 </button>
    //                                 <button
    //                                     className="update-button"
    //                                     onClick={() => deleteHandler(item?._id)}
    //                                 >
    //                                     <img src={trash}></img>
    //                                 </button>
    //                             </td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             }
    //         </table>
    //     )
    // }, [blogs, isLoading])

    const setpath = () => {
        history.push('/create-blog')
    }

    const updateHandler = (item: any) => {
        history.push('/create-blog', {
            item,
        })
        localStorage.setItem('updateData', JSON.stringify(item))
    }

    const viewBlogDetail = (id: any) => {
        history.push(`/blog-detail?id=${id}`)
    }

    const getUserBlogs = () => {
        getBlogs(setBlogs, setLoading)
    }

    const deleteHandler = (id: any) => {
        deleteBlog(id, getUserBlogs)
    }

    useEffect(() => {
        getUserBlogs()
    }, [])

    return (
        <>
            <div className=" create-btn-container  f j-e  ">
                <button
                    className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                    onClick={setpath}
                >
                    Create
                </button>
            </div>

            {/* {blogList} */}

            <table className="table-container   custom-table-container">
                <thead className="table-head">
                    <tr>
                        <th align="left" className="custom-x-padding-left">
                            Title in English
                        </th>
                        <th align="left">Title in Arabic</th>
                        <th align="left">Posted Date</th>
                        <th align="left">Last Update</th>
                        <th align="right" style={{ paddingRight: '38px' }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                {isLoading ? (
                    <CustomLoader />
                ) : (
                    <tbody>
                        {blogs.length > 0 ? (
                            blogs?.map((item: any) => (
                                <tr key={item?._id}>
                                    <td>{item?.title_en}</td>
                                    <td>{item?.title_ar}</td>
                                    <td>{formatDate(item?.createdAt)}</td>
                                    <td>{formatDate(item?.updatedAt)}</td>
                                    <td align="right">
                                        <button
                                            className="update-button"
                                            onClick={() =>
                                                viewBlogDetail(item?._id)
                                            }
                                        >
                                            <img src={view}></img>
                                        </button>
                                        <button
                                            className="update-button"
                                            onClick={() => updateHandler(item)}
                                        >
                                            <img src={edit}></img>
                                        </button>
                                        <button
                                            className="update-button"
                                            onClick={() =>
                                                deleteHandler(item?._id)
                                            }
                                        >
                                            <img src={trash}></img>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <div>
                                <NoDataFound />
                            </div>
                        )}
                    </tbody>
                )}
            </table>
        </>
    )
}

export default ShowBlogs
