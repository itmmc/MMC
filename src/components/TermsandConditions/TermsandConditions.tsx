import AdminHeader from '@components/AdminComponents/AdminHeader/AdminHeader'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import baseUrl from '../../ApiFile'
import Forward from '../../../images/next.png'
import { useHistory } from 'react-router-dom'
import Header from '@components/Navbar/header'

import { onWindowLoad, onWindowResize, onFontsLoad } from '../../script'
import Wrapper from '@components/Wrapper'
import NoDataFound from '@components/NoDataFound/NoDataFound'

const TermsandConditions = () => {
    const history = useHistory()
    const [termsdata, settermsdata] = useState<string[]>([])
    const handleget = async () => {
        try {
            const response: any = await axios.get<string[]>(
                `${baseUrl}/terms_privacy/get`
                // `${baseUrl}/terms/get`
            )
            settermsdata(response.data.data.terms[0].terms)
        } catch (error) {
            console.error(error)
        }
    }
    const isAdmin = localStorage.getItem('accessToken')

    useEffect(() => {
        handleget()
        localStorage.removeItem('updateData')
    }, [])

    if (!isAdmin) {
        useEffect(() => {
            onWindowLoad()
            onFontsLoad()
            onWindowResize()
        }, [])
    }

    const setpath = () => {
        history.push('/createtermsandconditions')
        localStorage.setItem('updateData', JSON.stringify(termsdata))
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
                        <AdminHeader heading={'Terms and Conditions'} />
                    </div>

                    <div className="custom-inner-padding light_bg f f-c x_padding">
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
                                {termsdata.length > 0 ? (
                                    termsdata.map((term: any, index: any) => (
                                        <p key={index} className="termsdetail">
                                            <button className="update-button">
                                                <img
                                                    src={Forward}
                                                    alt="Forward"
                                                />
                                            </button>
                                            {index + 1}: {term}
                                        </p>
                                    ))
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
                            <AdminHeader heading={'Terms and Conditions'} />
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
                                    {termsdata.length > 0
                                        ? termsdata.map(
                                              (term: any, index: any) => (
                                                  <p
                                                      key={index}
                                                      className="termsdetail"
                                                  >
                                                      <button className="update-button">
                                                          <img
                                                              src={Forward}
                                                              alt="Forward"
                                                          />
                                                      </button>
                                                      {index + 1}: {term}
                                                  </p>
                                              )
                                          )
                                        : ''}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            )}
        </>
    )
}

export default TermsandConditions
