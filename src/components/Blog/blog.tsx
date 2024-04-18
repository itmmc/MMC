import Header from '@components/Navbar/header'
import BlogBanner from './components/blog-banner'
import BlogCard from './components/blog-card'
import { getBlogs } from '../BlogComponents/action'
import React, { useEffect, useState } from 'react'
import {
    onWindowLoad,
    onFontsLoad,
    onWindowResize,
    pageScroll,
} from '../../script'
import { useTranslation } from 'react-i18next'
import '../../assets/stylesheets/blog.css'
import '../../assets/stylesheets/blog.scss'
// import LastSection from '@components/LastSection/LastSection'
import Wrapper from '@components/Wrapper'
import Footer from '@components/Footer/Footer2'
import LastSection from '@components/LastSection/LastSection2'

const blogF = [
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },

    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
]

const blogR = [
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },

    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
    {
        image: '../../../../images/blog-img.png',
        heading: 'Flours: A Comprehensive Guide',
        desc: 'Flour is a finely ground powder made from cereal grains, such as wheat, rye, corn, and oats.',
    },
]

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const { t, i18n }: any = useTranslation()
    const [toggle, setToggle] = useState(1)
    const [blogData, setBlogData] = useState(blogF)
    const [isLoading, setLoading] = useState(false)

    const lang = localStorage.getItem('lang')

    useEffect(() => {
        function handleScroll() {
            pageScroll()
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        onWindowLoad()
        onFontsLoad()
        onWindowResize()

        getBlogs(setBlogs, setLoading)
    }, [])

    function updatetoggle(id: any) {
        if (id === 1) {
            setBlogData(blogF)
        } else {
            setBlogData(blogR)
        }
        setToggle(id)
    }

    return (
        <>
            {/* <Header /> */}

            <Wrapper>
                <section className="rounded_corners      ">
                    <div
                        className="light_bg"
                        style={{ paddingTop: '70px', paddingBottom: '70px' }}
                    >
                        <BlogBanner />

                        <div className="Blogs-cards-wrapper">
                            <div className="  blog-cards-header-container   ptb-40  ">
                                <div className="tab-container">
                                    <div className="tab-links-conainer">
                                        <div className="tabs">
                                            <div
                                                className={`  blogs-tabs  blog-header-link-heading
                ${toggle === 1 ? 'active-border ' : ''}`}
                                                onClick={() => updatetoggle(1)}
                                            >
                                                {t('blogfeaturelabel')}
                                            </div>
                                            <div
                                                className={`  blogs-tabs    blog-header-link-heading
                ${toggle === 2 ? 'active-border ' : ' '}`}
                                                onClick={() => updatetoggle(2)}
                                            >
                                                {t('blogmostrecent')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <BlogCard
                                blogData={
                                    lang === 'en'
                                        ? blogs.filter(
                                              (x: any) => x.title_en !== ''
                                          )
                                        : blogs.filter(
                                              (x: any) => x.title_ar !== ''
                                          )
                                }
                            />
                        </div>
                    </div>
                    <LastSection />
                </section>
                {/* <Footer /> */}
            </Wrapper>
        </>
    )
}

export default Blogs
