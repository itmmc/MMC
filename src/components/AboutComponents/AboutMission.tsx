import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutMission = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="x_padding primary_bg f f-c">
            <div className="equall_cols_wrap inner_padding f a-c j-c">
                <div className="equall_cols f a-s s-b small_fc">
                    <div className="equall_col _eleWrap f f-c">
                        <h3 className="_mask">{t('ourvisionH')}</h3>

                        <p className="_eleY a-j">{t('ourvisionDes')}</p>
                    </div>

                    <div className="equall_col _eleWrap f f-c">
                        <h3 className="_mask">{t('Mlabel')}</h3>

                        <p className="_eleY a-j">{t('ourmissionDes')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMission
