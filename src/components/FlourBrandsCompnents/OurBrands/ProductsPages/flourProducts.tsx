import Footer from '@components/Footer/Footer'
import LastSection from '@components/LastSection/LastSection'
import Header from '@components/Navbar/header'
import ProductCardPages from '@components/ProductCardPages/ProductCardPages'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
    getCategories,
    getProducts,
} from '@components/AnimalFeedsBrand/actions'
import { products } from '../../../../script'
import {
    onWindowLoad,
    onFontsLoad,
    onWindowResize,
    pageScroll,
} from '../../../../script'
import Wrapper from '@components/Wrapper'

const FlourProducts = () => {
    const [products1, setProducts] = useState<any>([])
    const [productLoading, setProductLoading] = useState(true)
    const [flourProducts_en, setFlourProducts_en] = useState({})
    const [flourProducts_ar, setFlourProducts_ar] = useState({})
    const [categories, setCategories] = useState([])
    const [categories_ar, setCategories_ar] = useState<any>([])
    const [categories_en, setCategories_en] = useState<any>([])

    const [categoryLoading, setCategoryLoading] = useState(true)
    const [selectedBrand, setSelectedBrand] = useState('')

    const { t, i18n }: any = useTranslation()
    const location = useLocation()
    const lang = localStorage.getItem('lang')
    const data = localStorage.getItem('brands')
    const queryParams = new URLSearchParams(location.search)
    const brand_en: any = queryParams.get('brand_en')
    const brand_ar: any = queryParams.get('brand_ar')
    const brandParam = lang === 'en' ? brand_en : brand_ar

    useEffect(() => {
        onWindowLoad()
        onFontsLoad()
        onWindowResize()
    }, [])
    useEffect(() => {
        function handleScroll() {
            pageScroll()
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        getProducts(setProducts, setProductLoading)
        getCategories(setCategories, setCategoryLoading)
    }, [])

    useEffect(() => {
        if (categories.length > 0) {
            let flourBrands = categories.filter(
                (category: any) => category.type === 'Flour Brands'
            )

            // Get category names
            let categoryNames_ar = flourBrands.map(
                (category: any) => category?.name_ar
            )
            let categoryNames_en = flourBrands.map(
                (category: any) => category?.name_en
            )

            // Remove duplicates

            categoryNames_ar
            let uniqueCategoryNames_ar = [...new Set(categoryNames_ar)]
            let uniqueCategoryNames_en = [...new Set(categoryNames_en)]

            setCategories_ar(uniqueCategoryNames_ar)
            setCategories_en(uniqueCategoryNames_en)
        }
    }, [categories])

    useEffect(() => {
        if (categories_en.length > 0) {
            products()
        }
    }, [categories_en, flourProducts_en])

    useEffect(() => {
        if (products1.length > 0) {
            const flourProducts = products1.filter(
                (prod: any) => prod.type !== 'Animal Feeds Brand'
            )

            let categorizedProducts_en = flourProducts.reduce(
                (acc: any, product: any) => {
                    // Use brand name as the first level key
                    let brand = product?.brand?.name
                    if (!acc[brand]) {
                        acc[brand] = {}
                    }

                    // Use category name as the second level key
                    let category = product.category?.name_en
                    if (!acc[brand][category]) {
                        acc[brand][category] = []
                    }

                    // Push the product into the appropriate category under the brand
                    acc[brand][category].push(product)

                    return acc
                },
                {}
            )
            let categorizedProducts_ar = flourProducts.reduce(
                (acc: any, product: any) => {
                    // Use brand name as the first level key
                    let brand = product?.brand?.name_ar
                    if (!acc[brand]) {
                        acc[brand] = {}
                    }

                    // Use category name as the second level key
                    let category = product.category?.name_ar
                    if (!acc[brand][category]) {
                        acc[brand][category] = []
                    }

                    // Push the product into the appropriate category under the brand
                    acc[brand][category].push(product)

                    return acc
                },
                {}
            )

            setFlourProducts_en(categorizedProducts_en)
            setFlourProducts_ar(categorizedProducts_ar)
        }
    }, [products1])

    window.scrollTo(0, 0)

    useEffect(() => {
        const brandName = lang === 'en' ? brand_en : brand_ar
        setSelectedBrand(brandName)
    }, [lang])

    return (
        <>
            {/* <Header /> */}

            <Wrapper>
                <section className="rounded_corners">
                    <div className="inner_padding light_bg f f-c x_padding">
                        <div className="section_wrap f f-c">
                            <div className="bc f a-c">
                                <Link to="/" className="_underline _eleX">
                                    {t('homelabel')}
                                </Link>

                                <svg
                                    className="_eleX"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 5 18"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M.128 12.912a.287.287 0 0 1-.12-.241c0-.06.02-.141.08-.201l3.638-3.96L.088 4.53a.3.3 0 0 1 .02-.442.3.3 0 0 1 .442.02L4.41 8.29c.12.12.12.301 0 .422l-3.86 4.18c-.1.142-.301.142-.422.02Z"
                                    />
                                </svg>

                                <Link
                                    to="/flourbrands"
                                    className="_underline _eleX"
                                >
                                    {t('flourbrandslabel')}
                                </Link>

                                <svg
                                    className="_eleX"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 5 18"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M.128 12.912a.287.287 0 0 1-.12-.241c0-.06.02-.141.08-.201l3.638-3.96L.088 4.53a.3.3 0 0 1 .02-.442.3.3 0 0 1 .442.02L4.41 8.29c.12.12.12.301 0 .422l-3.86 4.18c-.1.142-.301.142-.422.02Z"
                                    />
                                </svg>
                                {/* categories_ar */}
                                {Object.keys(
                                    lang === 'en'
                                        ? flourProducts_en
                                        : flourProducts_ar
                                ).map((c: any) => {
                                    return (
                                        <>
                                            {c === brandParam && <div>{c}</div>}
                                        </>
                                    )
                                })}
                            </div>

                            <div className="section_head f a-c s-b _eleWrap">
                                <h2 className="_mask">{t('productslabel')}</h2>

                                <div className="head_side f a-c">
                                    <div className="dropdown_set f a-c">
                                        <select
                                            className="menu transit-all"
                                            id="brand"
                                            onChange={(e: any) => {
                                                setSelectedBrand(e.target.value)
                                            }}
                                        >
                                            <option
                                                value={
                                                    lang === 'en'
                                                        ? brand_en
                                                        : brand_ar
                                                }
                                                disabled
                                            >
                                                {t('selectlabel')}
                                            </option>
                                            {lang === 'en'
                                                ? Object.keys(
                                                      flourProducts_en
                                                  ).map((brand: any) => {
                                                      return (
                                                          <option
                                                              value={brand
                                                                  ?.match(
                                                                      /[A-Za-z]+/g
                                                                  )
                                                                  ?.join('')
                                                                  ?.toLowerCase()}
                                                              selected={
                                                                  brand
                                                                      ?.match(
                                                                          /[A-Za-z]+/g
                                                                      )
                                                                      ?.join('')
                                                                      ?.toLowerCase() ===
                                                                  brandParam
                                                                      ?.match(
                                                                          /[A-Za-z]+/g
                                                                      )
                                                                      ?.join('')
                                                                      ?.toLowerCase()
                                                              }
                                                          >
                                                              {brand}
                                                          </option>
                                                      )
                                                  })
                                                : Object.keys(
                                                      flourProducts_ar
                                                  ).map((brand: any) => {
                                                      return (
                                                          <option
                                                              value={brand}
                                                              selected={
                                                                  brand ===
                                                                  brandParam
                                                              }
                                                          >
                                                              {brand}
                                                          </option>
                                                      )
                                                  })}
                                        </select>
                                        <svg
                                            width="18"
                                            height="10"
                                            viewBox="0 0 18 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 1L9 9L1 1"
                                                stroke="currentcolor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <div className="filters dynamic">
                                        <ul className="f">
                                            <li className="menu transit-all f a-c j-c active">
                                                <strong>{t('alllabel')}</strong>
                                            </li>
                                            {!categoryLoading ? (
                                                lang === 'en' ? (
                                                    categories_en.map(
                                                        (cat: any) => (
                                                            <li
                                                                className="menu transit-all f a-c j-c"
                                                                data-id={cat
                                                                    ?.match(
                                                                        /[A-Za-z]+/g
                                                                    )
                                                                    ?.join('')
                                                                    ?.toLowerCase()}
                                                            >
                                                                <strong>
                                                                    {cat}
                                                                </strong>
                                                            </li>
                                                        )
                                                    )
                                                ) : (
                                                    categories_ar.map(
                                                        (cat: any) => (
                                                            <li
                                                                className="menu transit-all f a-c j-c"
                                                                data-id={cat}
                                                            >
                                                                <strong>
                                                                    {cat}
                                                                </strong>
                                                            </li>
                                                        )
                                                    )
                                                )
                                            ) : (
                                                <li
                                                    className="menu transit-all f a-c j-c"
                                                    data-id={''}
                                                >
                                                    <strong></strong>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <ProductCardPages
                                flourProducts_en={flourProducts_en}
                                flourProducts_ar={flourProducts_ar}
                                productLoading={productLoading}
                                selectedBrand={selectedBrand}
                            />
                        </div>
                    </div>

                    <LastSection />
                </section>
            </Wrapper>
        </>
    )
}

export default FlourProducts
