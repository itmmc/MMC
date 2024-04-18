import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import React, { useState, useEffect } from 'react'
import * as jwt from 'jsonwebtoken'
import './ChangePassword.css'
import axios from 'axios'
import baseUrl from '../../../../ApiFile'
import { toast } from 'react-toastify'
const ChangePassword = () => {
    const userEmail: any = localStorage.getItem('userEmail')

    const [isLoading, setIsLoading] = useState(false)
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        password: '',
        confirmPassword: '',
        email: userEmail,
    })
    const submitHandler = async (e: any) => {
        setIsLoading(true)
        e.preventDefault()

        await axios({
            method: 'post',
            url: baseUrl + '/auth/password/newPassword',
            data: passwordData,
        })
            .then((res: any) => {
                setIsLoading(false)
                toast.success(res.data.message, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            })
            .catch(({ response }) => {
                setIsLoading(false)
                toast.error(response.data?.message, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            })
    }

    const changeHandler = (event: any) => {
        const { name, value } = event.target
        setPasswordData((passwordData) => ({
            ...passwordData,
            [name]: value,
        }))
    }
    return (
        <div>
            <div className="form_sides f small_fc  f-c  light_bg     ">
                <div className="form_side pt-30   ">
                    <div className="section_head f pt-custom  ">
                        <p className="_eleY"> Change Password</p>
                    </div>

                    <form onSubmit={submitHandler}>
                        <div className="custom-form-set f  px-30 f-c  ">
                            <div className="  double-fields-container">
                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="password"
                                        className="outline-none w-100"
                                        placeholder="Old Password"
                                        name="oldPassword"
                                        required
                                        onChange={changeHandler}
                                        value={passwordData.oldPassword}
                                    />
                                </div>

                                <div className="custom-btn-container  empty-container w-100 f s-b _eleY"></div>
                            </div>

                            <div className="  double-fields-container">
                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="password"
                                        className="outline-none w-100"
                                        placeholder="New Password"
                                        name="password"
                                        required
                                        onChange={changeHandler}
                                        value={passwordData.password}
                                    />
                                </div>

                                <div className=" empty-container  custom-btn-container w-100 f s-b _eleY"></div>
                            </div>

                            <div className="  double-fields-container">
                                <div className="custom-btn-container w-100 f s-b _eleY">
                                    <input
                                        type="password"
                                        className="outline-none w-100"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        required
                                        onChange={changeHandler}
                                        value={passwordData.confirmPassword}
                                    />
                                </div>

                                <div className=" empty-container  custom-btn-container w-100 f s-b _eleY"></div>
                            </div>
                            <p>
                                {passwordData.password !==
                                passwordData.confirmPassword
                                    ? 'Password not match'
                                    : ''}
                            </p>
                            <div className="  f j-e">
                                <button
                                    className=" custom-btn   primary_bg  interactive_label f a-c j-c"
                                    // onClick={handleSave}
                                    type="submit"
                                    disabled={
                                        passwordData.password !==
                                            passwordData.confirmPassword ||
                                        isLoading
                                            ? true
                                            : false
                                    }
                                >
                                    {isLoading ? <LoadingSpinner /> : 'Save'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
