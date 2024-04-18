import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseUrl from '../../../../ApiFile'
import trash from '../../../../../images/delete.png'
import edit from '../../../../../images/edit.png'
import view from '../../../../../images/visibility.png'
import CustomLoader from '@components/CustomLoader'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getPosts, deleteposts } from '../actionfile'
import NoDataFound from '@components/NoDataFound/NoDataFound'

const ShowCareersPosts = () => {
    const history = useHistory()
    const [postData, setPostData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getPosts(setIsLoading, setPostData)
    }, [])

    const setpath = () => {
        history.push('/createcareersposts')
    }

    const viewpath = (id: any) => {
        history.push(`/viewcareerposts?id=${id}`)
    }

    const updatepath = (id: any) => {
        history.push(`/createcareersposts?id=${id}`)
    }

    const deleteHandler = (id: string) => {
        const isConfirmed = window.confirm(
            'Are you sure you want to delete Job Posts'
        )
        if (isConfirmed) {
            deleteposts(id, setIsLoading)
        }
    }
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

            <table className="table-container  custom-table-container">
                <thead className="table-head">
                    <tr>
                        <th align="left" className="custom-x-padding-left">
                            Title English
                        </th>
                        <th align="left"> Title Arabic</th>
                        <th align="left"> Type English</th>
                        <th align="left"> Type Arabic</th>

                        <th align="right" style={{ paddingRight: '38px' }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                {isLoading ? (
                    <CustomLoader />
                ) : (
                    <tbody>
                        {postData.length > 0 ? (
                            postData.map((item: any) => {
                                if (item.name !== 'Animal Feeds item') {
                                    return (
                                        <tr key={item?._id}>
                                            <td>{item.jobTitle_en}</td>
                                            <td align="left">
                                                {item.jobTitle_ar}
                                            </td>
                                            {/* <td>{it}</td> */}
                                            <td align="left">{item.type_en}</td>
                                            <td align="left">{item.type_ar}</td>
                                            <td align="right">
                                                <button
                                                    className="update-button"
                                                    onClick={() =>
                                                        viewpath(item?._id)
                                                    }
                                                >
                                                    <img
                                                        src={view}
                                                        alt="View"
                                                    ></img>
                                                </button>
                                                <button
                                                    className="update-button"
                                                    onClick={() =>
                                                        updatepath(item._id)
                                                    }
                                                >
                                                    <img
                                                        src={edit}
                                                        alt="Edit"
                                                    ></img>
                                                </button>
                                                <button
                                                    className="update-button"
                                                    onClick={() =>
                                                        deleteHandler(item?._id)
                                                    }
                                                >
                                                    <img
                                                        src={trash}
                                                        alt="Delete"
                                                    ></img>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
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

export default ShowCareersPosts
