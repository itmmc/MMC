import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import baseUrl from '../../ApiFile'
import axios from 'axios'

const CreateNewsFeed = () => {
    const [imagedata, setimageData] = useState('')
    const [feeddata, setfeeddata] = useState({
        heading_en: '',
        heading_ar: '',
        subHeading_en: '',
        subHeading_ar: '',
        description_ar: '',
        description_en: '',
        image: '',
    })

    const changeHandler = (e: any) => {
        const { name, value } = e.target
        setfeeddata((feeddata) => ({
            ...feeddata,
            [name]: value,
        }))
    }

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = (e: any) => {
                setimageData(e.target.result)
                setfeeddata((requestdata: any) => ({
                    ...requestdata,
                    image: e.target.result,
                }))
            }
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault() // Prevent the form from actually submitting
        await axios({
            method: 'post',
            url: `${baseUrl}/news/create`,
            data: feeddata,
        })
            .then((response) => {
                toast.success(
                    `Data Save Successfully ${response.data.message}`,
                    {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: 'light',
                    }
                )
            })

            .catch((error) => {
                toast.error(`Error in sending information    ${error}`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            })

        // Now, you can do other things with the updated requestdata
    }

    const setpath = () => {
        window.location.href = '/#/newsfeeds'
        window.location.reload()
    }
    return (
        <div className="  small_fc x_padding  custom-inner-padding light_bg  register-form-container">
            <div className="f s-b  ptb">
                <div>
                    {' '}
                    <h4 className="_eleY">
                        Add News Feed <br />
                    </h4>
                </div>

                <div className="Create-Category-btn       " onClick={setpath}>
                    <div
                        className="primary_bg custom-btn interactive_label f a-c j-c "
                        aria-label="Contact"
                    >
                        <strong className="_txt words"> Go Back</strong>
                    </div>
                </div>
            </div>

            <div className="form_sides f small_fc  f-c  light_bg     ">
                <div className="form_side pt-30   _eleWrap">
                    <div className="section_head f pt-custom  ">
                        <p className="_eleY"> Update News Feed Info</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="custom-form-set f  px-30 f-c  ">
                            <div className="  double-fields-container">
                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="text"
                                        name="heading_en"
                                        value={feeddata.heading_en}
                                        onChange={changeHandler}
                                        required
                                        spellCheck="false"
                                        placeholder="Heading in English"
                                        className="outline-none  "
                                    />
                                </div>

                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="text"
                                        name="heading_ar"
                                        value={feeddata.heading_ar}
                                        onChange={changeHandler}
                                        required
                                        spellCheck="false"
                                        placeholder="Heading In Arabic"
                                        className="outline-none "
                                    />
                                </div>
                            </div>

                            <div className="  double-fields-container">
                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="text"
                                        name="subHeading_en"
                                        value={feeddata.subHeading_en}
                                        onChange={changeHandler}
                                        required
                                        spellCheck="false"
                                        placeholder="SubHeading In English"
                                        className="outline-none  "
                                    />
                                </div>

                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="text"
                                        name="subHeading_ar"
                                        value={feeddata.subHeading_ar}
                                        onChange={changeHandler}
                                        required
                                        spellCheck="false"
                                        placeholder="SubHeading In Arabic"
                                        className="outline-none "
                                    />
                                </div>
                            </div>

                            <div className="  double-fields-container">
                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="text"
                                        name="description_en"
                                        value={feeddata.description_en}
                                        onChange={changeHandler}
                                        required
                                        spellCheck="false"
                                        placeholder="Description In English"
                                        className="outline-none  "
                                    />
                                </div>

                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="text"
                                        name="description_ar"
                                        value={feeddata.description_ar}
                                        onChange={changeHandler}
                                        required
                                        spellCheck="false"
                                        placeholder="Description In Arabic"
                                        className="outline-none "
                                    />
                                </div>
                            </div>

                            <div className="custom-btn-container f s-b  _eleY">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    placeholder="Upload you Logo"
                                />
                                <div className="upload full_bg f a-c j-e">
                                    <div className="custom-btn-custom light_brown_bg interactive_label f a-c j-c pointer">
                                        <strong className="_txt words">
                                            Upload Logo
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="input_set f j-e _eleY">
                                <input type="submit" className="submit_form" />
                                <div className="custom-btn primary_bg f a-c j-c pointer submit interactive_label">
                                    <strong className="uppercase _txt words">
                                        Save
                                    </strong>
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
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateNewsFeed
