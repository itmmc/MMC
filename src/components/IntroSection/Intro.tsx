import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Home_thumb from '../../../images/home_thumb.webp'
const Intro = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    return (
        <div className="x_padding light_bg f f-c">
            <div className="inner_padding_half f j-c">
                <div className="thumb_set f small_fc _eleWrap">
                    <div className="thumb_img _eleY rounded_corners force parallax_wrap">
                        <i
                            className="full_bg load_bg cover parallax"
                            data-src={Home_thumb}
                            data-speed="0.97"
                        ></i>
                    </div>

                    <div className="thumb_txt f a-s f-c">
                        <h3 className="_eleY"> {t('gettoknowusH')}</h3>
                        <p className="_eleY a-j">{t('gettoknowusDes')}</p>
                        <Link
                            to="/careers"
                            className="site_button outlined interactive_label f a-c j-c _eleY"
                            aria-label="Join us"
                        >
                            <strong className="_txt words">
                                {t('joinuslabel')}
                            </strong>
                        </Link>
                        {/* <a
                            href="careers.html"
                            className="site_button outlined interactive_label f a-c j-c _eleY"
                            aria-label="Join us"
                        >
                            <strong className="_txt words"> {t('joinuslabel')}</strong>
                        </a> */}
                    </div>
                </div>
            </div>

            <div className="equall_cols_wrap inner_padding_half f a-c j-c border_top">
                <div className={`equall_cols f a-s s-b small_fc ${currentLanguage === 'ar' && 'r-reverse'}`}>
                    <div className="equall_col _eleWrap f f-c">
                        <h3 className="_mask">{t('ourvisionH')}</h3>

                        <p className="_eleY a-j">{t('ourvisionDes')}</p>
                    </div>

                    <div className="equall_col _eleWrap f f-c">
                        <h3 className="_mask"> {t('Mlabel')}</h3>

                        <p className="_eleY a-j">{t('ourmissionDes')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
