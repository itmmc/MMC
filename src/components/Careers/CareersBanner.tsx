import React from 'react'
import Banner_7 from '../../../images/banner_7.webp'
const CareersBanner = () => {
    return (
        <div className="section_wrap full_page primary_bg">
            <div className="full_bg parallax_wrap">
                <i
                    className="full_bg load_bg cover parallax"
                    data-src={Banner_7}
                    data-speed="0.9"
                ></i>
            </div>
        </div>
    )
}

export default CareersBanner
