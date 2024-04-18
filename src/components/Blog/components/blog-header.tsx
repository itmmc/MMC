import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const BlogHeader = () => {
    const [toggle, setToggle] = useState(1)
    // const [blogData, setBlogData] = useState(blogF)
    const { t, i18n }: any = useTranslation()
    const lang = localStorage.getItem('lang')

    // function updatetoggle(id: any) {
    //     if (id === 1) {
    //       setBlogData(blogF)
    //     } else {
    //       setBlogData(blogR)
    //     }
    //     setToggle(id)
    //   }
    return (
        <div className="  inner-detail-container   ">
            <div className="tab-container">
                <div className="product-detail-section">
                    <div className="tab-container">
                        <div className="tab-links-conainer">
                            <div className="tabs">
                                <div
                                    className={`fs-15 pt-10 
                //   ${toggle === 1 ? 'active-border activebg' : ''}`}
                                    // onClick={() => updatetoggle(1)}
                                >
                                    {t('feature')}
                                </div>
                                <div
                                    className={`fs-15 pt-10  
                  ${toggle === 2 ? 'active-border activebg' : ' '}`}
                                    // onClick={() => updatetoggle(2)}
                                >
                                    {t('recent')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader
