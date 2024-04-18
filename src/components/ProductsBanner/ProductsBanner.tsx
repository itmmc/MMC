import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Products_banner from '../../../images/products_banner.webp'
const ProductsBanner = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    return (
        <div className="pro_banner_wrap inner_padding x_padding f a-c j-c light_bg">
            <div className="pro_banner_sides f a-c s-b">
                <div className="pro_banner_side">
                    <div className="pro_banner_img">
                        <i
                            className="full_bg cover load_bg"
                            data-src={Products_banner}
                        ></i>
                    </div>
                </div>

                <div className="pro_banner_side f f-c a-s">
                    <div className="section_head f f-c a-s _eleWrap">
                        <h2 className="_mask">{t('ourproductlabel')}</h2>

                        <p className="_eleY a-j">
                            <strong>{t('ourproductlabelDes1')}</strong>
                        </p>
                    </div>

                    <p className="_eleY a-j">{t('ourproductlabelDes2')}</p>

                    <div className="cta_set f a-c">
                        <Link
                            to="/flourbrands"
                            className="site_button outlined interactive_label f a-c j-c _eleY"
                            aria-label="Flour Brands"
                        >
                            <strong className="_txt words">
                                {t('flourbrandslabel')}
                            </strong>
                        </Link>

                        <Link
                            to="/animalfeeds"
                            className="inline_link _underline interactive_label f a-c j-c _eleY"
                            aria-label="Animal Feeds Brand"
                        >
                            <strong className="_txt words">
                                {t('animalfeedbrands')}
                            </strong>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsBanner
