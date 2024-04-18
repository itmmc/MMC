import Loader from '@components/Loader/loader'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import React, { useEffect, useState } from 'react'
import '../LoadingSpinner/LoadingSpinner.css'

import { useHistory } from 'react-router-dom'
import { Console } from 'console'
import { products } from 'src/script'
const ProductCardPages = ({
    flourProducts_en,
    flourProducts_ar,
    productLoading,
    selectedBrand,
}: any) => {
    const [lang, setLang] = useState(localStorage.getItem('lang'))
    const history = useHistory()
    const [Classactive, setClassActive] = useState(0)

    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
    }

    const viewdata = (item: any) => {
        history.push(`/productdetail?id=${item}`)
        // reloadPage(`/productdetail?id=${item}`)
    }

    useEffect(() => {
        setLang(localStorage.getItem('lang'))
    }, [localStorage.getItem('lang')])

    function toggleactive(id: any) {
        setClassActive(id)
    }
    return (
        <div className="products_cols f f-w a-s">
            {!productLoading && selectedBrand
                ? lang === 'en'
                    ? Object.keys(flourProducts_en).map((brand: any) =>
                          Object.keys(flourProducts_en[brand]).map(
                              (category: any) =>
                                  flourProducts_en[brand][category].map(
                                      (product: any) => {
                                          return (
                                              <div
                                                  key={product?._id}
                                                  onClick={() =>
                                                      viewdata(product?._id)
                                                  }
                                                  className={`product_card rounded_corners force`}
                                                  data-cat={category
                                                      ?.match(/[A-Za-z]+/g)
                                                      ?.join('')
                                                      ?.toLowerCase()}
                                                  data-brand={brand
                                                      ?.match(/[A-Za-z]+/g)
                                                      ?.join('')
                                                      ?.toLowerCase()}
                                                  onMouseEnter={() =>
                                                      toggleactive(product._id)
                                                  }
                                                  onMouseLeave={() =>
                                                      toggleactive(0)
                                                  }
                                              >
                                                  <div className=" full_bg">
                                                      <i
                                                          className="cover full_bg load_bg"
                                                          style={{
                                                              backgroundImage: `url(${product?.image})`,
                                                          }}
                                                      ></i>
                                                  </div>

                                                  <div
                                                      className={`p_col_content transit-all full_bg f f-c  ${
                                                          Classactive ===
                                                          product._id
                                                              ? ' custom-detail-show '
                                                              : ''
                                                      }`}
                                                  >
                                                      <div className="p_content_top">
                                                          <h6 className="f f-c">
                                                              <strong>
                                                                  {product.nameHeading_en
                                                                      ? product.nameHeading_en
                                                                      : product.name_en}
                                                              </strong>
                                                              <strong>
                                                                  {
                                                                      product.weight
                                                                  }
                                                              </strong>
                                                          </h6>
                                                      </div>
                                                  </div>
                                              </div>
                                          )
                                      }
                                  )
                          )
                      )
                    : Object.keys(flourProducts_ar).map((brand: any) =>
                          Object.keys(flourProducts_ar[brand]).map(
                              (category: any) =>
                                  flourProducts_ar[brand][category].map(
                                      (product: any) => {
                                          return (
                                              <div
                                                  key={product._id}
                                                  className={`product_card rounded_corners force`}
                                                  onClick={() =>
                                                      viewdata(product._id)
                                                  }
                                                  data-cat={category}
                                                  data-brand={brand}
                                                  onMouseEnter={() =>
                                                      toggleactive(product._id)
                                                  }
                                                  onMouseLeave={() =>
                                                      toggleactive(0)
                                                  }
                                              >
                                                  <div className=" full_bg">
                                                      <i
                                                          className="cover full_bg load_bg"
                                                          style={{
                                                              backgroundImage: `url(${
                                                                  product?.image_ar
                                                                      ? product?.image_ar
                                                                      : product?.image
                                                              })`,
                                                          }}
                                                      ></i>
                                                  </div>

                                                  <div
                                                      className={`p_col_content transit-all full_bg f f-c  ${
                                                          Classactive ===
                                                          product._id
                                                              ? ' custom-detail-show '
                                                              : ''
                                                      }`}
                                                  >
                                                      <div className="p_content_top">
                                                          <h6 className="f f-c">
                                                              <strong>
                                                                  {product.nameHeading_ar
                                                                      ? product.nameHeading_ar
                                                                      : product.name_ar}
                                                              </strong>
                                                              <strong className="custom-direction-detail">
                                                                  {
                                                                      product.weight
                                                                  }
                                                              </strong>
                                                          </h6>
                                                      </div>
                                                  </div>
                                              </div>
                                          )
                                      }
                                  )
                          )
                      )
                : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
                      <div
                          key={1}
                          className={`product_card rounded_corners force`}
                          data-cat={''}
                          data-brand={''}
                      >
                          <div className=" full_bg">
                              <i
                                  className="cover full_bg load_bg"
                                  data-src={''}
                              ></i>
                          </div>
                      </div>
                  ))}
        </div>
    )
}

export default ProductCardPages
