import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import baseUrl from '../../../../ApiFile'
import './ViewCareerPosts.css'
import CustomLoader from '@components/CustomLoader'
import { getPostsbyid } from '../actionfile'

const ViewCareerPosts = () => {
    const [postData, setPostData] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const id = queryParams.get('id')

    useEffect(() => {
        if (id) {
            getPostsbyid(id, setIsLoading, setPostData)
        }
    }, [])

    const history = useHistory()

    const setpath = () => {
        history.push('/jobposts')
    }

    return (
        <div>
            {isLoading ? (
                <CustomLoader />
            ) : (
                <div>
                    <div className="f s-b  a-c ptb  header-wrapper">
                        <div>
                            {' '}
                            <h4 className="">
                                Opening Job Post <br />
                            </h4>
                        </div>

                        <div className="Create-Category-btn      ">
                            <div
                                className="primary_bg custom-btn interactive_label f a-c j-c "
                                aria-label="Contact"
                            >
                                <strong
                                    className="_txt words"
                                    onClick={setpath}
                                >
                                    {' '}
                                    Go Back
                                </strong>
                            </div>
                        </div>
                    </div>

                    <div className="View-Wrapper">
                        <div className="card-wrapper">
                            <h2 className="job-heading">Job Titles:</h2>
                            <div className="title-wrapper">
                                <div className="title title-desc">
                                    {postData?.jobTitle_en}
                                </div>
                                <div className="title title-desc">
                                    {postData?.jobTitle_ar}
                                </div>
                            </div>

                            <h2 className="job-heading">Job Type:</h2>
                            <div className="title-wrapper">
                                <div className="title title-desc">
                                    {postData?.type_en}
                                </div>
                                <div className="title title-desc">
                                    {postData?.type_ar}
                                </div>
                            </div>

                            <h2 className="job-heading">Job Locations:</h2>
                            <div className="title-wrapper">
                                <div className="title title-desc">
                                    {postData?.location_en}
                                </div>
                                <div className="title title-desc">
                                    {postData?.location_ar}
                                </div>
                            </div>

                            <h2 className="job-heading">Job Post Link:</h2>
                            <div className="title-wrapper">
                                <div className="title title-desc">
                                    {postData?.jobPostLink}
                                </div>
                            </div>

                            {/* <h2 className="job-heading">Job Descriptions:</h2>
                            <div className="title-wrapper">
                                <div className="title title-desc">
                                    {postData?.jobDescription_en}
                                </div>
                            </div>

                            <div className="title-wrapper">
                                <div className="title title-desc">
                                    {postData?.jobDescription_ar}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ViewCareerPosts
