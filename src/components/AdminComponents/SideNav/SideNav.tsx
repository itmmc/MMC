import React, { useEffect, useState } from 'react'
import './SideNav.css'
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Toast from '@components/ToastComponent/Toast'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import { toast } from 'react-toastify'

const SideNav = () => {
    const { t, i18n }: any = useTranslation()
    const location: any = useLocation()
    const history = useHistory()
    const currentLanguage = i18n.language
    const { path } = useRouteMatch()
    const [successMessage, setSuccessMessage] = useState<any>('')
    const [status, setStatus] = useState('')
    const closeToast = () => {
        setSuccessMessage('')
        setStatus('')
    }
    useEffect(() => {
        setTimeout(() => {
            if (location?.state?.message) {
                debugger
                setSuccessMessage(location?.state?.message)
                setStatus(location?.state?.status)
                // navigate(location.pathname, { replace: true })
            }
        }, 2000)
    }, [location.state])

    const getLinkClassName = (path: string) => {
        const isActive = location.pathname === path
        return `interactive_label ${isActive ? 'secondary_color' : ''}`
    }

    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
    }
    const logout = () => {
        localStorage.removeItem('accessToken')

        toast.success('Logout successfully', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'light',
        })

        window.location.href = '/#/'
        window.location.reload()

        // localStorage.removeItem('productData')
    }

    return (
        <div className="light_brown_bg   side-bar-container  f f-c s-b">
            <div
                className="  f f-c s-b  transit-all  header-inner-container"
                style={{
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',

                    // height:'100%',
                }}
            >
                <div className="burger_menu f f-c ">
                    <Link
                        to="/"
                        className="main_logo transit-all"
                        aria-label="Homepage"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 98 28"
                        >
                            <path
                                fill="#362720"
                                d="M2.811 4.756a.947.947 0 0 0 .711-.303.988.988 0 0 0 .288-.711.957.957 0 0 0-.288-.706.967.967 0 0 0-.711-.283.993.993 0 0 0-.93.605.962.962 0 0 0-.074.384.994.994 0 0 0 .293.71.973.973 0 0 0 .711.304ZM5.29 4.756a1.02 1.02 0 0 0 .943-1.398.994.994 0 0 0-.943-.604.973.973 0 0 0-.989.988 1.01 1.01 0 0 0 .288.71.952.952 0 0 0 .7.304ZM11.444 3.742a.99.99 0 0 0 .288.71.94.94 0 0 0 .7.304.972.972 0 0 0 .722-.303.993.993 0 0 0 .293-.711.962.962 0 0 0-.293-.706.994.994 0 0 0-.721-.283.972.972 0 0 0-.989.989ZM11.193 2.722a.941.941 0 0 0 .712-.298.987.987 0 0 0 .287-.717.957.957 0 0 0-.287-.7.967.967 0 0 0-.712-.283.993.993 0 0 0-.93.603.961.961 0 0 0-.074.38.994.994 0 0 0 .293.717.968.968 0 0 0 .711.298ZM9.949 4.756a.957.957 0 0 0 .716-.303 1.01 1.01 0 0 0 .288-.712 1.01 1.01 0 0 0-1.71-.705.962.962 0 0 0-.293.705.993.993 0 0 0 .293.712.962.962 0 0 0 .706.303ZM17.651 11.496v-5.94a2.343 2.343 0 0 0-.491-.147 2.642 2.642 0 0 0-.523-.057c-.732 0-1.098.319-1.098.952v3.32h-2.306a.894.894 0 0 1-.764-.272 1.866 1.866 0 0 1-.198-1.02V5.557a2.343 2.343 0 0 0-.492-.147 2.736 2.736 0 0 0-.523-.057c-.727 0-1.093.319-1.093.952v2.029c.033.35-.04.704-.209 1.014a.9.9 0 0 1-.763.277H7.62a.826.826 0 0 1-.7-.256 1.689 1.689 0 0 1-.193-.957v-3.06H4.516a5.093 5.093 0 0 0-3.211.88A2.86 2.86 0 0 0 .19 8.61a3.06 3.06 0 0 0 .413 1.61c.275.45.673.813 1.145 1.046a3.599 3.599 0 0 0 1.658.366 3.08 3.08 0 0 0 2.233-.852 1.794 1.794 0 0 0 1.616.721h2.27a1.846 1.846 0 0 0 1.704-.747 1.757 1.757 0 0 0 1.621.742h4.8ZM4.578 8.36a1.218 1.218 0 0 1-.308.889 1.103 1.103 0 0 1-.826.313 1.046 1.046 0 0 1-.795-.292 1.114 1.114 0 0 1-.272-.79 1.046 1.046 0 0 1 .444-.926c.39-.233.84-.342 1.292-.313h.465v1.119ZM15.079 12.16a.998.998 0 0 0-.93.608.95.95 0 0 0-.074.381.994.994 0 0 0 .293.717.968.968 0 0 0 .71.298.941.941 0 0 0 .712-.298.989.989 0 0 0 .288-.717.946.946 0 0 0-.288-.7.972.972 0 0 0-.711-.288ZM17.558 12.16a.984.984 0 0 0-.989.99 1.015 1.015 0 0 0 .607.938 1.01 1.01 0 0 0 1.396-.939.93.93 0 0 0-.293-.7.998.998 0 0 0-.721-.288ZM38.035.991a1.255 1.255 0 0 0-.826.24.858.858 0 0 0-.303.707v7.687h-2.552c-.152-.257-.34-.555-.565-.884-.225-.33-.465-.664-.706-.989a9.833 9.833 0 0 0-.69-.836 5.753 5.753 0 0 0-1.522-1.208 3.362 3.362 0 0 0-1.569-.418 1.877 1.877 0 0 0-1.119.303.957.957 0 0 0-.429.816 1.35 1.35 0 0 0 .455.962c.231-.088.475-.134.722-.136a2.228 2.228 0 0 1 1.532.653c.225.216.435.446.628.69.225.288.476.633.753 1.047h-5.57v-.053a4.706 4.706 0 0 0-.522-2.295 3.807 3.807 0 0 0-1.46-1.517 4.262 4.262 0 0 0-2.175-.523 2.944 2.944 0 0 0-1.474.309.92.92 0 0 0-.523.81c.006.202.06.399.157.575.084.198.21.376.366.523.209-.064.422-.115.638-.151.221-.033.445-.05.669-.053a2.029 2.029 0 0 1 1.569.591c.39.5.578 1.13.523 1.763v.02H19.44v1.873h19.61V1.19a2.853 2.853 0 0 0-.481-.147 2.463 2.463 0 0 0-.534-.052ZM41.68.991a1.255 1.255 0 0 0-.826.24.857.857 0 0 0-.288.707v9.559h2.123V1.19a2.853 2.853 0 0 0-.481-.147 2.499 2.499 0 0 0-.528-.052ZM51.291 4.756a1.02 1.02 0 0 0 .943-1.398.994.994 0 0 0-.943-.604.963.963 0 0 0-.916.605.98.98 0 0 0-.072.383 1.01 1.01 0 0 0 .288.71.94.94 0 0 0 .7.304ZM62.837 7.763a10.488 10.488 0 0 0-.69-.847 5.453 5.453 0 0 0-1.521-1.213 3.446 3.446 0 0 0-1.57-.414c-.397-.02-.79.087-1.123.304a.962.962 0 0 0-.424.815 1.366 1.366 0 0 0 .45.963c.23-.088.475-.134.721-.136.273-.003.544.05.795.157.277.128.529.305.743.522.218.208.423.43.611.665.23.287.482.632.754 1.045h-5.125a1.119 1.119 0 0 1-.78-.22.956.956 0 0 1-.235-.726V5.54a2.343 2.343 0 0 0-.491-.146 2.64 2.64 0 0 0-.523-.058 1.313 1.313 0 0 0-.832.241.874.874 0 0 0-.292.711v3.87a2.85 2.85 0 0 1-.523 1.83 1.81 1.81 0 0 1-1.496.628c-1.26 0-1.893-.774-1.893-2.312 0-.3.023-.598.068-.894.041-.306.099-.61.173-.91-.16-.113-.336-.2-.523-.256a1.85 1.85 0 0 0-.586-.105 1.046 1.046 0 0 0-.936.523c-.14.227-.232.48-.272.743-.06.331-.09.667-.089 1.004 0 1.394.36 2.44 1.077 3.137a4.043 4.043 0 0 0 2.929 1.046 4.183 4.183 0 0 0 2.797-.894 3.906 3.906 0 0 0 1.292-2.505c.148.111.317.191.497.236.207.058.422.088.638.088h7.77V9.828a27.266 27.266 0 0 0-.648-1.045c-.246-.382-.491-.685-.742-1.02ZM92.927.991a1.255 1.255 0 0 0-.827.24.858.858 0 0 0-.287.707v7.687H90.06c-.418 0-.685-.1-.8-.299a1.82 1.82 0 0 1-.173-.888 3.257 3.257 0 0 0-.407-1.622 3.05 3.05 0 0 0-1.146-1.16 3.478 3.478 0 0 0-1.772-.434 3.707 3.707 0 0 0-1.72.392 3.022 3.022 0 0 0-1.209 1.114 3.179 3.179 0 0 0-.444 1.71c.02.31-.053.62-.21.888a.846.846 0 0 1-.753.299H79.86V9.2a4.355 4.355 0 0 0-.497-2.139 3.362 3.362 0 0 0-1.365-1.365 4.184 4.184 0 0 0-2.04-.475 4.387 4.387 0 0 0-1.767.345 3.29 3.29 0 0 0-1.302 1.014V1.19a2.713 2.713 0 0 0-.481-.147 2.415 2.415 0 0 0-.523-.052 1.28 1.28 0 0 0-.831.24.857.857 0 0 0-.293.707v7.687h-3.07V1.19a2.716 2.716 0 0 0-.48-.147 2.416 2.416 0 0 0-.524-.052 1.281 1.281 0 0 0-.831.24.857.857 0 0 0-.293.707v9.559h16.21a2.149 2.149 0 0 0 1.57-.8c.322.286.69.518 1.087.685.408.167.846.25 1.287.245.445 0 .888-.077 1.307-.23.42-.142.805-.372 1.13-.674.181.198.387.373.611.523.279.179.605.27.936.261h4.246V1.19a2.853 2.853 0 0 0-.48-.147 2.463 2.463 0 0 0-.54-.052ZM77.725 9.625h-4.78a2.359 2.359 0 0 1 .346-1.266c.235-.379.57-.686.967-.889.44-.226.928-.339 1.422-.33 1.364 0 2.045.722 2.045 2.166v.319Zm8.89-.335a1.234 1.234 0 0 1-1.804 0 1.454 1.454 0 0 1 0-1.867 1.245 1.245 0 0 1 1.804 0 1.454 1.454 0 0 1 0 1.867ZM97.094 1.043a2.499 2.499 0 0 0-.523-.052 1.255 1.255 0 0 0-.826.24.857.857 0 0 0-.272.707v9.559h2.092V1.19a2.857 2.857 0 0 0-.47-.147ZM4.469 22.358l-2.26-3.645H.166v8.613H2.02V21.74l2.4 3.64h.048l2.42-3.677v5.622h1.883v-8.613h-2.04L4.47 22.358ZM15.042 18.567a4.45 4.45 0 0 0-4.586 4.45 4.575 4.575 0 0 0 9.146 0 4.409 4.409 0 0 0-4.56-4.45Zm2.583 4.476a2.578 2.578 0 0 1-2.583 2.682 2.616 2.616 0 0 1-2.614-2.708 2.573 2.573 0 0 1 2.577-2.683 2.614 2.614 0 0 1 2.615 2.704l.005.005ZM24.648 18.718h-3.357v8.602h3.357c2.704 0 4.57-1.877 4.57-4.303 0-2.442-1.866-4.299-4.57-4.299Zm2.615 4.325a2.453 2.453 0 0 1-2.615 2.573h-1.464v-5.193h1.464a2.475 2.475 0 0 1 2.615 2.615v.005ZM32.79 23.832h4.058v-1.689H32.79v-1.741h4.612v-1.69h-6.494v8.614h6.552v-1.69h-4.67v-1.804ZM46.318 21.579a2.697 2.697 0 0 0-.737-1.972 3.426 3.426 0 0 0-2.505-.868h-3.938v8.582h1.894V24.57h1.49l1.846 2.75h2.212l-2.092-3.069a2.677 2.677 0 0 0 1.83-2.672Zm-1.914.1c0 .726-.523 1.218-1.453 1.218h-1.914v-2.474h1.882c.92 0 1.49.419 1.49 1.234l-.005.021ZM53.817 24.015l-4.032-5.302H48.04v8.613h1.867V21.85l4.167 5.476h1.61v-8.613h-1.866v5.302ZM65.745 22.358l-2.264-3.645h-2.04v8.613h1.856V21.74l2.4 3.64h.048l2.421-3.677v5.622h1.883v-8.613h-2.04l-2.264 3.645ZM74.096 18.718h-1.893v8.608h1.893v-8.608ZM78.144 18.713h-1.899v8.613h6.186V25.6h-4.287v-6.887ZM85.752 18.713h-1.893v8.613h6.186V25.6h-4.293v-6.887ZM94.95 22.175c-1.49-.382-1.856-.565-1.856-1.13 0-.418.382-.747 1.103-.747.816.043 1.6.333 2.249.831l.983-1.428a4.978 4.978 0 0 0-3.195-1.092c-1.757 0-3.012 1.045-3.012 2.614 0 1.71 1.119 2.186 2.85 2.615 1.443.371 1.736.617 1.736 1.093 0 .523-.466.81-1.24.81a3.927 3.927 0 0 1-2.572-1.046l-1.12 1.344a5.485 5.485 0 0 0 3.661 1.376c1.862 0 3.164-.957 3.164-2.667-.01-1.496-.994-2.123-2.75-2.573Z"
                            />
                        </svg>
                    </Link>

                    <ul className="f f-c">
                        <li className="_el fs-20  mb-30">
                            <Link
                                to="/products"
                                // onClick={() => reloadPage('/#/products')}
                                // className="interactive_label"
                                className={getLinkClassName('/products')}
                                aria-label="Contact us"
                            >
                                {/* <strong className="_txt words"> */}
                                Products
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30  _txt words">
                            <Link
                                to="/brands-list"
                                // className="interactive_label"
                                aria-label="Blog Listing"
                                // onClick={() => reloadPage('/#/privacy')}
                                className={getLinkClassName('/brands-list')}
                            >
                                {/* <strong className="_txt words"> */}
                                Brands
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30">
                            <Link
                                to="/categories"
                                // className="interactive_label "
                                aria-label="categories"
                                // onClick={() => reloadPage('/#/categories')}
                                className={getLinkClassName('/categories')}
                            >
                                {/* <strong className="_txt words"> */}
                                Categories
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30">
                            <Link
                                to="/jobposts"
                                // onClick={() => reloadPage('/#/newsfeeds')}
                                // className="interactive_label"
                                aria-label="Job Posting"
                                className={getLinkClassName('/jobposts')}
                            >
                                {/* <strong className="_txt words"> */}
                                Job Posting
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30  _txt words">
                            <Link
                                to="/blogs-list"
                                // className="interactive_label"
                                aria-label="Blog Listing"
                                // onClick={() => reloadPage('/#/privacy')}
                                className={getLinkClassName('/blogs-list')}
                            >
                                {/* <strong className="_txt words"> */}
                                Blogs
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30  _txt words">
                            <Link
                                to="/careersrequests"
                                // className="interactive_label"
                                aria-label="Contact us"
                                // onClick={() => reloadPage('/#/careersrequests')}
                                className={getLinkClassName('/careersrequests')}
                            >
                                {/* <strong className="_txt words"> */}
                                Careers Requests
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30 _txt words">
                            <Link
                                to="/contactus"
                                // className="interactive_label"
                                aria-label="Contact us"
                                // onClick={() => reloadPage('/#/careersrequests')}
                                className={getLinkClassName('/contactus')}
                            >
                                {/* <strong className="_txt words"> */}
                                Contact US
                                {/* </strong> */}
                            </Link>
                        </li>
                        <li className="_el fs-20  mb-30  _txt words">
                            <Link
                                to="/newsfeeds"
                                // onClick={() => reloadPage('/#/newsfeeds')}
                                // className="interactive_label"
                                aria-label="Animal Feed Brands"
                                className={getLinkClassName('/newsfeeds')}
                            >
                                {/* <strong className="_txt words"> */}
                                News Letter
                                {/* </strong> */}
                            </Link>
                        </li>
                        <li className="_el fs-20  mb-30">
                            <Link
                                to="/termsandconditions"
                                // className="interactive_label"
                                aria-label="Careers"
                                // onClick={() =>
                                //     reloadPage('/#/termsandconditions')
                                // }
                                className={getLinkClassName(
                                    '/termsandconditions'
                                )}
                            >
                                {/* <strong className="_txt words"> */}
                                Term and Condition
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30  _txt words">
                            <Link
                                to="/privacy"
                                // className="interactive_label"
                                aria-label="Contact us"
                                // onClick={() => reloadPage('/#/privacy')}
                                className={getLinkClassName('/privacy')}
                            >
                                {/* <strong className="_txt words"> */}
                                Privacy Policy
                                {/* </strong> */}
                            </Link>
                        </li>

                        <li className="_el fs-20  mb-30   _txt words">
                            <Link
                                to="/settings"
                                // className="interactive_label"
                                aria-label="Contact us"
                                // onClick={() => reloadPage('/#/settings')}
                                className={getLinkClassName('/settings')}
                            >
                                {/* <strong className="_txt words"> */}
                                General Settings
                                {/* </strong> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <button
                    className=" custom-btn  light_bg interactive_label f a-c j-c"
                    // onClick={setpath}
                    // type="submit"

                    onClick={logout}
                >
                    Logout
                    {/* {productLoading ? (
                                <LoadingSpinner />
                            ) : (
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
                            )} */}
                </button>
            </div>
        </div>
    )
}

export default SideNav
