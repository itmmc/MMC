import CompanyInfo from '@components/AdminComponents/SettingsComponent/CompanyInfo/CompanyInfo'
import Logo from '@components/AdminComponents/SettingsComponent/LogoSettings/Logo'
import MainVideo from '@components/AdminComponents/SettingsComponent/MainVideo/MainVideo'
import SocialMedia from '@components/AdminComponents/SettingsComponent/SocialMedia/SocialMedia'
import SideNav from '@components/AdminComponents/SideNav/SideNav'
import React, { useEffect } from 'react'
import { useState } from 'react'

import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import {
    pagesLoader,
    globals,
    onWindowLoad,
    onWindowResize,
    pageScroll,
    ceoMessage,
    journey,
} from '../../script'
import ChangePassword from '@components/AdminComponents/SettingsComponent/ChangePassword/ChangePassword'
const GeneralSettings = () => {
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
            <section className=" light_bg ">
                <div
                    className="settings-heading-container"
                    style={{
                        background: '#eae2d4',
                        paddingTop: '1.7rem',
                        paddingBottom: '1.7rem',
                    }}
                >
                    <AdminHeader heading={'General Settings'} />
                </div>

                <div
                    className=" light_bg f f-c "
                    style={{ padding: '0em 2rem' }}
                >
                    <CompanyInfo />
                    <Logo />
                    {/* <MainVideo /> */}
                    <SocialMedia />
                    <ChangePassword />
                </div>
            </section>
        </>
    )
}

export default GeneralSettings
