import React from 'react'
import { useTranslation } from 'react-i18next'
import Certificate_1 from '../../../images/certificate_1.webp'
import Certificate_2 from '../../../images/certificate_2.webp'
import Certificate_3 from '../../../images/certificate_3.webp'
import Certificate_4 from '../../../images/certificate_4.webp'
const Certificate = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="inner_padding_half light_bg f f-c x_padding">
            <div className="section_wrap f f-c">
                <div className="section_head f f-c a-s _eleWrap">
                    <h2 className="_mask">{t('certificateMH')}</h2>
                    <p className="_eleY">{t('certificateMHDes')}</p>
                </div>

                <div className="section_body">
                    <div className="cols_wrap f _eleWrap">
                        <a
                            href="https://mmc.originmena.com/files/certificate_1.pdf"
                            className="col_set rounded_corners force shades_bg _eleX"
                            target="_blank"
                            aria-label="PDF"
                        >
                            <i
                                className="full_bg load_bg cover"
                                data-src={Certificate_1}
                            ></i>
                        </a>

                        <a
                            href="https://mmc.originmena.com/files/certificate_2.pdf"
                            className="col_set rounded_corners force shades_bg _eleX"
                            target="_blank"
                            aria-label="PDF"
                        >
                            <i
                                className="full_bg load_bg cover"
                                data-src={Certificate_2}
                            ></i>
                        </a>

                        <a
                            href="https://mmc.originmena.com/files/certificate_3.pdf"
                            className="col_set rounded_corners force shades_bg _eleX"
                            target="_blank"
                            aria-label="PDF"
                        >
                            <i
                                className="full_bg load_bg cover"
                                data-src={Certificate_3}
                            ></i>
                        </a>

                        <a
                            href="https://mmc.originmena.com/files/certificate_4.pdf"
                            className="col_set rounded_corners force shades_bg _eleX"
                            target="_blank"
                            aria-label="PDF"
                        >
                            <i
                                className="full_bg load_bg cover"
                                data-src={Certificate_4}
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate
