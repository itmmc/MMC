import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

const AnimalFeeds = ({
    animalFeedProducts_ar,
    animalFeedProducts_en,
    productLoading,
}: any) => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    const lang = localStorage.getItem('lang')

    const history = useHistory()

    const viewdata = (item: any) => {
        history.push(`/productdetail?id=${item}`)
    }

    return (
        <>
            {!productLoading ? (
                Object.keys(
                    lang === 'en'
                        ? animalFeedProducts_en
                        : animalFeedProducts_ar
                ).map((category: any) => (
                    <div
                        className="products_section f f-c"
                        id={category}
                        key={category}
                    >
                        <div className="section_head">
                            <h3 className="_mask"> {category}</h3>
                            {/* <h3 className="_mask"> {t('Livestockfeedlabel')}</h3> */}
                        </div>

                        <div className="products_cols f f-w a-s">
                            {lang === 'en'
                                ? animalFeedProducts_en[category].map(
                                      (product: any) => (
                                          <div
                                              key={product._id}
                                              //   onClick={() => {
                                              //       viewdata(product._id)
                                              //   }}
                                              className="product_card rounded_corners hover_opacity force"
                                          >
                                              <div className=" full_bg transit-all">
                                                  <i
                                                      className="cover full_bg load_bg"
                                                      // data-src={product.image}
                                                      style={{
                                                          backgroundImage: `url(${product.image})`,
                                                      }}
                                                  ></i>
                                              </div>
                                              <div className="p_col_content transit-all full_bg f f-c">
                                                  <div className="p_content_top">
                                                      <h6 className="f f-c">
                                                          {product?.feedBrand_en ? (
                                                              product?.feedBrand_en
                                                                  .split(',')
                                                                  .map(
                                                                      (
                                                                          x: any
                                                                      ) => (
                                                                          <strong>
                                                                              {
                                                                                  x
                                                                              }
                                                                          </strong>
                                                                      )
                                                                  )
                                                          ) : (
                                                              <strong>
                                                                  {
                                                                      product?.name_en
                                                                  }
                                                              </strong>
                                                          )}
                                                          <strong>
                                                              {!product?.feedBrand_en &&
                                                                  product.weight}
                                                          </strong>
                                                      </h6>
                                                  </div>
                                              </div>
                                          </div>
                                      )
                                  )
                                : animalFeedProducts_ar[category].map(
                                      (product: any) => (
                                          <div
                                              key={product._id}
                                              //   onClick={() =>
                                              //       viewdata(product._id)
                                              //   }
                                              className="product_card rounded_corners hover_opacity force"
                                          >
                                              <div className=" full_bg transit-all">
                                                  <i
                                                      className="cover full_bg load_bg"
                                                      // data-src={product.image}
                                                      style={{
                                                          backgroundImage: `url(${product.image})`,
                                                      }}
                                                  >
                                                      {/* <img src={product.image} /> */}
                                                  </i>
                                              </div>
                                              <div className="p_col_content transit-all full_bg f f-c">
                                                  <div className="p_content_top">
                                                      <h6 className="f f-c">
                                                          {product?.feedBrand_ar ? (
                                                              product?.feedBrand_ar
                                                                  .split(',')
                                                                  .map(
                                                                      (
                                                                          x: any
                                                                      ) => (
                                                                          <strong>
                                                                              {
                                                                                  x
                                                                              }
                                                                          </strong>
                                                                      )
                                                                  )
                                                          ) : (
                                                              <strong>
                                                                  {
                                                                      product?.name_ar
                                                                  }
                                                              </strong>
                                                          )}
                                                          <strong>
                                                              {!product?.feedBrand_ar &&
                                                                  product.weight}
                                                          </strong>
                                                      </h6>
                                                  </div>
                                              </div>
                                          </div>
                                      )
                                  )}
                        </div>
                    </div>
                ))
            ) : (
                <div className="products_section f f-c" id="live-stock">
                    <div className="section_head">
                        <h3 className="_mask"> {}</h3>
                    </div>

                    <div className="products_cols f f-w a-s">
                        {[1, 2, 3].map((item: any, index: any) => (
                            <div
                                key={index}
                                className="product_card rounded_corners hover_opacity force"
                            >
                                <div className=" full_bg transit-all">
                                    <i
                                        className="cover full_bg load_bg"
                                        data-src={''}
                                    ></i>
                                </div>
                                <div className="p_col_content transit-all full_bg f f-c">
                                    <div className="p_content_top">
                                        <h6 className="f f-c">
                                            <span>{'name'}</span>
                                            <strong>{'weight'}</strong>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default AnimalFeeds
