// import { selectLang } from '@redux-slices/counter.slice'
// import { useAppSelector } from '@store/hooks'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { createNewsLetter } from './action'
import { Link } from 'react-router-dom'

const LastSection = () => {
    const { t, i18n }: any = useTranslation()
    const [email, setEmail] = useState('')
    var emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const lang = localStorage.getItem('lang')

    const hanldeCreateNewsPressed = (e: any) => {
        e.preventDefault()
        if (!email.match(emailRegex)) {
            toast.error(`Please enter the valid email address`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            })
            return
        }

        createNewsLetter(email).then(() => {
            setEmail('')
        })
    }

    return (
        <>
            {lang === 'en' ? (
                <div className="form_sides f a-s light_brown_bg inner_padding_half x_padding">
                    <div className="form_side ">
                        <div className="form_content">
                            <div className="section_head f f-c a-s">
                                <h3 className="_eleY">
                                    {t('stayinformedlabel')}
                                    <br />
                                    {t('joinournewsletterlabel')}
                                </h3>
                                <p className="_eleY">
                                    {t('ConnectedwithmmcDes')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="form_side ">
                        <form action="https://getform.io/f/06d63803-64ae-4e90-b638-5467506de21b">
                            <div className="inline_form f f-c _eleY">
                                <div className="input_set f s-b _eleY f a-c">
                                    <input
                                        type="email"
                                        name="Email Address"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        spellCheck="false"
                                        placeholder={t('Enteryouremaillabel')}
                                    />
                                    <div
                                        className="rounded_button f a-c light_brown_bg submit j-c pointer"
                                        onClick={hanldeCreateNewsPressed}
                                    >
                                        <svg
                                            width="17"
                                            height="14"
                                            viewBox="0 0 17 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.1562 0.461181L16.3437 6.36743C16.5195 6.54321 16.5898 6.75415 16.5898 7.00024C16.5898 7.21118 16.5195 7.42212 16.3437 7.5979L10.1562 13.5042C9.80469 13.8206 9.27734 13.8206 8.96094 13.469C8.64453 13.1526 8.64453 12.5901 8.99609 12.2737L13.6719 7.84399L1.71875 7.84399C1.22656 7.84399 0.875 7.45727 0.875 7.00024C0.875 6.57837 1.22656 6.15649 1.71875 6.15649L13.6719 6.15649L8.99609 1.69165C8.64453 1.37524 8.64453 0.812744 8.96094 0.496337C9.27734 0.144775 9.83984 0.144775 10.1562 0.461181Z"
                                                fill="#FAF3E6"
                                            />
                                        </svg>
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
                                <p>
                                    {t('privacymatterlabel')}
                                    {/* <a
                                        href="privacy.html"
                                        target="_blank"
                                        className="_underline"
                                    >
                                        {t('privacypolicylabel')}
                                    </a> */}
                                    <Link
                                        to="/privacy"
                                        className="_underline"
                                        // href="privacy.html"
                                        // target="_blank"
                                    >
                                        {t('privacypolicylabel')}
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="to_top scrollTo pointer interactive_label f a-c j-c">
                        <svg
                            className="_shape"
                            width="31"
                            height="37"
                            viewBox="0 0 31 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.388 7.02009C16.1458 6.77232 15.8229 6.60714 15.5 6.60714C15.0964 6.60714 14.7734 6.77232 14.5312 7.02009L2.90625 18.9129C2.42188 19.4085 2.42188 20.317 2.90625 20.8125C3.39062 21.308 4.27865 21.308 4.76302 20.8125L14.2083 11.1496V35.6786C14.2083 36.4219 14.7734 37 15.5 37C16.1458 37 16.7917 36.4219 16.7917 35.6786V11.1496L26.1562 20.8125C26.6406 21.308 27.5286 21.308 28.013 20.8125C28.4974 20.317 28.4974 19.4085 28.013 18.9129L16.388 7.02009ZM29.7083 0H1.29167C0.565104 0 0 0.660714 0 1.32143C0 2.06473 0.565104 2.64286 1.29167 2.64286H29.7083C30.3542 2.64286 31 2.06473 31 1.32143C31 0.660714 30.3542 0 29.7083 0Z"
                                fill="#FAF3E6"
                            />
                        </svg>
                    </div>
                </div>
            ) : (
                <div className="form_sides f a-s light_brown_bg inner_padding_half x_padding">
                    <div className="form_side ">
                        <div className="form_content">
                            <div className="section_head f f-c a-s">
                                <h3 className="_eleY">
                                    ابقَ على اطلاع <br />
                                    وسجّل لتصلك جميع أخبارنا
                                </h3>
                                <p className="_eleY">
                                    لا تفوّت أية تحديثات وأخبار!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="form_side ">
                        <form action="https://getform.io/f/06d63803-64ae-4e90-b638-5467506de21b">
                            <div className="inline_form f f-c _eleY">
                                <div className="input_set f s-b _eleY f a-c">
                                    <input
                                        type="email"
                                        name="Email Address"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        placeholder="عنوان البريد الإلكتروني"
                                        spellCheck="false"
                                    />

                                    <div
                                        className="rounded_button f a-c light_brown_bg submit j-c pointer"
                                        onClick={hanldeCreateNewsPressed}
                                    >
                                        <svg
                                            width="17"
                                            height="14"
                                            viewBox="0 0 17 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.1562 0.461181L16.3437 6.36743C16.5195 6.54321 16.5898 6.75415 16.5898 7.00024C16.5898 7.21118 16.5195 7.42212 16.3437 7.5979L10.1562 13.5042C9.80469 13.8206 9.27734 13.8206 8.96094 13.469C8.64453 13.1526 8.64453 12.5901 8.99609 12.2737L13.6719 7.84399L1.71875 7.84399C1.22656 7.84399 0.875 7.45727 0.875 7.00024C0.875 6.57837 1.22656 6.15649 1.71875 6.15649L13.6719 6.15649L8.99609 1.69165C8.64453 1.37524 8.64453 0.812744 8.96094 0.496337C9.27734 0.144775 9.83984 0.144775 10.1562 0.461181Z"
                                                fill="#FAF3E6"
                                            />
                                        </svg>
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
                                <p>
                                    خصوصيتك تهمنا! اعرف المزيد عن{' '}
                                    <a
                                        href="privacy_ar.html"
                                        target="_blank"
                                        className="_underline"
                                    >
                                        سياسة الخصوصية
                                    </a>{' '}
                                    الخاصة بنا.
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="to_top scrollTo pointer interactive_label f a-c j-c">
                        <svg
                            className="_shape"
                            width="31"
                            height="37"
                            viewBox="0 0 31 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.388 7.02009C16.1458 6.77232 15.8229 6.60714 15.5 6.60714C15.0964 6.60714 14.7734 6.77232 14.5312 7.02009L2.90625 18.9129C2.42188 19.4085 2.42188 20.317 2.90625 20.8125C3.39062 21.308 4.27865 21.308 4.76302 20.8125L14.2083 11.1496V35.6786C14.2083 36.4219 14.7734 37 15.5 37C16.1458 37 16.7917 36.4219 16.7917 35.6786V11.1496L26.1562 20.8125C26.6406 21.308 27.5286 21.308 28.013 20.8125C28.4974 20.317 28.4974 19.4085 28.013 18.9129L16.388 7.02009ZM29.7083 0H1.29167C0.565104 0 0 0.660714 0 1.32143C0 2.06473 0.565104 2.64286 1.29167 2.64286H29.7083C30.3542 2.64286 31 2.06473 31 1.32143C31 0.660714 30.3542 0 29.7083 0Z"
                                fill="#FAF3E6"
                            />
                        </svg>
                    </div>
                </div>
            )}
        </>
    )
}

export default LastSection
