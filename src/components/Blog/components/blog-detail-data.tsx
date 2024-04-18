import React, { useState, useRef, useEffect } from 'react'
import profile from '../../../../images/pic-profile.png'
// import DOMPurify from 'dompurify'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import Wrapper from '@components/Wrapper'
import Footer from '@components/Footer/Footer'
import LastSection from '@components/LastSection/LastSection'
import {
    onWindowLoad,
    onFontsLoad,
    onWindowResize,
    pageScroll,
} from '../../../script'
import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import DOMPurify from 'dompurify'

const BlogDetailData = ({ data }: { data: any }) => {
    const history = useHistory()
    const isAdmin = localStorage.getItem('accessToken')
    const [toggle, setToggle] = useState(1)

    if (!isAdmin) {
        useEffect(() => {
            onWindowLoad()
            onFontsLoad()
            onWindowResize()
        }, [])

        useEffect(() => {
            function handleScroll() {
                pageScroll()
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [])
    }

    useEffect(() => {
        if (isAdmin) {
            if (data.title_en) {
                setToggle(1)
            } else {
                setToggle(2)
            }
        }
    }, [data])

    const lang = localStorage.getItem('lang')

    const setpath = () => {
        history.push('/blogs-list')
        // window.location.reload()
    }

    function createMarkup(html: any) {
        return {
            __html: DOMPurify.sanitize(html),
        }
    }

    function updatetoggle(id: any) {
        if (id === 1) {
            // setBlogData(blogF)
        } else {
            // setBlogData(blogR)
        }
        setToggle(id)
    }

    return (
        <>
            {isAdmin ? (
                <>
                    <div className=" light_bg    belog-data-container     ">
                        <div className=" f  s-b a-c ">
                            {
                                <div className="create-blogs-tabs-container ptb-40">
                                    <div className="create-tab-container">
                                        <div className="create-tab-links-conainer">
                                            <div className="createtabs">
                                                <div
                                                    className={`create-blogs-tabs ${
                                                        toggle === 1
                                                            ? 'create-blog-active-border '
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        updatetoggle(1)
                                                    }
                                                >
                                                    English
                                                </div>

                                                <div
                                                    className={`create-blogs-tabs ${
                                                        toggle === 2
                                                            ? 'create-blog-active-border '
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        updatetoggle(2)
                                                    }
                                                >
                                                    Arabic
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            <button
                                className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                                onClick={setpath}
                            >
                                Go Back
                            </button>
                        </div>
                        <div className="blog-detail-container">
                            <div className="blog-description">
                                <div className="blog-description-wrapper">
                                    <div
                                        className="blog-intro"
                                        id="introductiondata"
                                    >
                                        <div>
                                            {toggle === 1 ? (
                                                data?.description_en &&
                                                !/^<p><\/p>$/i.test(
                                                    data.description_en.trim()
                                                ) ? (
                                                    <div
                                                        dangerouslySetInnerHTML={createMarkup(
                                                            data?.description_en ||
                                                                ''
                                                        )}
                                                    />
                                                ) : (
                                                    <p>
                                                        Content Not Found In
                                                        English
                                                    </p>
                                                )
                                            ) : (
                                                ''
                                            )}

                                            {toggle === 2 ? (
                                                data?.description_ar &&
                                                !/^<p><\/p>$/i.test(
                                                    data.description_ar.trim()
                                                ) ? (
                                                    <div
                                                        dangerouslySetInnerHTML={createMarkup(
                                                            data?.description_ar ||
                                                                ''
                                                        )}
                                                    />
                                                ) : (
                                                    <p>
                                                        Content Not Found In
                                                        Arabic
                                                    </p>
                                                )
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className=" light_bg    belog-data-container     ">
                    <div className="blog-detail-container">
                        <div className="blog-description">
                            <div className="blog-description-wrapper">
                                {lang === 'en' ? (
                                    <div
                                        dangerouslySetInnerHTML={createMarkup(
                                            data?.description_en
                                        )}
                                    />
                                ) : (
                                    <div
                                        dangerouslySetInnerHTML={createMarkup(
                                            data?.description_ar
                                        )}
                                    />
                                )}
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogDetailData
