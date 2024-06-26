import React, { useState, useEffect } from 'react'
import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import axios from 'axios'
import baseUrl from '../ApiFile'
import { toast } from 'react-toastify'
import downloadicon from '../../images/downloadicon.png'
import CustomLoader from '@components/CustomLoader'
import NoDataFound from './NoDataFound/NoDataFound'

const ContactUs = () => {
    const [requestData, setrequestData] = useState<any>([])
    const [isLoading, setLoading] = useState(false)

    useEffect

    const handleget = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${baseUrl}/contactus/get`)

            setrequestData(response.data.data.contactUs)

            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        handleget()
    }, [])

    return (
        <div>
            <>
                <div
                    className="settings-heading-container"
                    style={{
                        background: '#eae2d4',
                        paddingTop: '1.7rem',
                        paddingBottom: '1.7rem',
                    }}
                >
                    <AdminHeader heading={'Contact US '} />
                </div>

                <div className="custom-inner-padding light_bg f f-c   x_padding ">
                    <div style={{ overflow: 'auto', paddingBottom: '10px' }}>
                        <table className="table-container  custom-table-container">
                            <thead className="table-head">
                                <tr>
                                    <th align="center">Name</th>
                                    <th align="center">Email</th>
                                    <th align="center">Phone No</th>
                                    <th align="center">Reason</th>
                                    <th align="center">Message</th>
                                </tr>
                            </thead>
                            {isLoading ? (
                                <CustomLoader />
                            ) : (
                                <tbody>
                                    {requestData.length > 0 ? (
                                        requestData.map((item: any) => (
                                            <tr key={item._id}>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {item?.firstName}
                                                </td>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {item?.mail}
                                                </td>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {item?.phoneNo}
                                                </td>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {item?.reason}
                                                </td>
                                                <td
                                                    className="fs-15"
                                                    align="center"
                                                >
                                                    {item?.message}
                                                </td>

                                                {/* <td align="center">
                                                        <a
                                                            className="update-button"
                                                            href={item?.cv}
                                                            download={`${item?.firstName}_CV`}
                                                            title="Download CVs "
                                                        >
                                                            <img
                                                                src={
                                                                    downloadicon
                                                                }
                                                                alt="Download"
                                                            />
                                                        </a>
                                                    </td> */}
                                            </tr>
                                        ))
                                    ) : (
                                        <div>
                                            <NoDataFound />
                                        </div>
                                    )}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ContactUs
