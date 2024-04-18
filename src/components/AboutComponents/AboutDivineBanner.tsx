import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner_3 from '../../../images/banner_3.webp'
const AboutDivineBanner = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="section_wrap full_page primary_bg">
            <div className="full_bg parallax_wrap dark_overlay">
                <i
                    className="full_bg load_bg cover parallax"
                    data-src={Banner_3}
                    data-speed="0.9"
                ></i>
            </div>

            <div className="full_content x2_padding inner_padding f a-e j-e a-j">
                <div className="txt_group f f-c a-s _eleWrap">
                    <p className="_eleY">{t('DivineShortH')}</p>
                    <h2 className="_eleY">{t('DivineH')}</h2>
                    <p className="_eleY">{t('DivineDesc')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutDivineBanner
