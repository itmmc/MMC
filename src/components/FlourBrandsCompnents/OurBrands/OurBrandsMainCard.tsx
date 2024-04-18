import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getBrands } from '@views/Brands/action'

const OurBrandsMainCard = () => {
    const { t, i18n }: any = useTranslation()
    const [brandData, setBrandsData] = useState<any>([])
    const [isLoading, setLoading] = useState(true)

    const history = useHistory()
    const lang = localStorage.getItem('lang')

    const viewdata = (routeUrl: any) => {
        history.push(`${routeUrl}`)
    }

    useEffect(() => {
        getBrands(setBrandsData, setLoading)
    }, [])

    // useEffect(() => {
    //     if (!isLoading && brandData.length === 0) {
    //         getBrands(setBrandsData, setLoading)
    //     }
    // }, [isLoading])

    return (
        <div className="inner_padding light_bg f f-c x_padding">
            <div className="section_wrap f f-c">
                <div className="section_head f f-c a-s _eleWrap">
                    <h2 className="_mask">{t('ourbrandslabel')}</h2>
                </div>
                <div className="section_body">
                    <div className="products_cols f a-s">
                        {!isLoading
                            ? brandData
                                  .filter(
                                      (brand: any) =>
                                          brand.name !== 'Animal Feeds Brand'
                                  )
                                  .map((brand: any, index: any) => (
                                      <div
                                          key={index}
                                          onClick={() => {
                                              const b_name =
                                                  lang === 'en'
                                                      ? brand.name
                                                      : brand.name_ar
                                              viewdata(
                                                  `qoot-and-root?brand_en=${brand.name}&brand_ar=${brand.name_ar}`
                                              )
                                          }}
                                          className="brand_card rounded_corners force"
                                      >
                                          <div className=" full_bg">
                                              <i
                                                  className="cover full_bg load_bg"
                                                  style={{
                                                      backgroundImage: `url(data:image/jpeg;base64,${brand?.image})`,
                                                  }}
                                              ></i>
                                          </div>
                                      </div>
                                  ))
                            : [1, 2, 3].map((brand: any, index: any) => (
                                  <div
                                      key={index}
                                      // onClick={() => {
                                      //     const b_name = lang === 'en' ? brand.name : brand.name_ar;
                                      //     viewdata(`qoot-and-root?brand=${b_name}`);
                                      // }}
                                      className="brand_card rounded_corners force"
                                  >
                                      <div className="p_col_cover full_bg">
                                          <i
                                              className="cover full_bg load_bg"
                                              // style={{backgroundImage: `url(data:image/jpeg;base64,${brand?.image})`}}
                                          ></i>
                                      </div>
                                  </div>
                              ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBrandsMainCard
