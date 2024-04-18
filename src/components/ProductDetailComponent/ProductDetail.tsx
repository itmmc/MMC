import React from 'react'
import './ProductDetail.scss'
import remove from '../../../images/Arrows.png'
import { useState, useEffect } from 'react'
import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import { useHistory, useLocation } from 'react-router-dom'
import {
    onWindowLoad,
    onWindowResize,
    pageScroll,
    onFontsLoad,
} from '../../script'
import { useTranslation } from 'react-i18next'
import Wrapper from '@components/Wrapper'
import { getProductsById } from '@components/ProductComponents/actions'
import LastSection from '@components/LastSection/LastSection'
import CustomLoader from '@components/CustomLoader'
const ProductDetail = () => {
    const location = useLocation()
    const history = useHistory()
    const { t, i18n }: any = useTranslation()

    const [isLoading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(1)
    const [formState, setFormState] = useState({
        id: '',
        type: '',
        brand: '',
        category: '',
        image: '',
        image_ar: '',
        name_en: '',
        name_ar: '',
        nameHeading_ar: '',
        nameHeading_en: '',
        productNumber: '',
        barcodeNumber: '',
        weight: '', // pen
        feedBrand_en: '',
        feedBrand_ar: '',
        productDescription_en: '',
        productDescription_ar: '',
        IngredientsList_en: '',
        IngredientsList_ar: '',
        warningInformation_en: '',
        warningInformation_ar: '',
        nameAndAddress_en: '',
        nameAndAddress_ar: '',
        countryOfOrigin_en: '',
        countryOfOrigin_ar: '',
        packagingMaterial_en: '',
        packagingMaterial_ar: '',
        dateMarkingAndInstructiosForStorageAndUse_en: '',
        dateMarkingAndInstructiosForStorageAndUse_ar: '',
        nutritionalFacts: '',
        energy: '',
        protein: '',
        totalCarbohydrates: '',
        totalSugar: '',
        totalFat: '',
        dietaryFiber: '',
        saturatedFat: '',
        monounsaturatedFat: '',
        polyunsaturatedFat: '',
        transFat: '',
        cholesterol: '',
        iron: '',
        folicAcid: '',
        sodium: '',
        thiamine: '',
        riboflavin: '',
        niacin: '',
        vitaminD: '',
    })

    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')
    const lang = localStorage.getItem('lang')
    const isAdminRoute = localStorage.getItem('accessToken')
    // window.scroll(0, 0)

    const isAdmin = localStorage.getItem('accessToken')

    useEffect(() => {
        if (!isAdmin) {
            onWindowLoad()
            onFontsLoad()
            onWindowResize()
            function handleScroll() {
                pageScroll()
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    useEffect(() => {
        getProductsById(id, setFormState, setLoading)
    }, [id])

    function updatetoggle(id: any) {
        setToggle(id)
    }

    const handleGoBack = () => {
        history.go(-1)
        // history.push('/products')
        // window.location.href = '/products'
        // window.location.reload()
    }

    const setpath = () => {
        history.push('/products')
        // window.location.href = '/products'
        // window.location.reload()
    }
    const getProductName = (name: any) => {
        debugger
        // if (name === 'Bakeries Flour') {
        //     return '“BAKERIES” WHITE BREAD FLOUR'
        // }
        // if (name === 'Modern Mills Patent Flour') {
        //     return 'Modern Mills Flour'
        // }
        if (name === 'Superior Flour') {
            return 'ALL PURPOSE SUPERIOR FLOUR'
        } else {
            return name
        }
    }

    return (
        <>
            {isAdminRoute ? (
                <>
                    <div
                        className=""
                        style={{
                            background: '#faf4ea',
                            paddingTop: '1.7rem',
                            paddingBottom: '1.7rem',
                        }}
                    >
                        <AdminHeader heading={'Product Detail'} />
                    </div>

                    <div className=" inner-container  padding-percentage-wrapper  ">
                        <div className="  inner-detail-container  ">
                            <div className="product-section">
                                <div className="heading-section  _txt words">
                                    {formState?.nameHeading_en ? (
                                        <>
                                            {lang === 'en'
                                                ? getProductName(
                                                      formState?.nameHeading_en
                                                  )
                                                : formState?.nameHeading_ar}
                                            {'-'}
                                        </>
                                    ) : (
                                        <>
                                            {lang === 'en'
                                                ? getProductName(
                                                      formState?.name_en
                                                  )
                                                : formState?.name_ar}
                                            {'-'}
                                        </>
                                    )}
                                    {/* {lang === 'en'
                                        ? getProductName(formState?.name_en)
                                        : formState?.name_ar}
                                    {'-'} */}
                                    <p>{formState?.weight}</p>
                                </div>

                                <div className="product-image-section">
                                    <div className="  image-bg">
                                        <div className="cover  load_bg  image-container">
                                            <img src={formState?.image} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-detail-section">
                                <div className="tab-container">
                                    <div className="tab-links-conainer">
                                        <div className="tabs">
                                            {lang === 'en' ? (
                                                <>
                                                    <h5
                                                        className={` pt-20 bg-yellow ${
                                                            lang === 'en'
                                                                ? 'br-left'
                                                                : 'br-right'
                                                        } ${
                                                            toggle === 1
                                                                ? 'activebg '
                                                                : ''
                                                        }`}
                                                        onClick={() =>
                                                            updatetoggle(1)
                                                        }
                                                    >
                                                        <strong className=" product-detail-tab-heading  _txt words">
                                                            {' '}
                                                            {t('NutritionFact')}
                                                        </strong>
                                                    </h5>
                                                    <h5
                                                        className={` pt-20 bg-yellow ${
                                                            lang === 'en'
                                                                ? 'br-right'
                                                                : 'br-left'
                                                        } ${
                                                            toggle === 2
                                                                ? 'activebg '
                                                                : ''
                                                        }`}
                                                        onClick={() =>
                                                            updatetoggle(2)
                                                        }
                                                    >
                                                        <strong className="_txt words   product-detail-tab-heading    ">
                                                            {' '}
                                                            {t('Specification')}
                                                        </strong>
                                                    </h5>
                                                </>
                                            ) : (
                                                <>
                                                    <h5
                                                        className={` product-detail-tab-heading pt-20 bg-yellow ${
                                                            lang === 'ar'
                                                                ? 'br-right'
                                                                : 'br-left'
                                                        } ${
                                                            toggle === 2
                                                                ? 'activebg '
                                                                : ''
                                                        }`}
                                                        onClick={() =>
                                                            updatetoggle(2)
                                                        }
                                                    >
                                                        <strong className="_txt words">
                                                            {' '}
                                                            {t('Specification')}
                                                        </strong>
                                                    </h5>
                                                    <h5
                                                        className={`product-detail-tab-heading pt-20 bg-yellow ${
                                                            lang === 'en'
                                                                ? 'br-right'
                                                                : 'br-left'
                                                        } ${
                                                            toggle === 1
                                                                ? 'activebg '
                                                                : ''
                                                        }`}
                                                        onClick={() =>
                                                            updatetoggle(1)
                                                        }
                                                    >
                                                        <strong>
                                                            {' '}
                                                            {t('NutritionFact')}
                                                        </strong>
                                                    </h5>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className="cross-section"
                                        onClick={setpath}
                                    >
                                        <img src={remove}></img>
                                    </div>
                                </div>

                                <section
                                    className={`nutrition-container     ${
                                        toggle === 1 ? 'show-content ' : ''
                                    }`}
                                >
                                    <div className=" table-data-container  ">
                                        <table className="table-container     ">
                                            <thead className="table-head bg-none  ">
                                                <tr>
                                                    <th
                                                        align={
                                                            lang === 'en'
                                                                ? 'left'
                                                                : 'right'
                                                        }
                                                        className="  cl-brown"
                                                    >
                                                        {t(
                                                            'pdNutritionalFacts'
                                                        )}
                                                    </th>
                                                    <th
                                                        align={
                                                            lang === 'en'
                                                                ? 'left'
                                                                : 'right'
                                                        }
                                                        className=" cl-brown"
                                                    >
                                                        {t('pdPerServing')}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {formState?.energy && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdEnergy')}
                                                            {/* </strong> */}
                                                        </td>

                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {formState?.energy}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.protein && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t('pdProtein')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {formState?.protein}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.totalCarbohydrates && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdTotalCarbohydrates'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.totalCarbohydrates
                                                            }
                                                            l{/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                <tr>
                                                    <td className="table-link   _txt words">
                                                        {/* <strong> */}
                                                        {t('pdTotalSugar')}
                                                        {/* </strong> */}
                                                    </td>
                                                    <td
                                                        className="table-link  _txt words"
                                                        style={{
                                                            direction: 'ltr',
                                                        }}
                                                        align={
                                                            lang === 'en'
                                                                ? 'left'
                                                                : 'right'
                                                        }
                                                    >
                                                        {/* <strong> */}
                                                        {formState?.totalSugar}
                                                        {/* </strong> */}
                                                    </td>
                                                </tr>

                                                {formState?.dietaryFiber && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdDietaryFiber'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.dietaryFiber
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.totalFat && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t('pdTotalFat')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.totalFat
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.saturatedFat && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdSaturatedFat'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.saturatedFat
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.monounsaturatedFat && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdMonounsaturatedFat'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.monounsaturatedFat
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.polyunsaturatedFat && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdPolyunsaturatedFat'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.polyunsaturatedFat
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.transFat && (
                                                    <tr>
                                                        <td className="table-link _txt words">
                                                            {/* <strong> */}
                                                            {t('pdTransFat')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.transFat
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.cholesterol && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdCholesterol')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link  _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {
                                                                formState?.cholesterol
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className=" table-data-container  ">
                                        <table className="table-container     ">
                                            <thead className="table-head bg-none  ">
                                                <tr>
                                                    <th
                                                        align={
                                                            lang === 'en'
                                                                ? 'left'
                                                                : 'right'
                                                        }
                                                        className="  cl-brown"
                                                    >
                                                        {t(
                                                            'pdVitaminsIronAdded'
                                                        )}
                                                    </th>
                                                    <th
                                                        align={
                                                            lang === 'en'
                                                                ? 'left'
                                                                : 'right'
                                                        }
                                                        className=" cl-brown"
                                                    >
                                                        {t('pdmg')}
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {formState?.iron && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t('pdIron')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {formState?.iron}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.folicAcid && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t('pdFolicAcid')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {
                                                                formState?.folicAcid
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                                {formState?.sodium && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdSodium')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {formState?.sodium}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.thiamine && (
                                                    <tr>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {t('pdThiamine')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {
                                                                formState?.thiamine
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.riboflavin && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdRiboflavin')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {
                                                                formState?.riboflavin
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                                {formState?.niacin && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdNiacin')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {formState?.niacin}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.vitaminD && (
                                                    <tr>
                                                        <td className="table-link  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdVitaminD')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link   _txt words">
                                                            {/* <strong> */}
                                                            {
                                                                formState?.vitaminD
                                                            }{' '}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                                <section
                                    className={`specification-container     ${
                                        toggle === 2 ? 'show-content ' : ''
                                    }`}
                                >
                                    <div className=" table-data-container  ">
                                        <table className="table-container     ">
                                            <tbody>
                                                {formState?.name_en && (
                                                    <tr>
                                                        <td
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                            className="td-padding table-link   _txt words"
                                                        >
                                                            {t('pdProductName')}
                                                        </td>
                                                        <td
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                            className="table-link td-padding   _txt words"
                                                        >
                                                            {/* <strong> */}
                                                            {lang === 'en'
                                                                ? formState?.name_en
                                                                : formState?.name_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.productNumber && (
                                                    <tr>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdProductNumber'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {
                                                                formState?.productNumber
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.barcodeNumber && (
                                                    <tr>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdBarcodeNumber'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {
                                                                formState?.barcodeNumber
                                                            }
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                                {formState?.productDescription_en && (
                                                    <tr>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdProductDescription'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {lang === 'en'
                                                                ? formState?.productDescription_en
                                                                : formState?.productDescription_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.IngredientsList_en && (
                                                    <tr>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdIngredientsList'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {lang === 'en'
                                                                ? formState?.IngredientsList_en
                                                                : formState?.IngredientsList_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                                {formState?.warningInformation_en && (
                                                    <tr>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdWarningInformation'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding   _txt words">
                                                            {/* <strong> */}
                                                            {lang === 'en'
                                                                ? formState?.warningInformation_en
                                                                : formState?.warningInformation_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                                {formState?.weight && (
                                                    <tr>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {t('pdNetContent')}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td
                                                            className="table-link td-padding   _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                        >
                                                            {/* <strong> */}
                                                            {formState?.weight}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                                {formState?.nameAndAddress_en && (
                                                    <tr>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdNameandAddress'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}

                                                            {lang === 'en'
                                                                ? formState?.nameAndAddress_en
                                                                : formState?.nameAndAddress_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.countryOfOrigin_en && (
                                                    <tr>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdCountryofOrigin'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}

                                                            {lang === 'en'
                                                                ? formState?.countryOfOrigin_en
                                                                : formState?.countryOfOrigin_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.productDescription_en && (
                                                    <tr>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {t(
                                                                'pdPackagingMaterial'
                                                            )}
                                                            {/* </strong> */}
                                                        </td>
                                                        <td className="table-link td-padding  _txt words">
                                                            {/* <strong> */}
                                                            {lang === 'en'
                                                                ? formState?.packagingMaterial_en
                                                                : formState?.packagingMaterial_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}

                                                {formState?.dateMarkingAndInstructiosForStorageAndUse_en && (
                                                    <tr>
                                                        {lang === 'en' ? (
                                                            <td className="table-link td-padding  _txt words">
                                                                {/* <strong> */}
                                                                DATE MARKING AND
                                                                INSTRUCTIONS FOR{' '}
                                                                <br /> STORAGE
                                                                AND USE
                                                                {/* </strong> */}
                                                            </td>
                                                        ) : (
                                                            <td className="table-link td-padding  _txt words">
                                                                {/* <strong> */}
                                                                التاريخ وتعليمات
                                                                التخزين
                                                                والاستخدام
                                                                {/* </strong> */}
                                                            </td>
                                                        )}
                                                        <td className="table-link td-padding _txt words">
                                                            {/* <strong> */}

                                                            {lang === 'en'
                                                                ? formState?.dateMarkingAndInstructiosForStorageAndUse_en
                                                                : formState?.dateMarkingAndInstructiosForStorageAndUse_ar}
                                                            {/* </strong> */}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Wrapper>
                    <>
                        {isLoading ? (
                            // Render loader when isLoading is true
                            <div className="p-relative">
                                <CustomLoader />
                            </div>
                        ) : (
                            <>
                                <div className=" inner-container   padding-percentage-wrapper ">
                                    <div className="  inner-detail-container  ">
                                        <div className="product-section">
                                            <h3 className="heading-section   _txt words">
                                                {lang === 'en' ? (
                                                    <>
                                                        {formState?.nameHeading_en ? (
                                                            <>
                                                                {
                                                                    formState?.nameHeading_en
                                                                }
                                                            </>
                                                        ) : (
                                                            <>
                                                                {
                                                                    formState?.name_en
                                                                }
                                                            </>
                                                        )}

                                                        <div
                                                            className="heading-section-wg  block-none   _txt words"
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                        >
                                                            {' - '}
                                                            {formState?.weight?.toLowerCase()}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {formState?.nameHeading_ar ? (
                                                            <>
                                                                {
                                                                    formState?.nameHeading_ar
                                                                }

                                                                {' - '}
                                                            </>
                                                        ) : (
                                                            <>
                                                                {
                                                                    formState?.name_ar
                                                                }

                                                                {' - '}
                                                            </>
                                                        )}

                                                        <span
                                                            className="heading-section-wg  "
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                                textAlign:
                                                                    'right',
                                                            }}
                                                        >
                                                            {formState?.weight.toLowerCase()}
                                                        </span>
                                                    </>
                                                )}
                                            </h3>

                                            <div className="product-image-section">
                                                <div className="  image-bg">
                                                    <div className="cover  load_bg  image-container">
                                                        {lang === 'en' ? (
                                                            <img
                                                                src={
                                                                    formState?.image
                                                                }
                                                            />
                                                        ) : (
                                                            <img
                                                                src={
                                                                    formState?.image_ar
                                                                        ? formState?.image_ar
                                                                        : formState?.image
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-detail-section">
                                            <div className="tab-container">
                                                <div className="tab-links-conainer">
                                                    <div className="tabs">
                                                        {lang === 'en' ? (
                                                            <>
                                                                <h5
                                                                    className={` pt-20 bg-yellow ${
                                                                        lang ===
                                                                        'en'
                                                                            ? 'br-left'
                                                                            : 'br-right'
                                                                    } ${
                                                                        toggle ===
                                                                        1
                                                                            ? 'activebg '
                                                                            : ''
                                                                    }`}
                                                                    onClick={() =>
                                                                        updatetoggle(
                                                                            1
                                                                        )
                                                                    }
                                                                >
                                                                    <strong className="_txt words  product-detail-tab-heading">
                                                                        {' '}
                                                                        {t(
                                                                            'NutritionFact'
                                                                        )}
                                                                    </strong>
                                                                </h5>
                                                                <h5
                                                                    className={` pt-20 bg-yellow ${
                                                                        lang ===
                                                                        'en'
                                                                            ? 'br-right'
                                                                            : 'br-left'
                                                                    } ${
                                                                        toggle ===
                                                                        2
                                                                            ? 'activebg '
                                                                            : ''
                                                                    }`}
                                                                    onClick={() =>
                                                                        updatetoggle(
                                                                            2
                                                                        )
                                                                    }
                                                                >
                                                                    <strong className="_txt words  product-detail-tab-heading">
                                                                        {' '}
                                                                        {t(
                                                                            'Specification'
                                                                        )}
                                                                    </strong>
                                                                </h5>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <h5
                                                                    className={`pt-20 bg-yellow ${
                                                                        lang ===
                                                                        'ar'
                                                                            ? 'br-right'
                                                                            : 'br-left'
                                                                    } ${
                                                                        toggle ===
                                                                        2
                                                                            ? 'activebg '
                                                                            : ''
                                                                    }`}
                                                                    onClick={() =>
                                                                        updatetoggle(
                                                                            2
                                                                        )
                                                                    }
                                                                >
                                                                    <strong className="_txt words   product-detail-tab-heading ">
                                                                        {' '}
                                                                        {t(
                                                                            'Specification'
                                                                        )}
                                                                    </strong>
                                                                </h5>
                                                                <h5
                                                                    className={` pt-20 bg-yellow ${
                                                                        lang ===
                                                                        'en'
                                                                            ? 'br-right'
                                                                            : 'br-left'
                                                                    } ${
                                                                        toggle ===
                                                                        1
                                                                            ? 'activebg '
                                                                            : ''
                                                                    }`}
                                                                    onClick={() =>
                                                                        updatetoggle(
                                                                            1
                                                                        )
                                                                    }
                                                                >
                                                                    <strong className="_txt words  product-detail-tab-heading ">
                                                                        {' '}
                                                                        {t(
                                                                            'NutritionFact'
                                                                        )}
                                                                    </strong>
                                                                </h5>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                <div
                                                    className="cross-section"
                                                    onClick={handleGoBack}
                                                >
                                                    <img src={remove}></img>
                                                </div>
                                            </div>
                                            {/* nutrition */}
                                            <section
                                                className={`nutrition-container  
                                   ${
                                       lang === 'en'
                                           ? 'br-container-en'
                                           : 'br-container-ar'
                                   }
                                 
                                   ${toggle === 1 ? 'show-content ' : ''}`}
                                            >
                                                <div className=" table-data-container  ">
                                                    <table className="table-container     ">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="tableHeading  _txt words"
                                                                    align={
                                                                        lang ===
                                                                        'en'
                                                                            ? 'left'
                                                                            : 'right'
                                                                    }
                                                                >
                                                                    {t(
                                                                        'pdNutritionalFacts'
                                                                    )}
                                                                </th>
                                                                <th
                                                                    className="tableHeading  _txt words"
                                                                    align={
                                                                        lang ===
                                                                        'en'
                                                                            ? 'left'
                                                                            : 'right'
                                                                    }
                                                                    style={{
                                                                        direction:
                                                                            'ltr',
                                                                    }}
                                                                >
                                                                    {t(
                                                                        'pdPerServing'
                                                                    )}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* <tr>
                                                        <td className="tableHeading">
                                                            {t(
                                                                'pdNutritionalFacts'
                                                            )}
                                                        </td>
                                                        <td
                                                            className="tableHeading"
                                                            align={
                                                                lang === 'en'
                                                                    ? 'left'
                                                                    : 'right'
                                                            }
                                                            style={{
                                                                direction:
                                                                    'ltr',
                                                            }}
                                                        >
                                                            {t('pdPerServing')}
                                                        </td>
                                                    </tr> */}
                                                            {formState?.energy && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {t(
                                                                            'pdEnergy'
                                                                        )}
                                                                    </td>

                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.energy
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.protein && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdProtein'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.protein
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.totalCarbohydrates && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdTotalCarbohydrates'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link   _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.totalCarbohydrates
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            <tr>
                                                                <td className="table-link  _txt words">
                                                                    {/* <strong> */}
                                                                    {t(
                                                                        'pdTotalSugar'
                                                                    )}
                                                                    {/* </strong> */}
                                                                </td>
                                                                <td
                                                                    className="table-link  _txt words"
                                                                    style={{
                                                                        direction:
                                                                            'ltr',
                                                                    }}
                                                                    align={
                                                                        lang ===
                                                                        'en'
                                                                            ? 'left'
                                                                            : 'right'
                                                                    }
                                                                >
                                                                    {/* <strong> */}
                                                                    {
                                                                        formState?.totalSugar
                                                                    }
                                                                    {/* </strong> */}
                                                                </td>
                                                            </tr>

                                                            {formState?.dietaryFiber && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdDietaryFiber'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.dietaryFiber
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.totalFat && (
                                                                <tr>
                                                                    <td className="table-link _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdTotalFat'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.totalFat
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.saturatedFat && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdSaturatedFat'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.saturatedFat
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.monounsaturatedFat && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdMonounsaturatedFat'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.monounsaturatedFat
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.polyunsaturatedFat && (
                                                                <tr>
                                                                    <td className="table-link  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdPolyunsaturatedFat'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.polyunsaturatedFat
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.transFat && (
                                                                <tr>
                                                                    <td className="table-link _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdTransFat'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.transFat
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.cholesterol && (
                                                                <tr>
                                                                    <td className="table-link _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdCholesterol'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link  _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.cholesterol
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            {!formState?.vitaminD &&
                                                                formState?.sodium && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdSodium'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td
                                                                            className="table-link  _txt words"
                                                                            style={{
                                                                                direction:
                                                                                    'ltr',
                                                                            }}
                                                                            align={
                                                                                lang ===
                                                                                'en'
                                                                                    ? 'left'
                                                                                    : 'right'
                                                                            }
                                                                        >
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.sodium
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {formState?.vitaminD && (
                                                    <div className=" table-data-container  ">
                                                        <table className="table-container  ">
                                                            <thead className="table-head bg-none  ">
                                                                <tr>
                                                                    <th
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                        className="  cl-brown"
                                                                    >
                                                                        {t(
                                                                            'pdVitaminsIronAdded'
                                                                        )}
                                                                        {/* <h6>
                                                            <strong>
                                                            </strong>
                                                        </h6> */}
                                                                    </th>
                                                                    <th
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                        className=" cl-brown"
                                                                    >
                                                                        {t(
                                                                            'pdmg'
                                                                        )}
                                                                        {/* <h6>
                                                            <strong>
                                                            </strong>
                                                        </h6> */}
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {formState?.iron && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdIron'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.iron
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}

                                                                {formState?.folicAcid && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdFolicAcid'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.folicAcid
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                                {formState?.sodium && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdSodium'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.sodium
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}

                                                                {formState?.thiamine && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdThiamine'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.thiamine
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}

                                                                {formState?.riboflavin && (
                                                                    <tr>
                                                                        <td className="table-link">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdRiboflavin'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.riboflavin
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                                {formState?.niacin && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words ">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdNiacin'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link  _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.niacin
                                                                            }
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}

                                                                {formState?.vitaminD && (
                                                                    <tr>
                                                                        <td className="table-link  _txt words  _txt words">
                                                                            {/* <strong> */}
                                                                            {t(
                                                                                'pdVitaminD'
                                                                            )}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                        <td className="table-link  _txt words  _txt words">
                                                                            {/* <strong> */}
                                                                            {
                                                                                formState?.vitaminD
                                                                            }{' '}
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </section>

                                            {/* specification */}
                                            <section
                                                className={`specification-container 
                                   ${
                                       lang === 'en'
                                           ? 'br-container-en'
                                           : 'br-container-ar'
                                   }
                                   }
                                   ${toggle === 2 ? 'show-content ' : ''}`}
                                            >
                                                <div className=" table-data-container  ">
                                                    <table className="table-container     ">
                                                        {/* <thead className="table-head bg-none">
                                            </thead> */}
                                                        <tbody>
                                                            {formState?.name_en && (
                                                                <tr>
                                                                    <td
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                        className="td-padding table-link  _txt words"
                                                                    >
                                                                        {t(
                                                                            'pdProductName'
                                                                        )}

                                                                        {/* <h6 className="table-link">
                                                            <strong>
                                                            </strong>
                                                        </h6> */}
                                                                    </td>
                                                                    <td
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                        className="table-link td-padding  _txt words"
                                                                    >
                                                                        {/* <strong> */}
                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.name_en
                                                                            : formState?.name_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.productNumber && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdProductNumber'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.productNumber
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.barcodeNumber && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdBarcodeNumber'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding _txt words">
                                                                        {/* <strong> */}
                                                                        {
                                                                            formState?.barcodeNumber
                                                                        }
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            {formState?.productDescription_en && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdProductDescription'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.productDescription_en
                                                                            : formState?.productDescription_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.IngredientsList_en && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdIngredientsList'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.IngredientsList_en
                                                                            : formState?.IngredientsList_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            {formState?.warningInformation_en && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdWarningInformation'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.warningInformation_en
                                                                            : formState?.warningInformation_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            {formState?.weight && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdNetContent'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td
                                                                        className="table-link td-padding _txt words"
                                                                        style={{
                                                                            direction:
                                                                                'ltr',
                                                                        }}
                                                                        align={
                                                                            lang ===
                                                                            'en'
                                                                                ? 'left'
                                                                                : 'right'
                                                                        }
                                                                    >
                                                                        {/* <strong> */}
                                                                        {formState?.weight?.toUpperCase()}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            {formState?.nameAndAddress_en && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdNameandAddress'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}

                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.nameAndAddress_en
                                                                            : formState?.nameAndAddress_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.countryOfOrigin_en && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdCountryofOrigin'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding   _txt words">
                                                                        {/* <strong> */}

                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.countryOfOrigin_en
                                                                            : formState?.countryOfOrigin_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.productDescription_en && (
                                                                <tr>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {t(
                                                                            'pdPackagingMaterial'
                                                                        )}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                    <td className="table-link td-padding  _txt words">
                                                                        {/* <strong> */}
                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.packagingMaterial_en
                                                                            : formState?.packagingMaterial_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {formState?.dateMarkingAndInstructiosForStorageAndUse_en && (
                                                                <tr>
                                                                    {lang ===
                                                                    'en' ? (
                                                                        <td className="table-link td-padding  _txt words">
                                                                            {/* <strong> */}
                                                                            DATE
                                                                            MARKING
                                                                            AND
                                                                            INSTRUCTIONS
                                                                            FOR{' '}
                                                                            <br />{' '}
                                                                            STORAGE
                                                                            AND
                                                                            USE
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    ) : (
                                                                        <td className="table-link td-padding  _txt words">
                                                                            {/* <strong> */}
                                                                            التاريخ
                                                                            وتعليمات
                                                                            التخزين
                                                                            والاستخدام
                                                                            {/* </strong> */}
                                                                        </td>
                                                                    )}
                                                                    <td className="table-link td-padding">
                                                                        {/* <strong> */}

                                                                        {lang ===
                                                                        'en'
                                                                            ? formState?.dateMarkingAndInstructiosForStorageAndUse_en
                                                                            : formState?.dateMarkingAndInstructiosForStorageAndUse_ar}
                                                                        {/* </strong> */}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <section className="rounded_corners ">
                            <LastSection />
                        </section>
                    </>
                </Wrapper>
            )}
        </>
    )
}

export default ProductDetail
