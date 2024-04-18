import React from 'react'
import bloghero from '../../../../images/Blogdetailhero.png'
import '../../..//assets/stylesheets/blog.css'
import '../../..//assets/stylesheets/blog.scss'
import { useTranslation } from 'react-i18next'

const BlogDetailHero = ({ data }: any) => {
    const lang = localStorage.getItem('lang')

    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="main_hero short primary_bg f a-c dark_overlay custom-hero-short">
            <div
                className="hero_cover full_bg  parallax_wrap   blog-detail-background     "
                style={{ backgroundImage: `url(${data?.image})` }}
            >
                {/* <i
                    className="full_bg cover load_bg parallax  custom-hero-bg"
                    data-src={data?.image}
                    data-speed="0.9"
                ></i> */}
                {/* <img
                    className="full_bg cover load_bg parallax  custom-hero-bg"
                    src={data?.image}
                    data-speed="0.9"
                /> */}
            </div>

            <div className="hero_content inner_padding x_padding f f-c s-b j-c _eleWrap">
                <div className="hero_head f f-c a-s">
                    <h1 className="_eleY">
                        {' '}
                        {lang === 'en' ? data?.title_en : data?.title_ar}
                    </h1>
                    {/* <h1 className="_eleY"> {t('blogbannertitle')}</h1> */}

                    {/* <p className="_eleY">{t('blogdetailtitledesc')}</p> */}
                    <p className="_eleY">
                        {lang === 'en'
                            ? data?.shortDescription_en
                            : data?.shortDescription_ar}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailHero
