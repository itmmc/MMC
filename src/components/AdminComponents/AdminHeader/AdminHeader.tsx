import React from 'react'
import { useState } from 'react'
import SideNav from '../SideNav/SideNav'

import menu from '../../../../images/menu.png'

const AdminHeader = (props: any) => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen)
    }

    const closeNav = () => {
        setIsSideNavOpen(false)
    }

    const sideOffStyle = {
        left: isSideNavOpen ? '0px' : '-300px', // Toggle the left position
    }
    return (
        <>
            <div className="side-off    h-100" style={sideOffStyle}>
                <SideNav />
            </div>

            <div
                className="categories-heading  f s-b    "
                style={{
                    padding: '0em 2rem',
                }}
            >
                <h6 className="_txt words"> {props.heading}</h6>
                <div className="toggle-btn" onClick={toggleSideNav}>
                    <img src={menu}></img>
                </div>
            </div>
        </>
    )
}

export default AdminHeader
