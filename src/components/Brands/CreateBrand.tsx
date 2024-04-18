import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import { createBrand } from '@views/Brands/action'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBrand = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(false)
    const [formState, setFormState] = useState<any>({
        brandId: '',
        name: '',
        name_ar: '',
        image: '',
    })

    const setpath = () => {
        history.push('/brands-list')
    }

    const changeHandler = (event: any) => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
        const updateData = localStorage.getItem('updateData')
        if (updateData) {
            const brand = JSON.parse(updateData)
            setFormState((formState: any) => ({
                ...formState,
                brandId: brand?._id,
                name: brand?.name,
                name_ar: brand?.name_ar,
                image: brand?.image,
            }))
        }
        localStorage.removeItem('updateData')
    }, [])

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onload = (event: any) => {
                const base64Data = event?.target?.result
                const base64String = base64Data?.split(',')[1]

                setFormState((prevState: any) => ({
                    ...prevState,
                    image: base64String,
                }))
            }

            reader.readAsDataURL(file)
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        const data = {
            ...formState,
            type: 'Flour Brands',
        }
        createBrand(data, history, setLoading)
    }

    return (
        <div className="  small_fc x_padding  custom-inner-padding light_bg  register-form-container">
            <div className="f s-b  ptb">
                <div>
                    {' '}
                    <h4 className="_eleY">
                        {formState?.brandId ? 'Update' : 'Create'} Flour Brand{' '}
                        <br />
                    </h4>
                </div>

                <div className="Create-Category-btn">
                    <div
                        className="primary_bg custom-btn interactive_label f a-c j-c "
                        aria-label="Contact"
                        onClick={setpath}
                    >
                        <strong className="_txt words">Go Back</strong>
                    </div>
                </div>
            </div>

            <div className="section_head f f-c  ">
                <form>
                    <div className="custom-form-set f f-c">
                        <div className="  double-fields-container">
                            <div className=" double-field-label-container">
                                <div>
                                    <label className="label-tag">Brand Title in English:</label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState?.name}
                                        required
                                        spellCheck="false"
                                        placeholder="Brand Name In English"
                                        onChange={changeHandler}
                                        className="outline-none w-100  "
                                    />
                                </div>
                            </div>

                            <div className=" double-field-label-container">
                                <div>
                                    <label className="label-tag">Brand Title in Arabic:</label>
                                </div>

                                <div className="custom-btn-container  f s-b _eleY">
                                    <input
                                        type="text"
                                        name="name_ar"
                                        value={formState?.name_ar}
                                        required
                                        spellCheck="false"
                                        placeholder="Brand Name In Arabic"
                                        onChange={changeHandler}
                                        className="outline-none w-100  "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="  double-fields-container">
                            <div className=" double-field-label-container  ">
                                <div>
                                    <label className="label-tag">Upload The Image:</label>
                                </div>

                                <div className="custom-btn-container f s-b  _eleY">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        placeholder="Upload you Brand Image"
                                        className="w-100"
                                    />
                                    <div className="upload full_bg f a-c j-e">
                                        <div className="custom-btn-custom  light_brown_bg interactive_label f a-c j-c pointer">
                                            <strong className="_txt words">
                                                {formState?.brandId
                                                    ? 'Update'
                                                    : 'Create'}{' '}
                                                Brand
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" double-field-label-container"></div>
                        </div>

                        <button
                            className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                            onClick={submitHandler}
                            type="submit"
                        >
                            {formState?.brandId ? 'Update' : 'Create'}
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
                    {/* <div>{toastMessage}</div> */}
                </form>
            </div>
        </div>
    )
}

export default CreateBrand
