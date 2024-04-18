import React from 'react'
import { useTranslation } from 'react-i18next'
import Thumb_2 from '../../../../images/thumb_2.webp'
const AnimalFeedsIntro = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="intro_wrap x_padding inner_padding light_brown_bg f a-c j-c">
            <div className="thumb_set f small_fc _eleWrap">
                <div className="thumb_img _eleY rounded_corners force">
                    <i className="full_bg load_bg cover" data-src={Thumb_2}></i>
                </div>

                <div className="thumb_txt f a-s f-c a-j">
                    <h3 className="_eleY">{t('premierlabel')}</h3>
                    <p className="_eleY">{t('premierdes1')}</p>
                    <p className="_eleY">{t('premierdes2')}</p>
                </div>
            </div>
        </div>
    )
}

export default AnimalFeedsIntro
