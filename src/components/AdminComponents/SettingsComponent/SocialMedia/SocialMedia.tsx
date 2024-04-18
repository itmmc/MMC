import React from 'react'
import axios from 'axios'
import baseUrl from '../../../../ApiFile'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

const SocialMedia = () => {
    const [socialMediaData, setSocialMediaData] = useState({
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const handleSocialMedia = async (e: any) => {
        e.preventDefault()

        if (
            !socialMediaData.facebook ||
            !socialMediaData.instagram ||
            !socialMediaData.twitter ||
            !socialMediaData.linkedin
        ) {
            toast.info(' Please Fill out all the Fields', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            return
        }

        setIsLoading(true)
        await axios({
            method: 'Post',
            url: `${baseUrl}/gernalSetting/updateSocialMediaLinks`,
            data: socialMediaData,
        })
            .then((res: any) => {
                toast.success(`Links Updated Successfuly`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
                setIsLoading(false)
            })
            .catch((error: any) => {
                toast.error(error.data.message, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
                setIsLoading(false)
            })
    }

    const getSocialMediaLinks = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/gernalSetting/getSocialMediaLinks`
            )
            const socialMedia = response.data.data.companySocialMediaLinks[0]
            setSocialMediaData((socialMediaData) => ({
                ...socialMediaData,
                facebook: socialMedia.facebook,
                instagram: socialMedia.instagram,
                twitter: socialMedia.twitter,
                linkedin: socialMedia.linkedin,
            }))
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getSocialMediaLinks()
    }, [])

    return (
        <div className="form_sides f small_fc  f-c  light_bg     ">
            <div className="form_side pt-30   ">
                <div className="section_head f pt-custom  ">
                    <p className=""> Upload Social Media Links</p>
                </div>

                <form onSubmit={handleSocialMedia}>
                    <div className="custom-form-set f  px-30 f-c  ">
                        <div className="custom-btn-container f s-b  ">
                            <input
                                type="text"
                                name="CV"
                                className="outline-none w-100"
                                required
                                value={socialMediaData.facebook}
                                onChange={(e) =>
                                    setSocialMediaData({
                                        ...socialMediaData,
                                        facebook: e.target.value,
                                    })
                                }
                                placeholder="Upload Facebook Link"
                            />
                        </div>

                        <div className="custom-btn-container f s-b  ">
                            <input
                                type="text"
                                name="CV"
                                className="outline-none w-100"
                                required
                                value={socialMediaData.twitter}
                                placeholder="Upload Twitter Link"
                                onChange={(e) =>
                                    setSocialMediaData({
                                        ...socialMediaData,
                                        twitter: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="custom-btn-container f s-b  ">
                            <input
                                type="text"
                                name="CV"
                                className="outline-none w-100"
                                required
                                placeholder="Upload Instagram Link"
                                value={socialMediaData.instagram}
                                onChange={(e) =>
                                    setSocialMediaData({
                                        ...socialMediaData,
                                        instagram: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="custom-btn-container f s-b  ">
                            <input
                                type="text"
                                name="CV"
                                required
                                placeholder="Upload Linked In Link"
                                className="outline-none w-100"
                                value={socialMediaData.linkedin}
                                onChange={(e) =>
                                    setSocialMediaData({
                                        ...socialMediaData,
                                        linkedin: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="  f j-e">
                            <button
                                className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                                // onClick={handleSave}
                                type="submit"
                                disabled={isLoading ? true : false}
                            >
                                {isLoading ? <LoadingSpinner /> : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SocialMedia
