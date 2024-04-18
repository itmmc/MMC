import React, { useEffect, useState } from 'react'

import './createProduct.css'
import { useTranslation } from 'react-i18next'
import { postProduct, getBrand, getCategories } from '../actions'
import { useHistory, useLocation } from 'react-router-dom'
import Toast from '@components/ToastComponent/Toast'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

const CreateProduct = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    const [isToastVisible, setIsToastVisible] = useState(false)
    const [toastClass, setToastClass] = useState('')
    const [toastMessage, setToastMessage] = useState('')
    const [brands, setBrands] = useState([])
    const history = useHistory()
    const location: any = useLocation()
    const [brandLoading, setBrandLoading] = useState(false)

    const [selectedOption, setSelectedOption] = useState('')
    const [productLoading, setProductLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryLoading, setCategoryLoading] = useState(false)
    const [formState, setFormState] = useState({
        id: '',
        type: '',
        brand: '',
        category: '',
        image: '',
        image_ar: '',
        nameHeading_ar: '',
        nameHeading_en: '',
        name_en: '',
        name_ar: '',
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
    const [filters, setFilters] = useState({
        type: '',
        brand: '',
    })
    const [filteredCategories, setfilteredCategories] = useState([])
    const [allBrands, setAllBrands] = useState([])

    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
    }
    useEffect(() => {
        getBrand(setAllBrands, setBrands, setBrandLoading)
        getCategories(setCategories, setCategoryLoading)
        const updateData = localStorage.getItem('updateData')
        if (updateData) {
            const product = JSON.parse(updateData)
            setFormState((formState) => ({
                ...formState,
                id: product._id,
                type: product?.type,
                brand: product?.brand?._id,
                category: product?.category?._id,
                image: product?.image,
                image_ar: product?.image_ar,
                nameHeading_ar: product?.nameHeading_ar,
                nameHeading_en: product?.nameHeading_en,
                name_en: product?.name_en,
                name_ar: product?.name_ar,
                productNumber: product?.productNumber,
                barcodeNumber: product?.barcodeNumber,
                weight: product?.weight, // pen
                feedBrand_en: product?.feedBrand_en,
                feedBrand_ar: product?.feedBrand_ar,
                productDescription_en: product?.productDescription_en,
                productDescription_ar: product?.productDescription_ar,
                IngredientsList_en: product?.IngredientsList_en,
                IngredientsList_ar: product?.IngredientsList_ar,
                warningInformation_en: product?.warningInformation_en,
                warningInformation_ar: product?.warningInformation_ar,
                nameAndAddress_en: product?.nameAndAddress_en,
                nameAndAddress_ar: product?.nameAndAddress_ar,
                countryOfOrigin_en: product?.countryOfOrigin_en,
                countryOfOrigin_ar: product?.countryOfOrigin_ar,
                packagingMaterial_en: product?.packagingMaterial_en,
                packagingMaterial_ar: product?.packagingMaterial_ar,
                dateMarkingAndInstructiosForStorageAndUse_en:
                    product?.dateMarkingAndInstructiosForStorageAndUse_en,
                dateMarkingAndInstructiosForStorageAndUse_ar:
                    product?.dateMarkingAndInstructiosForStorageAndUse_ar,
                nutritionalFacts: product?.nutritionalFacts,
                energy: product?.energy,
                protein: product?.protein,
                totalCarbohydrates: product?.totalCarbohydrates,
                totalSugar: product?.totalSugar,
                totalFat: product?.totalFat,
                dietaryFiber: product?.dietaryFiber,
                saturatedFat: product?.saturatedFat,
                monounsaturatedFat: product?.monounsaturatedFat,
                polyunsaturatedFat: product?.polyunsaturatedFat,
                transFat: product?.transFat,
                cholesterol: product?.cholesterol,
                iron: product?.iron,
                folicAcid: product?.folicAcid,
                sodium: product?.sodium,
                thiamine: product?.thiamine,
                riboflavin: product?.riboflavin,
                niacin: product?.niacin,
                vitaminD: product?.vitaminD,
            }))
            setFilters((filter: any) => ({
                ...filter,
                type: product.type,
                brand: product.brand?._id,
            }))
        }
        localStorage.removeItem('updateData')
    }, [])

    useEffect(() => {
        let filterd: any = []
        if (filters.brand && filters.type) {
            filterd = categories.filter(
                (cat: any) =>
                    filters.brand === cat.brand._id && filters.type === cat.type
            )
        } else if (filters.type) {
            filterd = categories.filter((cat: any) => filters.type === cat.type)
        }
        setfilteredCategories(filterd)
    }, [filters, categories])

    const changeHandler = (event: any) => {
        const { name, value } = event.target
        setFormState((formState) => ({
            ...formState,
            [name]: value,
        }))
        debugger
        if (name === 'type' || name === 'brand') {
            setFilters((filters) => ({
                ...filters,
                [name]: value,
            }))
        }
        if (name === 'type' && value === 'Animal Feeds Brand') {
            debugger
            const brandd: any = allBrands.find((b: any) => b.name === value)
            setFormState((formState) => ({
                ...formState,
                brand: brandd._id,
            }))
            setFilters((filters) => ({
                ...filters,
                brand: brandd._id,
            }))
        }
    }

    const handleReasonChange = (event: any) => {
        setSelectedOption(event.target.value)
    }

    const validateForm = () => {
        const { type, brand, name_en, name_ar } = formState
        if (!type || !name_en || !name_ar || !brand) {
            // You can customize the error messages as needed
            if (!brand) {
                setToastMessage('Please select a brand.')
            } else if (!name_en) {
                setToastMessage('Please enter a category name in English.')
            } else if (!name_ar) {
                setToastMessage('Please enter a category name in Arabic.')
            }
            setIsToastVisible(true)

            setToastClass('errorbr')
            return false
        }
        return true
    }

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = (e: any) => {
                setFormState((formState) => ({
                    ...formState,
                    image: e.target.result,
                }))
            }
        }
    }
    const handleImageUploadInArabic = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = (e: any) => {
                setFormState((formState) => ({
                    ...formState,
                    image_ar: e.target.result,
                }))
            }
        }
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        const isValidate = validateForm()
        if (isValidate) {
            postProduct(formState, setProductLoading, history)
        }
    }

    const setpath = () => {
        history.push('/products')
        // reloadPage('/#/products')
    }

    return (
        <div className="  small_fc x_padding  custom-inner-padding light_bg  register-form-container">
            <div className="f s-b  a-c ptb">
                <div>
                    {' '}
                    <h4 className="_eleY">
                        {formState.id ? 'Update' : 'Add'} Product <br />
                    </h4>
                </div>

                <div className="Create-Category-btn">
                    <div
                        className="primary_bg custom-btn interactive_label f a-c j-c "
                        aria-label="Contact"
                    >
                        <strong className="_txt words" onClick={setpath}>
                            Go Back
                        </strong>
                    </div>
                </div>
            </div>
            <div className="section_head f f-c  ">
                <form onSubmit={submitHandler}>
                    <div className="custom-form-set f f-c">
                        <div className="Single-Field-Label-Container">
                            <div>
                                <label className="label-tag">
                                    Select your Brand :
                                </label>
                            </div>

                            <div className="custom-input-set f s-b  a-c _eleY  label-select ">
                                <select
                                    name="type"
                                    placeholder="Select Your Brand"
                                    value={formState.type}
                                    onChange={changeHandler}
                                    className="custom-select-btn   "
                                    required
                                >
                                    <option value="" disabled>
                                        Select Your Brand
                                    </option>
                                    <option value="Flour Brands">
                                        Flour Brand
                                    </option>
                                    <option value="Animal Feeds Brand">
                                        Animal Feed Brands
                                    </option>
                                </select>
                            </div>
                        </div>

                        {formState?.type === 'Flour Brands' && (
                            <>
                                {' '}
                                <div className="Single-Field-Label-Container">
                                    <div>
                                        <label className="label-tag">
                                            Select your Sub Brand:
                                        </label>
                                    </div>

                                    <div className="custom-input-set f s-b  a-c  flour-subbrands label-select">
                                        <select
                                            name="brand"
                                            placeholder="Select Your Brand"
                                            required
                                            className="custom-select-btn"
                                            onChange={changeHandler}
                                            value={formState.brand}
                                        >
                                            <option value="" disabled selected>
                                                Select Sub Brand
                                            </option>
                                            {brands?.length > 0 &&
                                                brands.map((b: any) => (
                                                    <option
                                                        value={b._id}
                                                        key={b._id}
                                                    >
                                                        {b.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="  double-fields-container">
                            <div className=" double-field-label-container">
                                <div>
                                    <label className="label-tag">
                                        Select your Category :
                                    </label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY">
                                    <select
                                        name="category"
                                        placeholder="Select Your category"
                                        required
                                        className="custom-select-btn"
                                        onChange={changeHandler}
                                        value={formState.category}
                                    >
                                        <option value="" disabled selected>
                                            Select Category
                                        </option>
                                        {filteredCategories?.length > 0 &&
                                            filteredCategories.map((b: any) => (
                                                <option
                                                    value={b._id}
                                                    key={b._id}
                                                >
                                                    {b?.name_en}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>

                            <div className=" double-field-label-container">
                                <div>
                                    <label className="label-tag">
                                        Upload The Image In English:
                                    </label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY">
                                    <input
                                        type="file"
                                        required
                                        onChange={handleImageUpload}
                                        className="outline-none w-100"
                                    />

                                    <div className="upload full_bg f a-c j-e">
                                        <div className="custom-btn-custom  light_brown_bg interactive_label f a-c j-c pointer">
                                            <strong className="_txt words">
                                                Upload Image
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="  double-fields-container">
                            <div className=" double-field-label-container">
                                <div>
                                    <label className="label-tag">
                                        Upload The Image In Arabic:
                                    </label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY">
                                    <input
                                        type="file"
                                        // required
                                        onChange={handleImageUploadInArabic}
                                        className="outline-none w-100"
                                    />
                                    <div className="upload full_bg f a-c j-e">
                                        <div className="custom-btn-custom  light_brown_bg interactive_label f a-c j-c pointer">
                                            <strong className="_txt words">
                                                Upload Image
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" double-field-label-container"></div>
                        </div>

                        {/* Name for animal */}

                        {formState?.type === 'Animal Feeds Brand' && (
                            <>
                                {' '}
                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Name in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="name_en"
                                                value={formState?.name_en}
                                                required
                                                spellCheck="false"
                                                placeholder="Name In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Name in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="name_ar"
                                                value={formState?.name_ar}
                                                required
                                                spellCheck="false"
                                                placeholder="Name In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100 "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label>
                                                Feed Brand in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="feedBrand_en"
                                                value={formState.feedBrand_en}
                                                // required
                                                spellCheck="false"
                                                placeholder="FeedBrand In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label>Feed Brand in Arabic:</label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="feedBrand_ar"
                                                value={formState.feedBrand_ar}
                                                // required
                                                spellCheck="false"
                                                placeholder="FeedBrand In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {formState?.type === 'Flour Brands' && (
                            <>
                                <h5 className="_eleY">Specification</h5>
                                {/* Name */}
                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Name in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="name_en"
                                                value={formState?.name_en}
                                                required
                                                spellCheck="false"
                                                placeholder="Name In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Name in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="name_ar"
                                                value={formState?.name_ar}
                                                required
                                                spellCheck="false"
                                                placeholder="Name In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100 "
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Heading Name in English:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="nameHeading_en"
                                                value={formState.nameHeading_en}
                                                required
                                                spellCheck="false"
                                                placeholder="Product Heading Name  In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Heading Name in Arabic:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container f s-b _eleY">
                                            <input
                                                type="text"
                                                name="nameHeading_ar"
                                                value={formState.nameHeading_ar}
                                                required
                                                spellCheck="false"
                                                placeholder="Product Heading Name  In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Prod Number & barcode number */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Product Number:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="productNumber"
                                                value={formState.productNumber}
                                                required
                                                spellCheck="false"
                                                placeholder="Product Number"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Barcode Number:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="barcodeNumber"
                                                value={formState.barcodeNumber}
                                                required
                                                spellCheck="false"
                                                placeholder="Barcode Number"
                                                onChange={changeHandler}
                                                className="outline-none w-100 "
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* feedBrand_en */}

                                {/* IngredientsList_en IngredientsList_ar */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Ingridient in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="IngredientsList_en"
                                                value={
                                                    formState.IngredientsList_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Ingredients In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Ingrident in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="IngredientsList_ar"
                                                value={
                                                    formState.IngredientsList_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Ingredients In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Warning Info in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="warningInformation_en"
                                                value={
                                                    formState.warningInformation_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Warning Information In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Warning info in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="warningInformation_ar"
                                                value={
                                                    formState.warningInformation_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Warning Information In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Name Address in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="nameAndAddress_en"
                                                value={
                                                    formState.nameAndAddress_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Name And Address In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Name Address in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="nameAndAddress_ar"
                                                value={
                                                    formState.nameAndAddress_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Name And Address In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Country in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="countryOfOrigin_en"
                                                value={
                                                    formState.countryOfOrigin_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Country Of Origin In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Country in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container f s-b _eleY">
                                            <input
                                                type="text"
                                                name="countryOfOrigin_ar"
                                                value={
                                                    formState.countryOfOrigin_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Country Of Origin In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Packaging Material in English:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="packagingMaterial_en"
                                                value={
                                                    formState.packagingMaterial_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Packaging Material In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Packaging Material in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="packagingMaterial_ar"
                                                value={
                                                    formState.packagingMaterial_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Packaging Material In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Date Marking in English:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="dateMarkingAndInstructiosForStorageAndUse_en"
                                                value={
                                                    formState.dateMarkingAndInstructiosForStorageAndUse_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Date Marking And Instructions In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Date Marking in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="dateMarkingAndInstructiosForStorageAndUse_ar"
                                                value={
                                                    formState.dateMarkingAndInstructiosForStorageAndUse_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Date Marking And Instructions In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Product Description in English:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="productDescription_en"
                                                value={
                                                    formState.productDescription_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Product Description In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Product Description in Arabic:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container f s-b _eleY">
                                            <input
                                                type="text"
                                                name="productDescription_ar"
                                                value={
                                                    formState.productDescription_ar
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Product Description In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* weight  */}

                        <div className="  double-fields-container">
                            <div className=" double-field-label-container">
                                <div>
                                    <label className="label-tag">
                                        Enter the Weight :
                                    </label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY label-select  ">
                                    <input
                                        type="text"
                                        name="weight"
                                        value={formState.weight}
                                        required
                                        spellCheck="false"
                                        placeholder="Weight"
                                        onChange={changeHandler}
                                        className="outline-none w-100  "
                                    />
                                </div>
                            </div>

                            <div className=" double-field-label-container"></div>
                        </div>
                        {/* <div className="Single-Field-Label-Container">
                        
                        </div> */}

                        {formState?.type === 'Flour Brands' && (
                            <>
                                <h5 className="_eleY">Nutritional Facts</h5>
                                {/* nutritionalFacts & energy */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Nutritonal Facts:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="nutritionalFacts"
                                                value={
                                                    formState.nutritionalFacts
                                                }
                                                // required
                                                spellCheck="false"
                                                placeholder="Nutritional Facts"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Energy:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="energy"
                                                value={formState.energy}
                                                required
                                                spellCheck="false"
                                                placeholder="Energy"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="nutritionalFacts"
                                    value={formState.nutritionalFacts}
                                    required
                                    spellCheck="false"
                                    placeholder="Nutritional Facts"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="energy"
                                    value={formState.energy}
                                    required
                                    spellCheck="false"
                                    placeholder="Energy"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* protein & totalCarbohydrates */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                {' '}
                                                Proteins:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="protein"
                                                value={formState.protein}
                                                required
                                                spellCheck="false"
                                                placeholder="Protein"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Carbohydrates:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="totalCarbohydrates"
                                                value={
                                                    formState.totalCarbohydrates
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Total Carbohydrates"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="protein"
                                    value={formState.protein}
                                    required
                                    spellCheck="false"
                                    placeholder="Protein"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="totalCarbohydrates"
                                    value={formState.totalCarbohydrates}
                                    required
                                    spellCheck="false"
                                    placeholder="Total Carbohydrates"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* totalSugar & dietaryFiberTotalFat */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                {' '}
                                                Total Sugar:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="totalSugar"
                                                value={formState.totalSugar}
                                                required
                                                spellCheck="false"
                                                placeholder="Total Sugar"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Total Fat:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="totalFat"
                                                value={formState.totalFat}
                                                required
                                                spellCheck="false"
                                                placeholder="Total Fat"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Vitamins D:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="vitaminD"
                                                value={formState.vitaminD}
                                                // required
                                                spellCheck="false"
                                                placeholder="VitaminD"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Dietary Fiber:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="dietaryFiber"
                                                value={formState.dietaryFiber}
                                                required
                                                spellCheck="false"
                                                placeholder="Dietary Fiber"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 
                        <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="totalSugar"
                                    value={formState.totalSugar}
                                    required
                                    spellCheck="false"
                                    placeholder="Total Sugar"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="dietaryFiberTotalFat"
                                    value={formState.dietaryFiberTotalFat}
                                    required
                                    spellCheck="false"
                                    placeholder="Dietary Fiber Total Fat"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* saturatedFat & monounsaturatedFat */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                {' '}
                                                Saturated Fat:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="saturatedFat"
                                                value={formState.saturatedFat}
                                                required
                                                spellCheck="false"
                                                placeholder="SaturatedFat"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Monosaurated Fat:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="monounsaturatedFat"
                                                value={
                                                    formState.monounsaturatedFat
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Monounsaturated Fat"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 
                        <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="saturatedFat"
                                    value={formState.saturatedFat}
                                    required
                                    spellCheck="false"
                                    placeholder="SaturatedFat"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="monounsaturatedFat"
                                    value={formState.monounsaturatedFat}
                                    required
                                    spellCheck="false"
                                    placeholder="Monounsaturated Fat"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* polyunsaturatedFat & transFat */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                {' '}
                                                Polyunsaturated Fat:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="polyunsaturatedFat"
                                                value={
                                                    formState.polyunsaturatedFat
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="Polyunsaturated Fat"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                {' '}
                                                Trans Fat:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="transFat"
                                                value={formState.transFat}
                                                required
                                                spellCheck="false"
                                                placeholder="Trans Fat"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 
                        <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="polyunsaturatedFat"
                                    value={formState.polyunsaturatedFat}
                                    required
                                    spellCheck="false"
                                    placeholder="Polyunsaturated Fat"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="transFat"
                                    value={formState.transFat}
                                    required
                                    spellCheck="false"
                                    placeholder="Trans Fat"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* cholesterol & iron */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label className="label-tag">
                                                Cholestrol:
                                            </label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="cholesterol"
                                                value={formState.cholesterol}
                                                required
                                                spellCheck="false"
                                                placeholder="Cholesterol"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label> Iron:</label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="iron"
                                                value={formState.iron}
                                                // required
                                                spellCheck="false"
                                                placeholder="Iron"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="cholesterol"
                                    value={formState.cholesterol}
                                    required
                                    spellCheck="false"
                                    placeholder="Cholesterol"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="iron"
                                    value={formState.iron}
                                    required
                                    spellCheck="false"
                                    placeholder="Iron"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* folicAcid & sodium */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label> Folic Acid:</label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="folicAcid"
                                                value={formState.folicAcid}
                                                // required
                                                spellCheck="false"
                                                placeholder="Folic Acid"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label>Sodium:</label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="sodium"
                                                value={formState.sodium}
                                                // required
                                                spellCheck="false"
                                                placeholder="Sodium"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 
                        <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="folicAcid"
                                    value={formState.folicAcid}
                                    required
                                    spellCheck="false"
                                    placeholder="Folic Acid"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="sodium"
                                    value={formState.sodium}
                                    required
                                    spellCheck="false"
                                    placeholder="Sodium"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                                {/* thiamine & riboflavin */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label> Thiamine:</label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="thiamine"
                                                value={formState.thiamine}
                                                // required
                                                spellCheck="false"
                                                placeholder="Thiamine"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container">
                                        <div>
                                            <label>Riboflavin:</label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="riboflavin"
                                                value={formState.riboflavin}
                                                // required
                                                spellCheck="false"
                                                placeholder="Riboflavin"
                                                onChange={changeHandler}
                                                className="outline-none w-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="thiamine"
                                    value={formState.thiamine}
                                    required
                                    spellCheck="false"
                                    placeholder="Thiamine"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="riboflavin"
                                    value={formState.riboflavin}
                                    required
                                    spellCheck="false"
                                    placeholder="Riboflavin"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}
                                {/* niacin & vitaminD */}

                                <div className="  double-fields-container">
                                    <div className=" double-field-label-container">
                                        <div>
                                            <label> Niacin:</label>
                                        </div>
                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="niacin"
                                                value={formState.niacin}
                                                // required
                                                spellCheck="false"
                                                placeholder="Niacin"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>

                                    <div className=" double-field-label-container"></div>
                                </div>
                            </>
                        )}
                        {/* <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="niacin"
                                    value={formState.niacin}
                                    required
                                    spellCheck="false"
                                    placeholder="Niacin"
                                    onChange={changeHandler}
                                    className="outline-none w-100  "
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="vitaminD"
                                    value={formState.vitaminD}
                                    required
                                    spellCheck="false"
                                    placeholder="VitaminD"
                                    onChange={changeHandler}
                                    className="outline-none w-100"
                                />
                            </div>
                        </div> */}

                        <button
                            className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                            // onClick={setpath}
                            type="submit"
                        >
                            Create
                            {productLoading ? (
                                <LoadingSpinner />
                            ) : (
                                <div className="done transit-all">
                                    <svg
                                        width="17"
                                        height="12"
                                        viewBox="0 0 17 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.4688 0.871094C16.8203 1.22266 16.8203 1.75 16.4688 2.06641L7.1875 11.3477C6.87109 11.6992 6.34375 11.6992 6.02734 11.3477L1.24609 6.56641C0.894531 6.25 0.894531 5.72266 1.24609 5.37109C1.5625 5.05469 2.08984 5.05469 2.40625 5.37109L6.625 9.58984L15.3086 0.871094C15.625 0.554687 16.1523 0.554687 16.4688 0.871094Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </div>

                    <div>{toastMessage}</div>
                </form>

                {/* <Toast
                    message={toastMessage}
                    isVisible={isToastVisible}
                    onClose={closeToast}
                    className={toastClass}
                /> */}
            </div>
        </div>
    )
}

export default CreateProduct
