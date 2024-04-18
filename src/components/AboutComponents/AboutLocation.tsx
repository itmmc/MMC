import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutLocation = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    const lang = localStorage.getItem('lang')
    return (
        <>
            {lang === 'en' ? (
                <div className="form_sides f a-s light_brown_bg inner_padding_half x_padding">
                    <div className="form_side _eleWrap">
                        <div className="form_content">
                            <div className="section_head f f-c a-s">
                                <h3 className="_eleY">Where to find us!</h3>
                                <p className="_eleY">
                                    Visit our friendly team at one of our
                                    office.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="form_side">
                        <div className="locations_wrap f">
                            <div className="locations_block f f-c _eleWrap">
                                <strong className="_mask">
                                    Main Administrative Office
                                </strong>

                                <div className="locations_cols f">
                                    <div
                                        className="locations_col active f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1855.4742135859553!2d39.1348753!3d21.5488718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c506e44e1ff9%3A0x824b28ffea35caca!2sMMC%20HQ!5e0!3m2!1sen!2sae!4v1694718507309!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M43.75 3.125H25a3.128 3.128 0 0 0-3.125 3.125v15.625H6.25A3.128 3.128 0 0 0 3.125 25v21.875h43.75V6.25a3.128 3.128 0 0 0-3.125-3.125ZM14.062 43.75V32.812h6.25V43.75h-6.25Zm29.688 0H23.437v-12.5a1.563 1.563 0 0 0-1.562-1.563H12.5a1.563 1.563 0 0 0-1.563 1.563v12.5H6.25V25H25V6.25h18.75v37.5Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M28.125 12.5h3.125v3.125h-3.125V12.5Zm9.375 0h3.125v3.125H37.5V12.5Zm-9.375 9.375h3.125V25h-3.125v-3.125Zm9.375 0h3.125V25H37.5v-3.125Zm-9.375 9.375h3.125v3.125h-3.125V31.25Zm9.375 0h3.125v3.125H37.5V31.25Z"
                                            />
                                        </svg>

                                        <p>Jeddah</p>
                                    </div>
                                </div>
                            </div>

                            <div className="locations_block f f-c _eleWrap">
                                <strong className="_mask">Factories</strong>

                                <div className="locations_cols f">
                                    <div
                                        className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4798.506313440514!2d39.80683669999999!3d21.6833834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c1effcce14847d%3A0x24b3efa4218fd2fd!2z2KfZhNmH2YrYptipINin2YTYudin2YXYqSDZhNmE2KPZhdmGINin2YTYutiw2KfYptmKINi12YjYp9mF2Lkg2KfZhNi62YTYp9mE!5e1!3m2!1sen!2sae!4v1694547843783!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
                                            />
                                        </svg>

                                        <p>Al-Jumom</p>
                                    </div>

                                    <div
                                        className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.5180498857226!2d40.146944399999995!3d29.9932778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzM1LjgiTiA0MMKwMDgnNDkuMCJF!5e0!3m2!1sen!2sae!4v1696160382668!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
                                            />
                                        </svg>

                                        <p>Al-Jouf</p>
                                    </div>

                                    <div
                                        className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15157.785198309288!2d42.8640731!3d18.2353512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb609cfddf3f45%3A0x4de00cb601940119!2z2LTYsdmD2Kkg2KfZhNmF2LfYp9it2YYg2KfZhNir2KfZhNir2Kk!5e0!3m2!1sen!2s!4v1701181583503!5m2!1sen!2s"
                                        // data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8944.617087478115!2d40.14933!3d29.99478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1572bb8975c19281%3A0x8852c440e13a3907!2z2LTYsdmD2Kkg2KfZhNmF2LfYp9it2YYg2KfZhNir2KfZhNir2Kkg2YHYsdi5INin2YTYrNmI2YE!5e1!3m2!1sen!2sae!4v1694718765799!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
                                            />
                                        </svg>

                                        <p>Khamees Moshiet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="form_sides f a-s light_brown_bg inner_padding_half x_padding">
                    <div className="form_side _eleWrap">
                        <div className="form_content">
                            <div className="section_head f f-c a-s">
                                <h3 className="_eleY">مواقعنا</h3>
                                <p className="_eleY">
                                    قم بزيارة فريقنا الودود في أحد مكاتبنا.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="form_side">
                        <div className="locations_wrap f">
                            <div className="locations_block f f-c _eleWrap">
                                <strong className="_mask">
                                    مكتبنا الإداري الرئيسي
                                </strong>

                                <div className="locations_cols f">
                                    <div
                                        className="locations_col active f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1855.4742135859553!2d39.1348753!3d21.5488718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c506e44e1ff9%3A0x824b28ffea35caca!2sMMC%20HQ!5e0!3m2!1sen!2sae!4v1694687940517!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M43.75 3.125H25a3.128 3.128 0 0 0-3.125 3.125v15.625H6.25A3.128 3.128 0 0 0 3.125 25v21.875h43.75V6.25a3.128 3.128 0 0 0-3.125-3.125ZM14.062 43.75V32.812h6.25V43.75h-6.25Zm29.688 0H23.437v-12.5a1.563 1.563 0 0 0-1.562-1.563H12.5a1.563 1.563 0 0 0-1.563 1.563v12.5H6.25V25H25V6.25h18.75v37.5Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M28.125 12.5h3.125v3.125h-3.125V12.5Zm9.375 0h3.125v3.125H37.5V12.5Zm-9.375 9.375h3.125V25h-3.125v-3.125Zm9.375 0h3.125V25H37.5v-3.125Zm-9.375 9.375h3.125v3.125h-3.125V31.25Zm9.375 0h3.125v3.125H37.5V31.25Z"
                                            />
                                        </svg>

                                        <p>جدة</p>
                                    </div>
                                </div>
                            </div>

                            <div className="locations_block f f-c _eleWrap">
                                <strong className="_mask">مصانعنا</strong>

                                <div className="locations_cols f">
                                    <div
                                        className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4798.506313440514!2d39.80683669999999!3d21.6833834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c1effcce14847d%3A0x24b3efa4218fd2fd!2z2KfZhNmH2YrYptipINin2YTYudin2YXYqSDZhNmE2KPZhdmGINin2YTYutiw2KfYptmKINi12YjYp9mF2Lkg2KfZhNi62YTYp9mE!5e1!3m2!1sen!2sae!4v1694547843783!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
                                            />
                                        </svg>

                                        <p>الجموم</p>
                                    </div>

                                    <div
                                        className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15157.785198309288!2d42.8640731!3d18.2353512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb609cfddf3f45%3A0x4de00cb601940119!2z2LTYsdmD2Kkg2KfZhNmF2LfYp9it2YYg2KfZhNir2KfZhNir2Kk!5e0!3m2!1sen!2s!4v1701181583503!5m2!1sen!2s"
                                        // data-map="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.5180498857226!2d40.146944399999995!3d29.9932778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzM1LjgiTiA0MMKwMDgnNDkuMCJF!5e0!3m2!1sen!2sae!4v1696160382668!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
                                            />
                                        </svg>

                                        <p>خميس مشيط</p>
                                    </div>

                                    <div
                                        className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
                                        data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8944.617087478115!2d40.14933!3d29.99478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1572bb8975c19281%3A0x8852c440e13a3907!2z2LTYsdmD2Kkg2KfZhNmF2LfYp9it2YYg2KfZhNir2KfZhNir2Kkg2YHYsdi5INin2YTYrNmI2YE!5e1!3m2!1sen!2sae!4v1694718765799!5m2!1sen!2sae"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
                                            />
                                        </svg>

                                        <p>الجوف</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

        // <div className="form_sides f a-s light_brown_bg inner_padding_half x_padding">
        //     <div className="form_side _eleWrap">
        //         <div className="form_content">
        //             <div className="section_head f f-c a-s">
        //                 <h3 className="_eleY">{t('Wfindus')}</h3>
        //                 <p className="_eleY">
        //                 {t('ourfriendlyteam')}
        //                 </p>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="form_side">
        //         <div className="locations_wrap f">
        //             <div className="locations_block f f-c _eleWrap">
        //                 <strong className="_mask">
        //                 {t('Mainoffice')}
        //                 </strong>

        //                 <div className="locations_cols f">
        //                     <div
        //                         className="locations_col active f f-c a-c j-c rounded_corners force pointer _eleX"
        //                         data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1855.4742135859553!2d39.1348753!3d21.5488718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c506e44e1ff9%3A0x824b28ffea35caca!2sMMC%20HQ!5e0!3m2!1sen!2sae!4v1694718507309!5m2!1sen!2sae"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 50 50"
        //                         >
        //                             <path
        //                                 fill="currentColor"
        //                                 d="M43.75 3.125H25a3.128 3.128 0 0 0-3.125 3.125v15.625H6.25A3.128 3.128 0 0 0 3.125 25v21.875h43.75V6.25a3.128 3.128 0 0 0-3.125-3.125ZM14.062 43.75V32.812h6.25V43.75h-6.25Zm29.688 0H23.437v-12.5a1.563 1.563 0 0 0-1.562-1.563H12.5a1.563 1.563 0 0 0-1.563 1.563v12.5H6.25V25H25V6.25h18.75v37.5Z"
        //                             />
        //                             <path
        //                                 fill="currentColor"
        //                                 d="M28.125 12.5h3.125v3.125h-3.125V12.5Zm9.375 0h3.125v3.125H37.5V12.5Zm-9.375 9.375h3.125V25h-3.125v-3.125Zm9.375 0h3.125V25H37.5v-3.125Zm-9.375 9.375h3.125v3.125h-3.125V31.25Zm9.375 0h3.125v3.125H37.5V31.25Z"
        //                             />
        //                         </svg>

        //                         <p> {t('jeddhalabel')}</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="locations_block f f-c _eleWrap">
        //                 <strong className="_mask">{t('Factrlabel')}</strong>

        //                 <div className="locations_cols f">
        //                     <div
        //                         className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
        //                         data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4798.506313440514!2d39.80683669999999!3d21.6833834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c1effcce14847d%3A0x24b3efa4218fd2fd!2z2KfZhNmH2YrYptipINin2YTYudin2YXYqSDZhNmE2KPZhdmGINin2YTYutiw2KfYptmKINi12YjYp9mF2Lkg2KfZhNi62YTYp9mE!5e1!3m2!1sen!2sae!4v1694547843783!5m2!1sen!2sae"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 50 50"
        //                         >
        //                             <path
        //                                 fill="currentColor"
        //                                 d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
        //                             />
        //                         </svg>

        //                         <p>{t('Aljumom')}</p>
        //                     </div>

        //                     <div
        //                         className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
        //                         data-map="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.5180498857226!2d40.146944399999995!3d29.9932778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzM1LjgiTiA0MMKwMDgnNDkuMCJF!5e0!3m2!1sen!2sae!4v1696160382668!5m2!1sen!2sae"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 50 50"
        //                         >
        //                             <path
        //                                 fill="currentColor"
        //                                 d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
        //                             />
        //                         </svg>

        //                         <p>{t('Aljouf')}</p>
        //                     </div>

        //                     <div
        //                         className="locations_col f f-c a-c j-c rounded_corners force pointer _eleX"
        //                         data-map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8944.617087478115!2d40.14933!3d29.99478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1572bb8975c19281%3A0x8852c440e13a3907!2z2LTYsdmD2Kkg2KfZhNmF2LfYp9it2YYg2KfZhNir2KfZhNir2Kkg2YHYsdi5INin2YTYrNmI2YE!5e1!3m2!1sen!2sae!4v1694718765799!5m2!1sen!2sae"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 50 50"
        //                         >
        //                             <path
        //                                 fill="currentColor"
        //                                 d="M22.266 34.375a1.171 1.171 0 0 1-1.172 1.172h-5.469a1.172 1.172 0 1 1 0-2.344h5.469a1.172 1.172 0 0 1 1.172 1.172Zm12.109-1.172h-5.469a1.172 1.172 0 0 0 0 2.344h5.469a1.172 1.172 0 1 0 0-2.344Zm13.672 8.984a1.172 1.172 0 0 1-1.172 1.172H3.125a1.172 1.172 0 0 1 0-2.343h3.516V17.188a1.172 1.172 0 0 1 1.875-.938l10.625 7.969v-7.032a1.172 1.172 0 0 1 1.875-.937l8.086 6.07 2.343-16.457a2.748 2.748 0 0 1 2.707-2.343h3.54a2.748 2.748 0 0 1 2.706 2.343l2.93 20.534s.012.115.012.166v14.453h3.515a1.17 1.17 0 0 1 1.192 1.172ZM31.25 23.924l1.953 1.467h7.633l-2.75-19.196a.39.39 0 0 0-.39-.336h-3.528a.39.39 0 0 0-.39.336L31.25 23.924ZM8.984 41.016h32.032V27.734h-8.203c-.254 0-.5-.082-.704-.234l-2.812-2.11-7.813-5.859v7.032a1.172 1.172 0 0 1-1.875.937L8.984 19.531v21.485Z"
        //                             />
        //                         </svg>

        //                         <p>{t('KhameesMoshiet')}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default AboutLocation
