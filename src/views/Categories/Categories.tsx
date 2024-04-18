import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Categories.css'

import CategoriesPage from '@components/CategoriesComponents/Categories Page/CategoriesPage'
import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'

const Categories = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    // useEffect(() => {
    //     onWindowLoad()
    //     onWindowResize()
    // }, [])

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
                <AdminHeader heading={'Categories'} />
            </div>

            <div className=" custom-inner-padding  light_bg f f-c x_padding">
                <CategoriesPage />
            </div>
        </>
    )
}

export default Categories
