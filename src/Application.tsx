import React, { useEffect } from 'react'
import { HashRouter, Route, Switch, RouteChildrenProps } from 'react-router-dom'
import routes from './config/routes'
import Loader from '@components/Loader/loader'
import adminRoutes from '@config/adminRoutes'
import SideNav from '@components/AdminComponents/SideNav/SideNav'
import './assets/stylesheets/app.css'
import { useTranslation } from 'react-i18next'
import { Slide, ToastContainer } from 'react-toastify'

// const classNames = classNamesFunc<keyof typeof styles>()
type Props = {
    active: boolean
}

const Application: React.FunctionComponent<any> = () => {
    const { t, i18n }: any = useTranslation()
    // const isAdminRoute = window.location.pathname.includes('/admin')
    const isAdminRoute = localStorage.getItem('accessToken')

    const lang = localStorage.getItem('lang')

    useEffect(() => {
        const lan = localStorage.getItem('lang')
        if (!lan) {
            localStorage.setItem('lang', 'en')
        }
        const lan1 = localStorage.getItem('lang')
        i18n.changeLanguage(lan1 || 'en')
    }, [])
    useEffect(() => {
        if (isAdminRoute) {
            localStorage.setItem('lang', 'en')
            i18n.changeLanguage('en')
        }
    }, [])

    return (
        <div style={{ direction: `${lang === 'ar' ? 'rtl' : 'ltr'}` }}>
            <Loader />

            <ToastContainer transition={Slide} />
            <HashRouter>
                <Switch>
                    {!isAdminRoute ? (
                        <>
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        render={(
                                            props: RouteChildrenProps<any>
                                        ) => (
                                            <route.component
                                                name={route.name}
                                                {...props}
                                                {...route.props}
                                            />
                                        )}
                                    />
                                )
                            })}
                        </>
                    ) : (
                        <div id="smooth-wrapper" className="admin-home">
                            <div className="admin-sidebar">
                                {' '}
                                <SideNav />
                            </div>

                            <div
                                // id="smooth-content"
                                className="admin-side-content"
                            >
                                <div className="">
                                    {adminRoutes.map((route, index) => {
                                        return (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                render={(
                                                    props: RouteChildrenProps<any>
                                                ) => (
                                                    <route.component
                                                        name={route.name}
                                                        {...props}
                                                        {...route.props}
                                                    />
                                                )}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Application
