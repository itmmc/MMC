import React, { useState, useEffect } from 'react'
import axios from 'axios'
import baseUrl from '../../../../ApiFile'
import { ToastContainer, toast } from 'react-toastify'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

const CompanyInfo = () => {
    const [companydata, setcompanydata] = useState({
        address: '',
        address_ar: '',
        direction: '',
        mail: '',
        phoneNo: '',
    })

    // const [companyDataInfo, setCompanyDataInfo] = useState({})

    useEffect(() => {
        getcompanyinfo()
    }, [])

    const getcompanyinfo = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/gernalSetting/getCompanyInfo`
            )
            const companyInfo = response.data.data.companyInfo[0]
            setcompanydata((companydata) => ({
                ...companydata,
                address_ar: companyInfo.address_ar,
                address: companyInfo.address,
                direction: companyInfo.direction,
                mail: companyInfo.mail,
                phoneNo: companyInfo.phoneNo,
            }))
        } catch (error) {}
    }
    const [isLoading, setIsLoading] = useState(false)
    const handlecompanydata = async (e: any) => {
        e.preventDefault()
        if (
            !companydata.address_ar ||
            !companydata.address ||
            !companydata.direction ||
            !companydata.mail ||
            !companydata.phoneNo
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
            url: `${baseUrl}/gernalSetting/updateCompanyInfo`,
            data: companydata,
        })
            .then((res: any) => {
                toast.success(`Data Save Successfully`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
                setIsLoading(false)
            })
            .catch((error: any) => {
                setIsLoading(false)
            })
    }

    return (
        <div className="form_sides f small_fc  f-c  light_bg     ">
            <div className="form_side pt-30   ">
                <div className="section_head f pt-custom  ">
                    <p className="_eleY"> Update Company Info</p>
                </div>

                <form onSubmit={handlecompanydata}>
                    <div className="custom-form-set f  px-30 f-c  ">
                        <div className="  double-fields-container">
                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="address"
                                    className="outline-none w-100"
                                    placeholder="Company Address In English"
                                    value={companydata.address}
                                    onChange={(e) =>
                                        setcompanydata({
                                            ...companydata,
                                            address: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="custom-btn-container w-100 f s-b _eleY">
                                <input
                                    type="text"
                                    name="address"
                                    className="outline-none w-100"
                                    placeholder="Company Address In Arabic"
                                    value={companydata.address_ar}
                                    onChange={(e) =>
                                        setcompanydata({
                                            ...companydata,
                                            address_ar: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="custom-btn-container f s-b  _eleY">
                            <input
                                type="text"
                                name="CV"
                                className="outline-none w-100"
                                value={companydata.direction}
                                placeholder="Update Company Direction"
                                onChange={(e) =>
                                    setcompanydata({
                                        ...companydata,
                                        direction: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="custom-btn-container f s-b  _eleY">
                            <input
                                type="email"
                                name="CV"
                                className="outline-none w-100"
                                placeholder="Update Company mail"
                                value={companydata.mail}
                                onChange={(e) =>
                                    setcompanydata({
                                        ...companydata,
                                        mail: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="custom-btn-container f s-b  _eleY">
                            <input
                                type="text"
                                name="CV"
                                className="outline-none w-100"
                                placeholder="Update Phone No"
                                value={companydata.phoneNo}
                                onChange={(e) =>
                                    setcompanydata({
                                        ...companydata,
                                        phoneNo: e.target.value,
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

export default CompanyInfo
