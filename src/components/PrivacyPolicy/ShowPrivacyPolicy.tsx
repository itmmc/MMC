import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import forward from '../../../images/next.png'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import baseUrl from '../../ApiFile'
import Header from '@components/Navbar/header'
import { toast } from 'react-toastify'
import Wrapper from '@components/Wrapper'

import { onWindowLoad, onFontsLoad, onWindowResize } from '../../script'
import NoDataFound from '@components/NoDataFound/NoDataFound'

const isAdmin = localStorage.getItem('accessToken')
const ShowPrivacyPolicy = () => {
    const history = useHistory()
    const [privacyData, setPrivacyData] = useState<string[]>([])

    const handleget = async () => {
        try {
            const response: any = await axios.get<string[]>(
                `${baseUrl}/terms_privacy/get`
                // `${baseUrl}/terms/get`
            )
            setPrivacyData(response.data.data.terms[0].privacy)
        } catch (error) {}
    }

    const isAdmin = localStorage.getItem('accessToken')

    if (!isAdmin) {
        useEffect(() => {
            onWindowLoad()
            onFontsLoad()
            onWindowResize()
        }, [])
    }

    useEffect(() => {
        handleget()
        localStorage.removeItem('updateData')
    }, [])

    const setpath = () => {
        history.push('/createprivacy')
        localStorage.setItem('updateData', JSON.stringify(privacyData))
    }

    return (
        <>
            {/* {!isAdmin && <Header />} */}
            {isAdmin ? (
                <>
                    <div
                        className="settings-heading-container"
                        style={{
                            background: '#eae2d4',
                            paddingTop: '1.7rem',
                            paddingBottom: '1.7rem',
                            marginTop: `${!isAdmin ? '5%' : '0%'}`,
                        }}
                    >
                        <AdminHeader heading={'Privacy Policy'} />
                    </div>

                    <div
                        className="custom-inner-padding light_bg f f-c x_padding"
                        // style={{ paddingTop: '1.7rem', paddingLeft: '2em' }}
                    >
                        {' '}
                        {isAdmin && (
                            <div className=" f j-e">
                                <button
                                    className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                                    onClick={setpath}
                                >
                                    Update
                                </button>
                            </div>
                        )}
                        <ul>
                            <li className="termscontainer">
                                {privacyData.length > 0 ? (
                                    privacyData.map(
                                        (privacy: any, index: any) => (
                                            <>
                                                <p
                                                    key={index}
                                                    className="termsdetail"
                                                >
                                                    <button className="update-button">
                                                        <img
                                                            src={forward}
                                                        ></img>
                                                    </button>
                                                    {index + 1}: {privacy}
                                                </p>
                                            </>
                                        )
                                    )
                                ) : (
                                    <div>
                                        <NoDataFound />
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </>
            ) : (
                <Wrapper>
                    <div style={{ paddingBottom: '20rem' }}>
                        <div
                            className="settings-heading-container"
                            style={{
                                background: '#eae2d4',
                                paddingTop: '1.7rem',
                                paddingBottom: '1.7rem',
                                marginTop: `${!isAdmin ? '5%' : '0%'}`,
                            }}
                        >
                            <AdminHeader heading={'Privacy Policy'} />
                        </div>

                        <div
                            className="inner_padding light_bg f f-c x_padding"
                            style={{ paddingTop: '1.7rem', paddingLeft: '2em' }}
                        >
                            {' '}
                            {isAdmin && (
                                <div className=" f j-e">
                                    <button
                                        className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                                        onClick={setpath}
                                    >
                                        Update
                                    </button>
                                </div>
                            )}
                            <ul>
                                <li className="termscontainer">
                                    {privacyData ? (
                                        privacyData.map(
                                            (privacy: any, index: any) => (
                                                <>
                                                    <p
                                                        key={index}
                                                        className="termsdetail"
                                                    >
                                                        <button className="update-button">
                                                            <img
                                                                src={forward}
                                                            ></img>
                                                        </button>
                                                        {index + 1}: {privacy}
                                                    </p>
                                                </>
                                            )
                                        )
                                    ) : (
                                        <h1>No Data </h1>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            )}
        </>
    )
}

export default ShowPrivacyPolicy
