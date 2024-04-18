import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import baseUrl from '../../../../ApiFile'
import { toast } from 'react-toastify'
import { useHistory, useLocation } from 'react-router-dom'
import { getPostsbyid } from '../actionfile'
import { postUpdate } from '../actionfile'
import { createPost } from '../actionfile'

const CreateCareersPosts = () => {
    const history = useHistory()
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const id = queryParams.get('id')

    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setisEditing] = useState(false)

    const [postData, setPostData] = useState({
        jobTitle_en: '',
        jobTitle_ar: '',
        location_en: '',
        location_ar: '',
        type_en: '',
        type_ar: '',
        jobDescription_en: '',
        jobDescription_ar: '',
        jobPostLink: '',
    })

    const changeHandler = (event: any) => {
        const { name, value } = event.target
        setPostData((postData) => ({
            ...postData,
            [name]: value,
        }))
    }

    useEffect(() => {
        if (id) {
            getPostsbyid(id, setIsLoading, setPostData)
            setisEditing(true)
        }
    }, [])

    const setpath = () => {
        history.push('/jobposts')
    }

    // const submitHandler = (e: any) => {
    //     createPost(e, postData, setIsLoading, history)
    // }

    // const updatePost = (e: any) => {
    //     postUpdate(e, postData, setIsLoading, history)
    // }

    const submitHandler = (e: any) => {
        e.preventDefault()

        // Conditionally call the appropriate handler based on isEditing
        if (isEditing) {
            postUpdate(id, e, postData, setIsLoading, history)
        } else {
            createPost(e, postData, setIsLoading, history)
        }
    }

    return (
        <>
            <div className="   small_fc x_padding  custom-inner-padding light_bg  register-form-container">
                <div className="f s-b  a-c ptb">
                    <div>
                        {' '}
                        <h4 className="">
                            Add Job Post <br />
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

                <form onSubmit={submitHandler}>
                    <div className="gap-custom f f-c">
                        <div className="  double-fields-container ">
                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Job title in English
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100 f s-b  ">
                                    <input
                                        type="text"
                                        name="jobTitle_en"
                                        required
                                        spellCheck="false"
                                        placeholder="Title In English"
                                        value={postData.jobTitle_en}
                                        onChange={changeHandler}
                                        className="outline-none  w-100 "
                                    />
                                </div>
                            </div>

                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Job title in Arabic
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100  ">
                                    <input
                                        type="text"
                                        name="jobTitle_ar"
                                        required
                                        spellCheck="false"
                                        placeholder="Title In Arabic"
                                        value={postData.jobTitle_ar}
                                        onChange={changeHandler}
                                        className="outline-none w-100 "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="  double-fields-container ">
                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Location in English
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100 f s-b  ">
                                    <input
                                        type="text"
                                        name="location_en"
                                        required
                                        spellCheck="false"
                                        placeholder="Location In English"
                                        className="outline-none  w-100 "
                                        onChange={changeHandler}
                                        value={postData.location_en}
                                    />
                                </div>
                            </div>

                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Location in Arabic
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100  ">
                                    <input
                                        type="text"
                                        name="location_ar"
                                        required
                                        spellCheck="false"
                                        value={postData.location_ar}
                                        onChange={changeHandler}
                                        placeholder="Location In Arabic"
                                        className="outline-none "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="  double-fields-container ">
                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Type in English
                                    </label>
                                </div>{' '}
                                <div className="custom-input-set f s-b  a-c _eleY  custom-bg-dropdown  w-100  ">
                                    <select
                                        name="type_en"
                                        placeholder="Select Your Brand"
                                        className="custom-select-btn  custom-bg-dropdown "
                                        value={postData.type_en}
                                        onChange={changeHandler}
                                        required
                                    >
                                        <option value="">
                                            Select Job Type
                                        </option>
                                        <option value="Full-Time">
                                            Full Time
                                        </option>
                                        <option value="Remote/Full Time">
                                            Remote/Full Time
                                        </option>
                                        <option value=" Part Time">
                                            {' '}
                                            Part Time
                                        </option>
                                        <option value=" Contract Based">
                                            {' '}
                                            Contract Based
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Type in Arabic
                                    </label>
                                </div>{' '}
                                <div className="custom-input-set f s-b  a-c _eleY  custom-bg-dropdown  w-100  ">
                                    <select
                                        name="type_ar"
                                        placeholder="Select Your Brand"
                                        className="custom-select-btn  custom-bg-dropdown "
                                        value={postData.type_ar}
                                        onChange={changeHandler}
                                        required
                                    >
                                        <option value="">
                                            Select Job Type
                                        </option>
                                        <option value="دوام كامل">
                                            دوام كامل
                                        </option>
                                        <option value="عن بعد / دوام كامل">
                                            عن بعد / دوام كامل
                                        </option>
                                        <option value=" دوام جزئى">
                                            {' '}
                                            دوام جزئى
                                        </option>
                                        <option value=" على أساس العقد">
                                            {' '}
                                            على أساس العقد
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="  double-fields-container ">
                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Add Job Post Link:
                                    </label>
                                </div>{' '}
                                <div className="custom-btn-container w-100 f s-b  ">
                                    <input
                                        type="text"
                                        name="jobPostLink"
                                        required
                                        spellCheck="false"
                                        placeholder="Add Job Post Link"
                                        value={postData.jobPostLink}
                                        onChange={changeHandler}
                                        className="outline-none  w-100 "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <div className="  double-fields-container ">
                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Description in English
                                    </label>
                                </div>{' '}
                                <div className=" w-100 f s-b  ">
                                    <textarea
                                        rows={4}
                                        name="jobDescription_en"
                                        required
                                        spellCheck="false"
                                        placeholder="Add Description in English"
                                        value={postData.jobDescription_en}
                                        onChange={changeHandler}
                                        className="outline-none  custom-text-area  w-100   "
                                    />
                                </div>
                            </div>

                            <div className="Single-Field-Label-Container f-c w-100 category-field-container">
                                <div>
                                    <label className="label-tag">
                                        Description in Arabic
                                    </label>
                                </div>{' '}
                                <div className=" w-100 f s-b  ">
                                    <textarea
                                        rows={4}
                                        name="jobDescription_ar"
                                        required
                                        spellCheck="false"
                                        placeholder="Add Description in Arabic"
                                        value={postData.jobDescription_ar}
                                        onChange={changeHandler}
                                        className="outline-none  custom-text-area  w-100   "
                                    />
                                </div>
                            </div>
                        </div> */}

                        <button
                            className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                            // onClick={setpath}
                            type="submit"
                        >
                            {isEditing ? 'Update' : 'Add'} Post
                            {isLoading ? (
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
                </form>
            </div>
        </>
    )
}

export default CreateCareersPosts
