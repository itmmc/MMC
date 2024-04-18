import React from 'react'
import { useTranslation } from 'react-i18next'
import Side_1 from '../../../images/side_1.webp'
import { Link } from 'react-router-dom'
const Safety = ({ title, showLeaenMore }: any) => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="banner_sides_wrap f">
            <div className="banner_side parallax_wrap">
                <i
                    className="full_bg load_bg cover parallax"
                    data-src={Side_1}
                    data-speed="0.9"
                ></i>
            </div>

            <div className="banner_side light_brown_bg f a-c">
                <div className="banner_content f f-c a-s _eleWrap a-j">
                    <h2 className="_mask">{title}</h2>
                    <h5>
                        <strong className="_eleY ">{t('safetyDes1')}</strong>
                    </h5>
                    {t('safetyDes2') && (
                        <h5 className="_eleY a-j">
                            <strong className="font-w">
                                {t('safetyDes2')}
                            </strong>
                        </h5>
                    )}
                    {showLeaenMore && (
                        <Link
                            // href="about.html"
                            to="/about"
                            className="site_button outlined interactive_label f a-c j-c _eleY"
                            aria-label="Learn more"
                            onClick={() => window.scroll(0, 0)}
                        >
                            <strong className="_txt words">
                                {t('learnmorelabel')}
                            </strong>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Safety
