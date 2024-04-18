import React from 'react'
import './Logo.css'
import { useState, useEffect } from 'react'
import baseUrl from '../../../../ApiFile'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

const Logo = () => {
    const [logoData, setLogoData] = useState('')
    const [getLogoData, setgetLogoData] = useState<any>('')
    const [isLoading, setIsLoading] = useState(false)
    // Send Image In Data Base
    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = (e: any) => {
                setLogoData(e.target.result)
            }
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        debugger
        if (!logoData) {
            if (!logoData) {
                toast.info('No Image Data Is Sended', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            }
            console.error('No image data to send.')
            return
        }

        const data = {
            logo: logoData,
        }

        setIsLoading(true)
        await axios({
            method: 'post',
            url: `${baseUrl}/gernalSetting/updateLogo`,
            data: data,
        })
            .then((res: any) => {
                if (res.data) {
                    toast.success(res.data.message, {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: 'light',
                    })
                }
                setIsLoading(false)
            })
            .catch((error: any) => {
                if (error) {
                }
                setIsLoading(false)
            })
    }

    // Get Logo Data From Data Base

    const getLogo = async () => {
        try {
            const response = await axios.get(`${baseUrl}/gernalSetting/getLogo`)
            setgetLogoData(response.data)
        } catch (error: any) {
            console.error(error)

            if (error) {
                toast.error(error, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            }
        }
    }

    useEffect(() => {
        getLogo()
    }, [])

    return (
        <div className="form_sides f small_fc  f-c  light_bg     ">
            <div className="form_side  pt-30">
                <div className="section_head f pt-custom  ">
                    <p className="_eleY"> Upload Your Logo</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="custom-form-set f px-30  a-c ">
                        <div className="custom-btn-container f s-b  _eleY">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                placeholder="Upload you Logo"
                            />
                            <div className="upload full_bg f a-c j-e">
                                <div className="custom-btn-custom  light_brown_bg interactive_label f a-c j-c pointer">
                                    <strong className="_txt words">
                                        Upload Logo
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                width="100%"
                                src={`${getLogoData?.data?.companyLogo?.[0]?.logo}`}
                            />
                        </div>
                        <div
                            className="input_set f s-b _eleY"
                            onClick={handleSubmit}
                        >
                            <input type="submit" className="submit_form" />
                            <div className="custom-btn   primary_bg f a-c j-c pointer submit interactive_label">
                                <strong className="uppercase _txt words">
                                    Save
                                </strong>
                                <>
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
                                </>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Logo
