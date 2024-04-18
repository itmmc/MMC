import React from 'react'
import { useTranslation } from 'react-i18next'
import Insight_1 from '../../../images/insight_1.webp'
import Insight_2 from '../../../images/insight_2.webp'
import Insight_3 from '../../../images/insight_3.webp'
import { Link } from 'react-router-dom'

const AboutInSights = () => {
    const { t, i18n }: any = useTranslation()
    
    return (
        <div className="full_content side_padding inner_padding_half">
            <div className="form_sides f a-s x_padding _sticky_wrap">
                <div className="form_side _sticky _eleWrap">
                    <div className="form_content _eleY">
                        <h2>{t('FactoriesExeH')}</h2>
                    </div>
                </div>

                <div className="form_side">
                    <div className="insights_wrap f f-c _eleWrap a-j">
                        <div className="insight_block f small_fc _eleY">
                            <div className="insight_cover rounded_corners force parallax_wrap">
                                <i
                                    className="full_bg load_bg cover parallax"
                                    data-src={Insight_1}
                                    data-speed="0.97"
                                ></i>
                            </div>
                            <div className="insight_content f f-c a-s">
                                <h4>{t('Dedicationtoquality')}</h4>
                                <p>{t('DedicationtoqualityDesc')}</p>
                                <div
                                    className="site_button outlined interactive_label f a-c j-c _ele pointer scrollTo"
                                    data-scroll="journey"
                                >
                                    <strong className="_txt words">
                                        {t('lernmoreaboutus')}
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="insight_block f small_fc _eleY">
                            <div className="insight_cover rounded_corners force parallax_wrap">
                                <i
                                    className="full_bg load_bg cover parallax"
                                    data-src={Insight_2}
                                    data-speed="0.97"
                                ></i>
                            </div>
                            <div className="insight_content f f-c a-s">
                                <h4> {t('InnovationtoTecH')}</h4>
                                <p>{t('InnovationtoDesc')}</p>
                                <Link
                                    // href="contact.html"
                                    to="/contact"
                                    className="site_button outlined interactive_label f a-c j-c _ele"
                                    aria-label="Visit our plant"
                                >
                                    <strong className="_txt words">
                                        {t('visitourplant')}
                                    </strong>
                                </Link>
                            </div>
                        </div>

                        <div className="insight_block f small_fc _eleY">
                            <div className="insight_cover rounded_corners force parallax_wrap">
                                <i
                                    className="full_bg load_bg cover parallax"
                                    data-src={Insight_3}
                                    data-speed="0.97"
                                ></i>
                            </div>
                            <div className="insight_content f f-c a-s">
                                <h4>{t('customercentric')}</h4>
                                <p>{t('customercentricDesc')}</p>
                                <Link
                                    // href="careers.html"
                                    to="/careers"
                                    className="site_button outlined interactive_label f a-c j-c _ele scrollTo"
                                    data-scroll="Explore more"
                                >
                                    <strong className="_txt words">
                                        {t('exploremorelabel')}
                                    </strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInSights
