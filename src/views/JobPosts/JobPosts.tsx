import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import ShowCareersPosts from '@components/AdminComponents/CareersPosts/ShowCareersPosts/ShowCareersPosts'
import React from 'react'

const JobPosts = () => {
    return (
        <div>
            <div
                className="settings-heading-container"
                style={{
                    background: '#eae2d4',
                    paddingTop: '1.7rem',
                    paddingBottom: '1.7rem',
                }}
            >
                <AdminHeader heading={'Job Posts'} />
            </div>

            <section className="rounded_corners  ">
                {' '}
                <div className=" custom-inner-padding   light_bg f f-c x_padding">
                    <ShowCareersPosts />
                </div>
            </section>
        </div>
    )
}

export default JobPosts
