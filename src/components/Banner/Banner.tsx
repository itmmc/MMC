import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner_1 from '../../../images/banner_1.webp'
const Banner = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <section className="full_screen primary_bg pull_up">
            <div className="full_bg parallax_wrap dark_overlay">
                <i
                    className="full_bg load_bg cover parallax"
                    data-src={Banner_1}
                    data-speed="0.9"
                ></i>
            </div>

            <div className="full_content x2_padding inner_padding_half f a-e j-e">
                <div className="txt_group f f-c a-s _eleWrap">
                    <h2 className="_eleY">{t('homebannerH')}</h2>
                    <h5 className="_eleY a-j">
                        <strong>{t('homebannerDes')}</strong>
                    </h5>
                </div>
            </div>
        </section>
    )
}

export default Banner
