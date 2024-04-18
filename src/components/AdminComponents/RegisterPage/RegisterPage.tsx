import React from 'react'

import { useTranslation } from 'react-i18next'
import './RegisterPage.css'

const RegisterPage = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="form_sides f small_fc x_padding inner_padding light_bg  register-form-container">
            <div className="form_side _eleWrap">
                <div className="section_head f f-c  register-head">
                    <h2 className="_eleY">
                        Welcome To Register Page <br />
                    </h2>

                    <p className="_eleY">Register Here</p>
                </div>

                <div className="form_content f f-c a-s  "></div>
                <form
                    action="https://getform.io/f/afdba5d8-e536-4844-91fd-4c137fd31919"
                    method="POST"
                >
                    <div className="form_set f f-c">
                        <div className="input_set f s-b _eleY">
                            <input
                                type="text"
                                name="First Name"
                                required
                                spellCheck="false"
                                placeholder={t('Fnamelabel')}
                            />
                            <input
                                type="text"
                                name="Last Name"
                                required
                                spellCheck="false"
                                placeholder={t('Lnamelabel')}
                            />
                        </div>

                        <div className="input_set f s-b _eleY">
                            <input
                                type="email"
                                name="Email Address"
                                required
                                spellCheck="false"
                                placeholder={t('Emailaddresslabel')}
                            />
                        </div>

                        <div className="input_set f s-b _eleY">
                            <input
                                type="tel"
                                name="Phone Number"
                                required
                                spellCheck="false"
                                placeholder={t('PNlabel')}
                            />
                        </div>

                        <div className="input_set f s-b _eleY">
                            <select name="Reason" required>
                                <option value="">Designation</option>
                                <option value="Product inquiries">Owner</option>
                                <option value=" Pricing and Quotations">
                                    {' '}
                                    Admin Manager
                                </option>
                            </select>
                            <svg
                                width="16"
                                height="9"
                                viewBox="0 0 16 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.0625 1.97266L8.34766 8.40625C8.17187 8.54687 7.96094 8.65234 7.75 8.65234C7.53906 8.65234 7.32812 8.54687 7.1875 8.40625L0.472656 1.97266C0.121094 1.65625 0.121094 1.09375 0.4375 0.777343C0.753906 0.425781 1.28125 0.425781 1.63281 0.742187L7.78516 6.64844L13.9023 0.742187C14.2187 0.425781 14.7812 0.425781 15.0977 0.777344C15.4141 1.09375 15.4141 1.65625 15.0625 1.97266Z"
                                    fill="#121437"
                                />
                            </svg>
                        </div>

                        <div className="input_set f s-b _eleY">
                            <input type="submit" className="submit_form" />
                            <div className="site_button primary_bg f a-c j-c pointer submit interactive_label">
                                <strong className="uppercase _txt words">
                                    Register
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
    )
}

export default RegisterPage
