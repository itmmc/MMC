import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import Header from '@components/Navbar/header'
import ShowPrivacyPolicy from '@components/PrivacyPolicy/ShowPrivacyPolicy'
import React, { useEffect } from 'react'

import {
    pagesLoader,
    globals,
    onWindowLoad,
    onWindowResize,
    pageScroll,
    ceoMessage,
    journey,
} from '../script'
import Wrapper from '@components/Wrapper'
const PrivacyPolicy = () => {
    const isAdmin = localStorage.getItem('accessToken')
    // useEffect(() => {
    //     // pagesLoader()
    //     // globals()
    //     onWindowLoad()
    //     onWindowResize()
    //     // window.addEventListener('load', onWindowLoad)
    //     // window.addEventListener('resize', onWindowResize)

    //     // window.addEventListener('scroll', pageScroll)
    //     // return () => {
    //     //     window.removeEventListener('scroll', pageScroll)
    //     // }
    // }, [])
    return (
        <>
            {!isAdmin && <Header />}
            <>
                {/* <div
                    className="settings-heading-container"
                    style={{
                        background: '#eae2d4',
                        paddingTop: '1.7rem',
                        paddingBottom: '1.7rem',
                        // marginTop: `${!isAdmin ? '5%' : '0%'}`,
                    }}
                >
                    <AdminHeader heading={'Privacy Policy'} />
                </div> */}

                <ShowPrivacyPolicy />
            </>
        </>
    )
}

export default PrivacyPolicy
