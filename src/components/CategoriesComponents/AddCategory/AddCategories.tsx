import React, { useEffect, useState } from 'react'

import './addcategories.css'
import { useTranslation } from 'react-i18next'
import { creatCategory, getBrand } from '../actions'
import { useHistory, useLocation } from 'react-router-dom'
import Toast from '@components/ToastComponent/Toast'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

const AddCategories = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    const [isToastVisible, setIsToastVisible] = useState(false)
    const [toastClass, setToastClass] = useState('')
    const [toastMessage, setToastMessage] = useState('')
    const [brands, setBrands] = useState([])
    const history = useHistory()
    const location: any = useLocation()
    const [brandLoading, setBrandLoading] = useState(false)
    const [allBrands, setAllBrands] = useState([])
    const [selectedOption, setSelectedOption] = useState('')
    const [categoryLoading, setCategoryLoading] = useState(false)
    const [formState, setFormState] = useState({
        id: '',
        name_en: '',
        name_ar: '',
        type: '',
        brand: '',
    })

    useEffect(() => {
        getBrand(setAllBrands, setBrands, setBrandLoading)
        const updateData = localStorage.getItem('updateData')
        if (updateData) {
            const category = JSON.parse(updateData)
            // const category = location.state.item
            setFormState((formState) => ({
                ...formState,
                id: category._id,
                name_en: category?.name_en,
                name_ar: category?.name_ar,
                type: category.type,
                brand: category.brand._id,
            }))
        }
        localStorage.removeItem('updateData')
    }, [])

    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
    }

    const changeHandler = (event: any) => {
        const { name, value } = event.target
        setFormState(() => ({
            ...formState,
            [name]: value,
        }))

        if (name === 'type' && value === 'Animal Feeds Brand') {
            const brandd: any = allBrands.find((b: any) => b.name === value)
            setFormState((formState) => ({
                ...formState,
                brand: brandd._id,
            }))
        }
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

    const categoryCall = (e: any) => {
        e.preventDefault()
        const isValidate = validateForm()
        if (isValidate) {
            creatCategory(formState, setCategoryLoading, history)
        }
    }

    const setpath = () => {
        history.push('/categories')
        // reloadPage('/#/categories')
    }

    return (
        <div className="  small_fc x_padding  custom-inner-padding light_bg  register-form-container">
            <div className="f s-b  ptb">
                <div>
                    {' '}
                    <h4 className="">
                        Add Category <br />
                    </h4>
                </div>

                <div className="Create-Category-btn      ">
                    <div
                        className="primary_bg custom-btn interactive_label f a-c j-c "
                        aria-label="Contact"
                    >
                        <strong className="_txt words" onClick={setpath}>
                            {' '}
                            Go Back
                        </strong>
                    </div>
                </div>
            </div>
            <div className="section_head f f-c  category-head">
                <form onSubmit={categoryCall}>
                    <div className="custom-form-set f f-c">
                        <div>
                            <label className="label-tag">
                                Select your Brand :
                            </label>
                        </div>
                        <div className="custom-input-set f s-b  a-c  ">
                            <select
                                name="type"
                                placeholder="Select Your Brand"
                                value={formState.type}
                                onChange={changeHandler}
                                className="custom-select-btn"
                                required
                            >
                                {brandLoading ? (
                                    <option disabled>Loading...</option>
                                ) : (
                                    <>
                                        <option value="" disabled>
                                            Select Your Brand
                                        </option>
                                        <option value="Flour Brands">
                                            Flour Brand
                                        </option>
                                        <option value="Animal Feeds Brand">
                                            Animal Feed Brands
                                        </option>
                                    </>
                                )}
                            </select>
                        </div>
                        {formState?.type === 'Flour Brands' && (
                            <>
                                {' '}
                                <div className="custom-input-set f s-b  a-c  flour-subbrands">
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
                                    {/* <svg
                                        width="16"
                                        height="9"
                                        viewBox="0 0 16 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.0625 1.97266L8.34766 8.40625C8.17187 8.54687 7.96094 8.65234 7.75 8.65234C7.53906 8.65234 7.32812 8.54687 7.1875 8.40625L0.472656 1.97266C0.121094 1.65625 0.121094 1.09375 0.4375 0.777343C0.753906 0.425781 1.28125 0.425781 1.63281 0.742187L7.78516 6.64844L13.9023 0.742187C14.2187 0.425781 14.7812 0.425781 15.0977 0.777344C15.4141 1.09375 15.4141 1.65625 15.0625 1.97266Z"
                                            fill="#121437"
                                        />
                                    </svg> */}
                                </div>
                            </>
                        )}

                        <div className="  double-fields-container ">
                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Category in English
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100 f s-b  ">
                                    <input
                                        type="text"
                                        name="name_en"
                                        value={formState?.name_en}
                                        required
                                        spellCheck="false"
                                        placeholder="Category In English"
                                        onChange={changeHandler}
                                        className="outline-none  "
                                    />
                                </div>
                            </div>
                            {/* 
                            <div className="custom-btn-container w-100 f s-b ">
                                <input
                                    type="text"
                                    name="name_en"
                                    value={formState?.name_en}
                                    required
                                    spellCheck="false"
                                    placeholder="Category In English"
                                    onChange={changeHandler}
                                    className="outline-none  "
                                />
                            </div> */}

                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Category in Arabic
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100  ">
                                    <input
                                        type="text"
                                        name="name_ar"
                                        value={formState?.name_ar}
                                        required
                                        spellCheck="false"
                                        placeholder="Category In Arabic"
                                        onChange={changeHandler}
                                        className="outline-none "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <div
                            className="input_set f s-b _eleY"
                            // onClick={(e: any) => {
                            //     categoryCall(e)
                            // }}
                            // onClick={categoryCall}
                        >
                            <input type="submit" className="submit_form" />
                            <div className="custom-btn   site_button primary_bg f a-c j-c pointer submit interactive_label">
                                <strong className="uppercase _txt words">
                                    Add Category
                                </strong>
                                {categoryLoading ? (
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
                            </div>
                        </div> */}
                        <button
                            className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                            // onClick={setpath}
                            type="submit"
                        >
                            Add Category
                            {categoryLoading ? (
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
            </div>
        </div>
    )
}

export default AddCategories
