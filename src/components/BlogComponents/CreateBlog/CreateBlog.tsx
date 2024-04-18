import React, { useEffect, useState } from 'react'
import '../../ProductComponents/CreateProduct/createProduct.css'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import { createBlog } from '../action'
import { useHistory } from 'react-router-dom'
import MyRichTextEditor from '../MyRichTextEditor/MyRichTextEditor.jsx'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'

function CreateBlog() {
    const [toastMessage, setToastMessage] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(1)
    const [content, setContent] = useState('')
    const [update, setUpdate] = useState(false)

    const [formState, setFormState] = useState({
        id: '',
        title_en: '',
        title_ar: '',
        description_en: EditorState.createEmpty(),
        description_ar: EditorState.createEmpty(),
        shortDescription_ar: '',
        shortDescription_en: '',
        image: '',
        featured: false,
    })

    const history = useHistory()

    const changeHandler = (event: any) => {
        const { name, value, type, checked } = event.target
        const newValue = type === 'checkbox' ? checked : value

        setFormState({
            ...formState,
            [name]: newValue,
        })
    }

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onload = (event) => {
                const base64Data = event?.target?.result

                setFormState((prevState: any) => ({
                    ...prevState,
                    image: base64Data,
                }))
            }

            reader.readAsDataURL(file)
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        const str = JSON.stringify(formState)
        const pars = JSON.parse(str)

        pars.description_en = JSON.stringify(
            convertToRaw(formState.description_en.getCurrentContent())
        )

        pars.description_ar = JSON.stringify(
            convertToRaw(formState.description_ar.getCurrentContent())
        )

        createBlog(pars, history, setLoading)
    }

    useEffect(() => {
        const updateData = localStorage.getItem('updateData')
        if (updateData) {
            setUpdate(true)
            const blog = JSON.parse(updateData)

            const contentState_en = convertFromRaw(
                JSON.parse(blog?.description_en)
            )
            const description_en = EditorState.push(
                EditorState.createEmpty(),
                contentState_en,
                'change-block-data'
            )

            const contentState_ar = convertFromRaw(
                JSON.parse(blog?.description_ar)
            )
            const description_ar = EditorState.push(
                EditorState.createEmpty(),
                contentState_ar,
                'change-block-data'
            )

            setFormState((formState) => ({
                ...formState,
                id: blog?._id,
                title_en: blog?.title_en,
                title_ar: blog?.title_ar,
                description_en: description_en,
                description_ar: description_ar,
                shortDescription_ar: blog?.shortDescription_ar,
                shortDescription_en: blog?.shortDescription_en,
                image: blog?.image,
                featured: blog?.featured,
            }))
        }
        localStorage.removeItem('updateData')
    }, [])
    const setpath = () => {
        history.push('/blogs-list')
    }

    function updatetoggle(id: any) {
        if (id === 1) {
        } else {
        }
        setToggle(id)
    }

    const handleRichTextChange = (value: any) => {
        setFormState((prevState) => ({
            ...prevState,
            description_en: value,
        }))
    }

    useEffect(() => {
        if (update) {
            if (formState?.title_en && formState?.title_ar) {
                setToggle(3)
            } else if (formState?.title_en) {
                setToggle(1)
            } else if (formState?.title_ar) {
                setToggle(2)
            }
            // Reset the update state to false after the effect runs
            setUpdate(false)
        }
    }, [formState, update])

    return (
        <div className="  small_fc x_padding  custom-inner-padding light_bg  register-form-container">
            <div className="f s-b  a-c ptb">
                <div>
                    {' '}
                    <h4 className="   _eleY">
                        Create Blog <br />
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

            <div className="  create-blogs-tabs-container  ptb-40  ">
                <div className="  create-tab-container">
                    <div className="create-tab-links-conainer">
                        <div className="createtabs">
                            <div
                                className={`  create-blogs-tabs
                ${toggle === 1 ? 'create-blog-active-border ' : ''}`}
                                onClick={() => updatetoggle(1)}
                            >
                                {/* {t('blogfeaturelabel')} */}
                                English
                            </div>
                            <div
                                className={`  create-blogs-tabs   
                ${toggle === 2 ? 'create-blog-active-border ' : ' '}`}
                                onClick={() => updatetoggle(2)}
                            >
                                {/* {t('blogmostrecent')} */}
                                Arabic
                            </div>

                            <div
                                className={`  create-blogs-tabs   
                ${toggle === 3 ? 'create-blog-active-border ' : ' '}`}
                                onClick={() => updatetoggle(3)}
                            >
                                {/* {t('blogmostrecent')} */}
                                Both
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section_head f f-c       `}>
                <form>
                    <div className="custom-form-set f f-c">
                        <div className=" Check-Box-Main_div    ">
                            <label>Featured:</label>
                            <div className=" checkbox-wrapper _eleY">
                                <input
                                    type="checkbox"
                                    name="featured"
                                    checked={formState?.featured}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div className="  create-blog-double-fields-container">
                            {(toggle === 1 || toggle === 3) && (
                                <>
                                    {' '}
                                    <div className=" create-blog-label-div  w-100">
                                        <div>
                                            <label className="label-tag">
                                                Title in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="title_en"
                                                value={formState?.title_en}
                                                required
                                                spellCheck="false"
                                                placeholder="Title In English"
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {(toggle === 2 || toggle === 3) && (
                                <>
                                    {' '}
                                    <div className=" create-blog-label-div   w-100">
                                        <div>
                                            <label className="label-tag">
                                                Title in Arabic:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="title_ar"
                                                value={formState?.title_ar}
                                                required
                                                spellCheck="false"
                                                placeholder="Title In Arabic"
                                                onChange={changeHandler}
                                                className="outline-none w-100 "
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="  create-blog-double-fields-container">
                            {(toggle === 1 || toggle === 3) && (
                                <>
                                    <div className=" create-blog-label-div  w-100">
                                        <div>
                                            <label className="label-tag">
                                                Short Description in English:
                                            </label>
                                        </div>

                                        <div className="custom-btn-container  f s-b _eleY">
                                            <input
                                                type="text"
                                                name="shortDescription_en"
                                                value={
                                                    formState?.shortDescription_en
                                                }
                                                required
                                                spellCheck="false"
                                                placeholder="  Short Description In English "
                                                onChange={changeHandler}
                                                className="outline-none w-100  "
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {(toggle === 2 || toggle === 3) && (
                                <div className=" create-blog-label-div  w-100">
                                    <div>
                                        <label className="label-tag">
                                            Short Description in Arabic:
                                        </label>
                                    </div>

                                    <div className="custom-btn-container  f s-b _eleY">
                                        <input
                                            type="text"
                                            name="shortDescription_ar"
                                            value={
                                                formState?.shortDescription_ar
                                            }
                                            required
                                            spellCheck="false"
                                            placeholder=" Short Description In Arabic"
                                            onChange={changeHandler}
                                            className="outline-none w-100 "
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="  create-blog-double-fields-container  w-100">
                            <div className=" create-blog-label-div">
                                <div>
                                    <label className="label-tag">
                                        Upload The Image:
                                    </label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY">
                                    <input
                                        type="file"
                                        required
                                        onChange={handleImageUpload}
                                        className="outline-none w-100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="  create-blog-double-fields-container">
                            {(toggle === 1 || toggle === 3) && (
                                <div className=" create-blog-label-div  w-100">
                                    <div>
                                        <label className="label-tag">
                                            Description in English:
                                        </label>
                                    </div>

                                    <div>
                                        <MyRichTextEditor
                                            name="description_en"
                                            value={formState.description_en}
                                            changeHandler={changeHandler}
                                        />
                                    </div>
                                </div>
                            )}

                            {(toggle === 2 || toggle === 3) && (
                                <div className=" create-blog-label-div  w-100">
                                    <div>
                                        <label className="label-tag">
                                            Description in Arabic:
                                        </label>
                                    </div>

                                    <div>
                                        <MyRichTextEditor
                                            name="description_ar"
                                            value={formState.description_ar}
                                            changeHandler={changeHandler}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                            onClick={submitHandler}
                            type="submit"
                        >
                            {formState.id ? 'Update' : 'Create'}
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
                    <div>{toastMessage}</div>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
