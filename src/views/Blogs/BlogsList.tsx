import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import ShowBlogs from '@components/BlogComponents/BlogPage'
import React, { useEffect } from 'react'

const BlogsList = () => {
    return (
        <>
            <div
                className="settings-heading-container"
                style={{
                    background: '#eae2d4',
                    paddingTop: '1.7rem',
                    paddingBottom: '1.7rem',
                }}
            >
                <AdminHeader heading={'Blogs List'} />
            </div>

            <div className="custom-inner-padding light_bg f f-c x_padding">
                <ShowBlogs />
            </div>
        </>
    )
}

export default BlogsList
