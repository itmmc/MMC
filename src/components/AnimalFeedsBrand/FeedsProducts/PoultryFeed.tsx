// import React from 'react'
import { useTranslation } from 'react-i18next'

const PoultryFeed = ({ poultryFeedItems }: any) => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="products_section f f-c" id="poultry">
            <div className="section_head">
                <h3 className="_mask"> {t('poultrheadlabel')}</h3>
            </div>

            <div className="products_cols f f-w a-s">
                {poultryFeedItems.map((item: any, index: any) => (
                    <div
                        key={index}
                        className="product_card rounded_corners hover_opacity force"
                    >
                        <div className="p_col_cover full_bg transit-all">
                            <i
                                className="cover full_bg load_bg"
                                data-src={item.imageSrc}
                            ></i>
                        </div>
                        <div className="p_col_content transit-all full_bg f f-c">
                            <div className="p_content_top">
                                <h6 className="f f-c">
                                    {item.feedTypes.map(
                                        (feedType: any, idx: any) => (
                                            <span key={idx}>{feedType}</span>
                                        )
                                    )}
                                    <strong>{item.weight}</strong>
                                </h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PoultryFeed
