import React, { useEffect, useState } from 'react'
import { onWindowLoad, onWindowResize, onFontsLoad } from '../../script'
import LastSection from '@components/LastSection/LastSection'
import BlogDetailHero from './components/blog-detail-hero'
import '../../assets/stylesheets/app.css'
import BlogDetailData from './components/blog-detail-data'
import { useLocation } from 'react-router-dom'
import { getBlogById } from '@components/BlogComponents/action'
import Wrapper from '@components/Wrapper'
import Footer from '@components/Footer/Footer2'
import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'

function BlogDetail() {
    const [data, setData] = useState<any>({})

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')

    const isAdminRoute = localStorage.getItem('accessToken')

    if (!isAdminRoute) {
        useEffect(() => {
            onWindowLoad()
            onFontsLoad()
            onWindowResize()
        }, [])
    }

    useEffect(() => {
        if (id) {
            getBlogById(id, setData)
        }
    }, [])

    return (
        <>
            {isAdminRoute ? (
                <>
                    <div
                        className=""
                        style={{
                            background: '#faf4ea',
                            paddingTop: '1.7rem',
                            paddingBottom: '1.7rem',
                        }}
                    >
                        <AdminHeader heading={'Belogs  Detail'} />
                    </div>

                    {!isAdminRoute && <BlogDetailHero data={data} />}
                    <BlogDetailData data={data} />
                    {!isAdminRoute && <LastSection />}
                </>
            ) : (
                <Wrapper>
                    <section
                        className={!isAdminRoute ? 'rounded_corners' : ''}
                        style={{
                            overflow: `${isAdminRoute ? 'scroll' : ''}`,
                            height: `${isAdminRoute ? '100vh' : ''}`,
                        }}
                    >
                        {!isAdminRoute && <BlogDetailHero data={data} />}
                        <BlogDetailData data={data} />
                        {!isAdminRoute && <LastSection />}
                    </section>
                </Wrapper>
            )}
        </>
    )
}

export default BlogDetail
