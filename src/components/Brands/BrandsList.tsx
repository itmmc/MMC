import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import React from 'react'
import ShowBrands from './ShowBrands'

const BrandsList = () => {
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
                <AdminHeader heading={'Flour Brands List'} />
            </div>

            <div className="custom-inner-padding light_bg f f-c x_padding">
                <ShowBrands />
            </div>
        </>
    )
}

export default BrandsList
