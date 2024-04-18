import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
// import Banner_2 from '../../../images/banner_2.webp'
import Banner_2 from '../../../images/banner_2.webp'

import { getSocialMediaData } from '../../../src/Links'
import HeaderLinks from '@components/HeaderLinks/HeaderLinks'
const AboutHero = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    return (
        <div className="main_hero short primary_bg f a-c">
            <div className="hero_cover full_bg dark_overlay parallax_wrap">
                <i
                    className="full_bg cover load_bg parallax"
                    data-src={Banner_2}
                    data-speed="0.9"
                ></i>
                {/* <img
                    // src="./images/banner_2.webp"
                    src={Banner_2}
                    className="full_bg cover load_bg parallax"
                    // width={'100%'}
                    height={200}
                    style={{
                        bottom: '0em',
                        top: '0em',
                        height: '-webkit-fill-available',
                    }}
                /> */}
            </div>

            <div className="social f f-c _ele">
                <HeaderLinks />
            </div>

            <div className="hero_content inner_padding x_padding f f-c s-b _eleWrap">
                <div className="bc f a-c">
                    <a href="/" className="_underline _eleX">
                        {t('homelabel')}
                    </a>

                    <svg
                        className="_eleX"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 5 18"
                    >
                        <path
                            fill="currentColor"
                            d="M.128 12.912a.287.287 0 0 1-.12-.241c0-.06.02-.141.08-.201l3.638-3.96L.088 4.53a.3.3 0 0 1 .02-.442.3.3 0 0 1 .442.02L4.41 8.29c.12.12.12.301 0 .422l-3.86 4.18c-.1.142-.301.142-.422.02Z"
                        />
                    </svg>

                    <span className="_eleX">{t('aboutuslabel')}</span>
                </div>

                <div className="hero_head f f-c a-s">
                    <h1 className="_eleY">{t('aboutMainHeading')}</h1>

                    <p className="_eleY">{t('aboutHeadingDes')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
