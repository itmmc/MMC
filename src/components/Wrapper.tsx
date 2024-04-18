import React, { useState, useRef, useEffect } from 'react'
import Footer from './Footer/Footer'
import Header from './Navbar/header'

import { PathChangeHandler } from 'src/Global_Function'

const Wrapper: React.FC<any> = ({ hideFooter, children }: any) => {
    const isAdminRoute = localStorage.getItem('accessToken')
    return (
        <>
            {!isAdminRoute && <Header />}

            <div id="smooth-wrapper" style={{ visibility: 'hidden' }}>
                <div
                    id="smooth-content"
                    style={{
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform:
                            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                        boxSizing: 'border-box',
                        width: '100%',
                        overflow: 'visible',
                    }}
                >
                    <main>{children}</main>
                    {!isAdminRoute && !hideFooter && <Footer />}
                </div>
            </div>
        </>

        // <div id="smooth-wrapper" style={{ visibility: 'hidden' }}>
        //     <div
        //         id="smooth-content"
        //         style={{
        //             translate: 'none',
        //             rotate: 'none',
        //             scale: 'none',
        //             transform:
        //                 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        //             boxSizing: 'border-box',
        //             width: '100%',
        //             overflow: 'visible',
        //         }}
        //     >
        //         <main>{children}</main>
        //         <Footer />

        //     </div>
        // </div>
    )
}

export default Wrapper
