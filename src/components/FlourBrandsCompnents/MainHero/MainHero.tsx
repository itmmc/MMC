import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner_4 from '../../../../images/banner_4.webp'
import Banner_4_ar from '../../../../images/banner_4_ar.webp'
const MainHero = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    const lang = localStorage.getItem('lang')
    return (
        <div className="main_hero short f a-c">
            <div className="hero_cover full_bg has_fog">
                {lang === 'en' ? (
                    <i
                        className="full_bg cover load_bg"
                        data-src={Banner_4}
                    ></i>
                ) : (
                    <i
                        className="full_bg cover load_bg"
                        data-src={Banner_4_ar}
                    ></i>
                )}

                {/* <i className="full_bg cover load_bg" data-src={Banner_4}></i> */}
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

                    <span className="_eleX">{t('flourbrandslabel')}</span>
                </div>

                <div className="hero_head f f-c a-s a-j">
                    <h1 className="_eleY">{t('flourbrandslabel')}</h1>

                    <p className="_eleY">{t('flourBrandbannerDes')}</p>
                </div>
            </div>
        </div>
    )
}

export default MainHero
