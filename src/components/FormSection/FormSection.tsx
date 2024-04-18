import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import baseUrl from '../../ApiFile'
import { toast } from 'react-toastify'

const FormSection = () => {
    interface CompanyInfo {
        _id: string
        createdAt: string
        updatedAt: string
        __v: number
        address: string
        address_ar: string
        direction: string
        mail: string
        phoneNo: string
    }
    const { t, i18n }: any = useTranslation()
    const [companydatainfo, setcompanydatainfo] = useState<CompanyInfo>()
    const [formState, setFormState] = useState({
        firstName: '',
        LastName: '',
        mail: '',
        phoneNo: '',
        reason: '',
        message: '',
    })

    const currentLanguage = i18n.language
    const lang = localStorage.getItem('lang')

    const getcompanyinfo = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/gernalSetting/getCompanyInfo`
            )

            setcompanydatainfo(response.data.data.companyInfo[0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getcompanyinfo()
    }, [])

    const submitHandler = async (e: any) => {
        e.preventDefault()
        await axios({
            method: 'post',
            url: `${baseUrl}/contactus/create`,
            data: formState,
        })
            .then(() => {
                toast.success(`Submit  Successfully! `, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            })
            .catch((error) => {
                console.error(error)
                toast.error(`Something went wrong!`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            })
    }

    const changeHandler = (e: any) => {
        const { name, value } = e.target
        setFormState((formState: any) => ({
            ...formState,
            [name]: value,
        }))
    }

    return (
        <div className="form_sides f small_fc x_padding inner_padding light_bg">
            <div className="form_side _eleWrap">
                <div className="form_content f f-c a-s">
                    <div className="section_head f f-c a-s">
                        <h2 className="_eleY">
                            {t('contactmodernlabel')} <br />
                            {t('millscompanylabel')}
                        </h2>

                        <p className="_eleY">{t('reachoutFDes')}</p>
                    </div>

                    <div className="contact_info f f-c a-s">
                        <div className="contact_col f a-s _eleY">
                            <div className="contact_icon f a-s">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="32"
                                    height="61"
                                    viewBox="0 0 32 61"
                                >
                                    <path
                                        stroke="#D99A0E"
                                        strokeMiterlimit="10"
                                        d="M11 25a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM11 25v14M14 33.27c4.06.76 7 3.04 7 5.73 0 3.31-4.48 6-10 6S1 42.31 1 39c0-2.69 2.94-4.96 7-5.73"
                                    />
                                </svg>
                            </div>

                            <div className="contact_txt f f-c a-s">
                                <p>
                                    {lang === 'en'
                                        ? companydatainfo?.address
                                        : companydatainfo?.address_ar}
                                </p>
                                <a
                                    // href="https://goo.gl/maps/fmNyuEqYwVWic3Wp6"
                                    href={companydatainfo?.direction}
                                    target="_blank"
                                    className="interactive_label inline_link secondary_color f a-c"
                                    aria-label="Get Directions"
                                >
                                    <strong className="_txt words">
                                        {t('getdirectionlabel')}
                                    </strong>
                                    <svg
                                        className="_shape"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.5447 12.3026C12.3854 12.3026 12.2393 12.2362 12.1331 12.1299C12.0136 12.0104 11.9472 11.8643 11.9472 11.705L11.9472 8.91621L7.88354 12.9798C7.64451 13.2189 7.25939 13.2056 7.03364 12.9798C6.82116 12.7674 6.7946 12.369 7.03364 12.1299L11.0973 8.06631L8.29522 8.05303C7.96322 8.06631 7.68435 7.78743 7.69763 7.45543C7.68435 7.12344 7.96322 6.84456 8.29522 6.85784H12.5447C12.8767 6.84456 13.1556 7.12344 13.1423 7.45543L13.1423 11.705C13.1556 12.037 12.8767 12.3158 12.5447 12.3026Z"
                                            fill="#D99A0E"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="19"
                                            height="19"
                                            rx="9.5"
                                            stroke="#D99A0E"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="contact_col f a-c _eleY">
                            <div className="contact_icon f a-s">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="32"
                                    height="30"
                                    viewBox="0 0 32 30"
                                >
                                    <path
                                        stroke="#D99A0E"
                                        strokeMiterlimit="10"
                                        d="M22 5.149V1.5H1v27h21v-8.027"
                                    />
                                    <path
                                        stroke="#D99A0E"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        d="M13 24.5s5.104-10.875 11-15"
                                    />
                                    <path
                                        stroke="#D99A0E"
                                        strokeLinejoin="round"
                                        d="M14.584 20.37s-1.314-3.461 0-6.046c0 0 1.439.348 1.468 0 .03-.348 0-3.023 0-3.023S20.64 4.75 30 4.5c0 0-3.487 4.973-5.139 10.58l-2.202.755.734 1.512s-4.492 3.907-8.809 3.023Z"
                                    />
                                </svg>
                            </div>

                            <div className="contact_txt f f-c">
                                <a
                                    // href="mailto:info@modernmills.com.sa"

                                    href={`mailto:${companydatainfo?.mail} `}
                                    target="_blank"
                                    className="_underline f a-c"
                                    aria-label="Email us"
                                >
                                    {/* <span>{t('infomaillabel')}</span> */}
                                    <span>{companydatainfo?.mail}</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact_col f a-c _eleY">
                            <div className="contact_icon f a-s">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="32"
                                    height="28"
                                    viewBox="0 0 32 28"
                                >
                                    <path
                                        stroke="#D99A0E"
                                        strokeLinejoin="round"
                                        d="m6.007 2.355 4.461 4.29a1.183 1.183 0 0 1 0 1.717L7.995 10.74c-.398.382-.486.971-.215 1.444.903 1.547 3.262 4.963 7.622 7.324a1.316 1.316 0 0 0 1.521-.194l2.461-2.367a1.3 1.3 0 0 1 1.786 0l4.46 4.29a1.183 1.183 0 0 1 0 1.717l-2.056 1.978a3.894 3.894 0 0 1-3.76.916c-4.72-1.365-15.498-5.746-18.697-17.966a3.571 3.571 0 0 1 .99-3.488l2.12-2.039a1.3 1.3 0 0 1 1.786 0h-.006ZM16 3h5M21 3v4M22 7h-5M17 7v3M16 10h6M23 3v5M23 7h5M25 4v6"
                                    />
                                </svg>
                            </div>

                            <div className="contact_txt f f-c">
                                <a
                                    href="callto:+966122728989"
                                    target="_blank"
                                    className="_underline f a-c"
                                    aria-label="Call us"
                                >
                                    <span className="form-number">
                                        {companydatainfo?.phoneNo}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form_side _eleWrap z-input">
                <form onSubmit={submitHandler}>
                    <div className="form_set f f-c">
                        <div className="input_set f s-b _eleY">
                            <input
                                type="text"
                                name="firstName"
                                required
                                spellCheck="false"
                                placeholder={t('Fnamelabel')}
                                className="cl-input-hodler"
                                onChange={changeHandler}
                            />
                            <input
                                type="text"
                                name="LastName"
                                required
                                spellCheck="false"
                                className="cl-input-hodler"
                                placeholder={t('Lnamelabel')}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="input_set f s-b _eleY">
                            <input
                                type="email"
                                name="mail"
                                required
                                spellCheck="false"
                                className="cl-input-hodler"
                                placeholder={t('Emailaddresslabel')}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="input_set f s-b _eleY">
                            <input
                                type="tel"
                                name="phoneNo"
                                required
                                spellCheck="false"
                                className="cl-input-hodler"
                                placeholder={t('PNlabel')}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="input_set f s-b _eleY">
                            <select
                                name="reason"
                                required
                                onChange={changeHandler}
                            >
                                <option value="">
                                    {t('gettingintouchlabel')}
                                </option>
                                <option value="Product inquiries">
                                    {t('productinquirieslabel')}
                                </option>
                                <option value=" Pricing and Quotations">
                                    {' '}
                                    {t('pricingandqutationlbel')}
                                </option>
                                <option value="Quality Assurance and Certifications">
                                    {t('qualityofassurancecertificationlabel')}
                                </option>
                                <option value="Collaboration Opportunities">
                                    {t('collaborationopportunitieslabel')}
                                </option>
                                <option value="General Inquiries">
                                    {t('generalinquirieslabel')}
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
                            <textarea
                                name="message"
                                maxLength={2000}
                                required
                                className="cl-input-hodler"
                                placeholder={t('Leaveusmessage')}
                                // onInput='this.style.height = "";this.style.height = this.scrollHeight + 2 + "px"'
                                onChange={changeHandler}
                            ></textarea>
                        </div>

                        <div className="input_set f s-b _eleY">
                            <input type="submit" className="submit_form" />
                            <div className="site_button primary_bg f a-c j-c pointer submit interactive_label">
                                <strong className="uppercase _txt words">
                                    {t('sendlabel')}
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

export default FormSection
