import React from 'react'
import { useTranslation } from 'react-i18next'
import Card_1 from '../../../images/card_1.webp'
import Card_2 from '../../../images/card_2.webp'
import Card_3 from '../../../images/card_3.webp'
import Card_4 from '../../../images/card_4.webp'
import Card_5 from '../../../images/card_5.webp'
import Card_6 from '../../../images/card_6.webp'

const AboutJourney = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    return (
        <div
            className="journey_wrap x_padding light_brown_bg f f-c"
            id="journey"
        >
            <div className="journey_container inner_padding full_page force">
                <div className="section_head f f-c a-s _eleWrap">
                    <h2 className="_mask">The MMC Journey</h2>
                </div>

                <div className="full_bg f a-c j-c">
                    <div className="journey_set">
                        <div className="journey_year_set">
                            <div className="journey_year_static">
                                <div className="journey_year">
                                    <strong id="getYear">1982</strong>
                                </div>
                            </div>

                            <div className="journey_year_slider f f-c a-c j-c">
                                <div className="journey_year">
                                    <strong>1982</strong>
                                </div>
                                <div className="journey_year">
                                    <strong>2008</strong>
                                </div>
                                <div className="journey_year">
                                    <strong>2015</strong>
                                </div>
                                <div className="journey_year">
                                    <strong>2016</strong>
                                </div>
                                <div className="journey_year">
                                    <strong>2021</strong>
                                </div>
                                <div className="journey_year">
                                    <strong>2022</strong>
                                </div>
                            </div>
                        </div>

                        <div className="journey_animate">
                            <div className="journey_cards f a-s _eleWrap a-j">
                                <div
                                    className="journey_card f f-c"
                                    data-year="1982"
                                >
                                    <div className="journey_card_img rounded_corners force">
                                        <i
                                            className="full_bg load_bg cover"
                                            data-src={Card_1}
                                        ></i>
                                    </div>
                                    <p>{t('GFSAKhameesMoshiet')}</p>
                                    <p>{t('GFSAKhameesMoshietDes1')}</p>
                                    <p>{t('GFSAKhameesMoshietDes2')}</p>
                                </div>

                                <div
                                    className="journey_card f f-c"
                                    data-year="2008"
                                >
                                    <div className="journey_card_img rounded_corners force">
                                        <i
                                            className="full_bg load_bg cover"
                                            data-src={Card_2}
                                        ></i>
                                    </div>
                                    <p>{t('GFSAAlJawf')}</p>
                                    <p>{t('GFSAAlJawfDes1')}</p>
                                </div>

                                <div
                                    className="journey_card f f-c"
                                    data-year="2015"
                                >
                                    <div className="journey_card_img rounded_corners force">
                                        <i
                                            className="full_bg load_bg cover"
                                            data-src={Card_3}
                                        ></i>
                                    </div>
                                    <p>{t('GFSAAlJumom')}</p>
                                    <p>{t('GFSAAlJumomDes1')}</p>
                                    <p>{t('GFSAAlJumomDes2')}</p>
                                </div>

                                <div
                                    className="journey_card f f-c"
                                    data-year="2016"
                                >
                                    <div className="journey_card_img rounded_corners force">
                                        <i
                                            className="full_bg load_bg cover"
                                            data-src={Card_4}
                                        ></i>
                                    </div>
                                    <p>{t('CouncilMininster')}</p>
                                </div>

                                <div
                                    className="journey_card f f-c"
                                    data-year="2021"
                                >
                                    <div className="journey_card_img rounded_corners force">
                                        <i
                                            className="full_bg load_bg cover"
                                            data-src={Card_5}
                                        ></i>
                                    </div>
                                    <p>{t('KSAAcq')}</p>
                                </div>

                                <div
                                    className="journey_card f f-c"
                                    data-year="2022"
                                >
                                    <div className="journey_card_img rounded_corners force">
                                        <i
                                            className="full_bg load_bg cover"
                                            data-src={Card_6}
                                        ></i>
                                    </div>
                                    <p>{t('ModernMillsManufacturer')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutJourney
