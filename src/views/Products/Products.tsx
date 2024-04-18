import CreateProduct from '@components/ProductComponents/CreateProduct/CreateProduct'
import React from 'react'
import './Product.css'
import ShowProduct from '@components/ProductComponents/ShowProduct/productPage'
import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'

const Products = () => {
    return (
        <section className="  ">
            <>
                <div
                    className="settings-heading-container"
                    style={{
                        background: '#eae2d4',
                        paddingTop: '1.7em',
                        paddingBottom: '1.7em',
                    }}
                >
                    <AdminHeader heading={'Products'} />
                </div>

                <div className="custom-inner-padding light_bg f f-c x_padding  ">
                    <ShowProduct />
                </div>
            </>
        </section>
    )
}

export default Products
