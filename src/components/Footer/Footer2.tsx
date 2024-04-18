import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import baseUrl from '../../ApiFile'

const Footer = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    type companySocialMediaLinks = {
        _id: string
        facebook: string
        instagram: string
        twitter: string
        linkedin: string
    }

    type SocialMediaLinksState = companySocialMediaLinks[]

    const [socialmedialinks, setsocialmedialinks] =
        useState<SocialMediaLinksState>([])

    const getSocialMediaData = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/gernalSetting/getSocialMediaLinks`
            )

            setsocialmedialinks(response.data.data.companySocialMediaLinks)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getSocialMediaData()
    }, [])

    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
        window.scrollTo(0, 0)
    }

    return (
        <footer className="primary_bg pull_up side_padding">
            <div className="ft_top ft_top inner_padding_half">
                <div className="form_sides f a-s x_padding">
                    <div className="form_side">
                        <div className="form_content _eleY">
                            <a
                                href="/"
                                className="main_logo"
                                aria-label="Homepage"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 98 28"
                                >
                                    <path
                                        fill="#FAF3E6"
                                        d="M2.811 4.756a.947.947 0 0 0 .711-.303.988.988 0 0 0 .288-.711.957.957 0 0 0-.288-.706.967.967 0 0 0-.711-.283.993.993 0 0 0-.93.605.962.962 0 0 0-.074.384.994.994 0 0 0 .293.71.973.973 0 0 0 .711.304ZM5.29 4.756a1.02 1.02 0 0 0 .943-1.398.994.994 0 0 0-.943-.604.973.973 0 0 0-.989.988 1.01 1.01 0 0 0 .288.71.952.952 0 0 0 .7.304ZM11.444 3.742a.99.99 0 0 0 .288.71.94.94 0 0 0 .7.304.972.972 0 0 0 .722-.303.993.993 0 0 0 .293-.711.962.962 0 0 0-.293-.706.994.994 0 0 0-.721-.283.972.972 0 0 0-.989.989ZM11.193 2.722a.941.941 0 0 0 .712-.298.987.987 0 0 0 .287-.717.957.957 0 0 0-.287-.7.967.967 0 0 0-.712-.283.993.993 0 0 0-.93.603.961.961 0 0 0-.074.38.994.994 0 0 0 .293.717.968.968 0 0 0 .711.298ZM9.949 4.756a.957.957 0 0 0 .716-.303 1.01 1.01 0 0 0 .288-.712 1.01 1.01 0 0 0-1.71-.705.962.962 0 0 0-.293.705.993.993 0 0 0 .293.712.962.962 0 0 0 .706.303ZM17.651 11.496v-5.94a2.343 2.343 0 0 0-.491-.147 2.642 2.642 0 0 0-.523-.057c-.732 0-1.098.319-1.098.952v3.32h-2.306a.894.894 0 0 1-.764-.272 1.866 1.866 0 0 1-.198-1.02V5.557a2.343 2.343 0 0 0-.492-.147 2.736 2.736 0 0 0-.523-.057c-.727 0-1.093.319-1.093.952v2.029c.033.35-.04.704-.209 1.014a.9.9 0 0 1-.763.277H7.62a.826.826 0 0 1-.7-.256 1.689 1.689 0 0 1-.193-.957v-3.06H4.516a5.093 5.093 0 0 0-3.211.88A2.86 2.86 0 0 0 .19 8.61a3.06 3.06 0 0 0 .413 1.61c.275.45.673.813 1.145 1.046a3.599 3.599 0 0 0 1.658.366 3.08 3.08 0 0 0 2.233-.852 1.794 1.794 0 0 0 1.616.721h2.27a1.846 1.846 0 0 0 1.704-.747 1.757 1.757 0 0 0 1.621.742h4.8ZM4.578 8.36a1.218 1.218 0 0 1-.308.889 1.103 1.103 0 0 1-.826.313 1.046 1.046 0 0 1-.795-.292 1.114 1.114 0 0 1-.272-.79 1.046 1.046 0 0 1 .444-.926c.39-.233.84-.342 1.292-.313h.465v1.119ZM15.079 12.16a.998.998 0 0 0-.93.608.95.95 0 0 0-.074.381.994.994 0 0 0 .293.717.968.968 0 0 0 .71.298.941.941 0 0 0 .712-.298.989.989 0 0 0 .288-.717.946.946 0 0 0-.288-.7.972.972 0 0 0-.711-.288ZM17.558 12.16a.984.984 0 0 0-.989.99 1.015 1.015 0 0 0 .607.938 1.01 1.01 0 0 0 1.396-.939.93.93 0 0 0-.293-.7.998.998 0 0 0-.721-.288ZM38.035.991a1.255 1.255 0 0 0-.826.24.858.858 0 0 0-.303.707v7.687h-2.552c-.152-.257-.34-.555-.565-.884-.225-.33-.465-.664-.706-.989a9.833 9.833 0 0 0-.69-.836 5.753 5.753 0 0 0-1.522-1.208 3.362 3.362 0 0 0-1.569-.418 1.877 1.877 0 0 0-1.119.303.957.957 0 0 0-.429.816 1.35 1.35 0 0 0 .455.962c.231-.088.475-.134.722-.136a2.228 2.228 0 0 1 1.532.653c.225.216.435.446.628.69.225.288.476.633.753 1.047h-5.57v-.053a4.706 4.706 0 0 0-.522-2.295 3.807 3.807 0 0 0-1.46-1.517 4.262 4.262 0 0 0-2.175-.523 2.944 2.944 0 0 0-1.474.309.92.92 0 0 0-.523.81c.006.202.06.399.157.575.084.198.21.376.366.523.209-.064.422-.115.638-.151.221-.033.445-.05.669-.053a2.029 2.029 0 0 1 1.569.591c.39.5.578 1.13.523 1.763v.02H19.44v1.873h19.61V1.19a2.853 2.853 0 0 0-.481-.147 2.463 2.463 0 0 0-.534-.052ZM41.68.991a1.255 1.255 0 0 0-.826.24.857.857 0 0 0-.288.707v9.559h2.123V1.19a2.853 2.853 0 0 0-.481-.147 2.499 2.499 0 0 0-.528-.052ZM51.291 4.756a1.02 1.02 0 0 0 .943-1.398.994.994 0 0 0-.943-.604.963.963 0 0 0-.916.605.98.98 0 0 0-.072.383 1.01 1.01 0 0 0 .288.71.94.94 0 0 0 .7.304ZM62.837 7.763a10.488 10.488 0 0 0-.69-.847 5.453 5.453 0 0 0-1.521-1.213 3.446 3.446 0 0 0-1.57-.414c-.397-.02-.79.087-1.123.304a.962.962 0 0 0-.424.815 1.366 1.366 0 0 0 .45.963c.23-.088.475-.134.721-.136.273-.003.544.05.795.157.277.128.529.305.743.522.218.208.423.43.611.665.23.287.482.632.754 1.045h-5.125a1.119 1.119 0 0 1-.78-.22.956.956 0 0 1-.235-.726V5.54a2.343 2.343 0 0 0-.491-.146 2.64 2.64 0 0 0-.523-.058 1.313 1.313 0 0 0-.832.241.874.874 0 0 0-.292.711v3.87a2.85 2.85 0 0 1-.523 1.83 1.81 1.81 0 0 1-1.496.628c-1.26 0-1.893-.774-1.893-2.312 0-.3.023-.598.068-.894.041-.306.099-.61.173-.91-.16-.113-.336-.2-.523-.256a1.85 1.85 0 0 0-.586-.105 1.046 1.046 0 0 0-.936.523c-.14.227-.232.48-.272.743-.06.331-.09.667-.089 1.004 0 1.394.36 2.44 1.077 3.137a4.043 4.043 0 0 0 2.929 1.046 4.183 4.183 0 0 0 2.797-.894 3.906 3.906 0 0 0 1.292-2.505c.148.111.317.191.497.236.207.058.422.088.638.088h7.77V9.828a27.266 27.266 0 0 0-.648-1.045c-.246-.382-.491-.685-.742-1.02ZM92.927.991a1.255 1.255 0 0 0-.827.24.858.858 0 0 0-.287.707v7.687H90.06c-.418 0-.685-.1-.8-.299a1.82 1.82 0 0 1-.173-.888 3.257 3.257 0 0 0-.407-1.622 3.05 3.05 0 0 0-1.146-1.16 3.478 3.478 0 0 0-1.772-.434 3.707 3.707 0 0 0-1.72.392 3.022 3.022 0 0 0-1.209 1.114 3.179 3.179 0 0 0-.444 1.71c.02.31-.053.62-.21.888a.846.846 0 0 1-.753.299H79.86V9.2a4.355 4.355 0 0 0-.497-2.139 3.362 3.362 0 0 0-1.365-1.365 4.184 4.184 0 0 0-2.04-.475 4.387 4.387 0 0 0-1.767.345 3.29 3.29 0 0 0-1.302 1.014V1.19a2.713 2.713 0 0 0-.481-.147 2.415 2.415 0 0 0-.523-.052 1.28 1.28 0 0 0-.831.24.857.857 0 0 0-.293.707v7.687h-3.07V1.19a2.716 2.716 0 0 0-.48-.147 2.416 2.416 0 0 0-.524-.052 1.281 1.281 0 0 0-.831.24.857.857 0 0 0-.293.707v9.559h16.21a2.149 2.149 0 0 0 1.57-.8c.322.286.69.518 1.087.685.408.167.846.25 1.287.245.445 0 .888-.077 1.307-.23.42-.142.805-.372 1.13-.674.181.198.387.373.611.523.279.179.605.27.936.261h4.246V1.19a2.853 2.853 0 0 0-.48-.147 2.463 2.463 0 0 0-.54-.052ZM77.725 9.625h-4.78a2.359 2.359 0 0 1 .346-1.266c.235-.379.57-.686.967-.889.44-.226.928-.339 1.422-.33 1.364 0 2.045.722 2.045 2.166v.319Zm8.89-.335a1.234 1.234 0 0 1-1.804 0 1.454 1.454 0 0 1 0-1.867 1.245 1.245 0 0 1 1.804 0 1.454 1.454 0 0 1 0 1.867ZM97.094 1.043a2.499 2.499 0 0 0-.523-.052 1.255 1.255 0 0 0-.826.24.857.857 0 0 0-.272.707v9.559h2.092V1.19a2.857 2.857 0 0 0-.47-.147ZM4.469 22.358l-2.26-3.645H.166v8.613H2.02V21.74l2.4 3.64h.048l2.42-3.677v5.622h1.883v-8.613h-2.04L4.47 22.358ZM15.042 18.567a4.45 4.45 0 0 0-4.586 4.45 4.575 4.575 0 0 0 9.146 0 4.409 4.409 0 0 0-4.56-4.45Zm2.583 4.476a2.578 2.578 0 0 1-2.583 2.682 2.616 2.616 0 0 1-2.614-2.708 2.573 2.573 0 0 1 2.577-2.683 2.614 2.614 0 0 1 2.615 2.704l.005.005ZM24.648 18.718h-3.357v8.602h3.357c2.704 0 4.57-1.877 4.57-4.303 0-2.442-1.866-4.299-4.57-4.299Zm2.615 4.325a2.453 2.453 0 0 1-2.615 2.573h-1.464v-5.193h1.464a2.475 2.475 0 0 1 2.615 2.615v.005ZM32.79 23.832h4.058v-1.689H32.79v-1.741h4.612v-1.69h-6.494v8.614h6.552v-1.69h-4.67v-1.804ZM46.318 21.579a2.697 2.697 0 0 0-.737-1.972 3.426 3.426 0 0 0-2.505-.868h-3.938v8.582h1.894V24.57h1.49l1.846 2.75h2.212l-2.092-3.069a2.677 2.677 0 0 0 1.83-2.672Zm-1.914.1c0 .726-.523 1.218-1.453 1.218h-1.914v-2.474h1.882c.92 0 1.49.419 1.49 1.234l-.005.021ZM53.817 24.015l-4.032-5.302H48.04v8.613h1.867V21.85l4.167 5.476h1.61v-8.613h-1.866v5.302ZM65.745 22.358l-2.264-3.645h-2.04v8.613h1.856V21.74l2.4 3.64h.048l2.421-3.677v5.622h1.883v-8.613h-2.04l-2.264 3.645ZM74.096 18.718h-1.893v8.608h1.893v-8.608ZM78.144 18.713h-1.899v8.613h6.186V25.6h-4.287v-6.887ZM85.752 18.713h-1.893v8.613h6.186V25.6h-4.293v-6.887ZM94.95 22.175c-1.49-.382-1.856-.565-1.856-1.13 0-.418.382-.747 1.103-.747.816.043 1.6.333 2.249.831l.983-1.428a4.978 4.978 0 0 0-3.195-1.092c-1.757 0-3.012 1.045-3.012 2.614 0 1.71 1.119 2.186 2.85 2.615 1.443.371 1.736.617 1.736 1.093 0 .523-.466.81-1.24.81a3.927 3.927 0 0 1-2.572-1.046l-1.12 1.344a5.485 5.485 0 0 0 3.661 1.376c1.862 0 3.164-.957 3.164-2.667-.01-1.496-.994-2.123-2.75-2.573Z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="form_side">
                        <div className="form_cols f a-s">
                            <div className="form_col f f-c">
                                <h5>
                                    <strong className="_mask">
                                        {t('quicklinkslabel')}
                                    </strong>
                                </h5>

                                <ul className="f f-c a-s">
                                    <li className="_eleY">
                                        {/* <Link to="/">{t('homelabel')}</Link> */}
                                        <a href="/">{t('homelabel')}</a>
                                    </li>
                                    <li className="_eleY">
                                        {/* <Link to="/about">
                                            {' '}
                                            {t('aboutuslabel')}
                                        </Link> */}

                                        <a
                                            href="/#/about"
                                            onClick={() =>
                                                reloadPage('/#about')
                                            }
                                        >
                                            {' '}
                                            {t('aboutuslabel')}
                                        </a>
                                    </li>
                                    <li className="_eleY">
                                        {/* <Link to="/careers">
                                            {' '}
                                            {t('careerlabel')}
                                        </Link> */}

                                        <a
                                            href="/#/careers"
                                            onClick={() =>
                                                reloadPage('/#/careers')
                                            }
                                        >
                                            {' '}
                                            {t('careerlabel')}
                                        </a>
                                    </li>

                                    <li className="_eleY">
                                        {/* <Link to="contact">
                                            {t('uslabelcontact')}
                                        </Link> */}

                                        <Link
                                            to="/blogs"
                                            // onClick={() =>
                                            //     reloadPage('/#contact')
                                            // }
                                        >
                                            {t('bloglabel')}
                                        </Link>
                                    </li>
                                    <li className="_eleY">
                                        {/* <Link to="contact">
                                            {t('uslabelcontact')}
                                        </Link> */}

                                        <a
                                            href="/#/contact"
                                            onClick={() =>
                                                reloadPage('/#contact')
                                            }
                                        >
                                            {t('uslabelcontact')}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="form_col f f-c">
                                <h5>
                                    <strong className="_mask">
                                        {t('ourbrandslabel')}
                                    </strong>
                                </h5>

                                <ul className="f f-c a-s">
                                    <li className="_eleY">
                                        {/* <Link to="/flourbrands">
                                            {t('flourbrandslabel')}
                                        </Link> */}

                                        <a
                                            href="/#/flourbrands"
                                            onClick={() =>
                                                reloadPage('/#/flourbrands')
                                            }
                                        >
                                            {t('flourbrandslabel')}
                                        </a>
                                    </li>
                                    <li className="_eleY">
                                        {/* <Link to="/animalfeeds">
                                            {t('animalfeedsbrandlabel')}
                                        </Link> */}

                                        <a
                                            href="/#/animalfeeds"
                                            onClick={() =>
                                                reloadPage('/#/animalfeeds')
                                            }
                                        >
                                            {t('animalfeedsbrandlabel')}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ft_btm x_padding">
                <div className="form_sides f a-c">
                    <div className="form_side">
                        <div className="form_content">
                            <div className="copyrights f f-c a-s">
                                <span className="_eleX">
                                    {t('rightreservedlabl')}
                                </span>
                                <div className="origin f a-c _eleX">
                                    <div className="eyebrow">
                                        {t('madebylbel')}
                                    </div>
                                    <a
                                        href="http://origin.global"
                                        target="_blank"
                                        aria-label="origin"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 73 17"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M41.703 13.023V4.101h1.958v.855c.32-.57.872-.855 1.657-.855h1.57v1.763h-2.444c-.308 0-.517.05-.623.151-.106.102-.16.307-.16.615v6.393h-1.958ZM49.854 4.101h-1.96v8.922h1.96V4.101ZM63.866 4.101h-1.96v8.922h1.96V4.101ZM65.288 13.024V4.102h2.033v1.3h-.015c.234-.464.55-.826.951-1.087.4-.26.877-.392 1.433-.392h.074c.874 0 1.958.3 2.47.9.512.599.766 1.439.766 2.52v5.68h-2.05V7.487c0-1.152-.873-1.728-1.833-1.728h-.074c-.61.048-.853.164-1.222.571-.34.374-.498.908-.498 1.585v5.111H65.29l-.002-.001ZM36.15 3.945a4.709 4.709 0 1 0 0 9.419 4.709 4.709 0 1 0 0-9.42Zm0 7.445a2.736 2.736 0 1 1 0-5.472 2.736 2.736 0 0 1 0 5.472ZM58.464 4.101v.788a4.677 4.677 0 0 0-2.82-.944 4.709 4.709 0 1 0 0 9.419 4.679 4.679 0 0 0 2.874-.985v2.09c0 .237-.038.393-.116.47-.077.078-.234.117-.471.117h-5.48v1.727h5.461c.783 0 1.4-.23 1.852-.693.451-.463.677-1.075.677-1.834V4.101h-1.977Zm-2.82 7.29a2.736 2.736 0 1 1 0-5.473 2.736 2.736 0 0 1 0 5.472ZM49.956 1.395a1.178 1.178 0 1 1-2.357 0 1.178 1.178 0 1 1 2.357 0ZM63.906 1.395a1.178 1.178 0 1 1-2.357 0 1.178 1.178 0 1 1 2.357 0ZM2.733 3.888l.212.215-.46.451.212.218.542-.532.213.217-.807.791-1.034-1.052.798-.783.213.217-.533.524.184.187.46-.452v-.001ZM3.005 2.952l.406-.203.69.708h.004l-.148-.98.406-.202.656 1.32-.315.156-.409-.821h-.003l.163.946-.232.116-.655-.7h-.004l.41.823-.314.157-.656-1.32h.001ZM6.218 2.484l.044.3-.638.092.043.3.753-.11.044.3-1.12.163-.212-1.461 1.108-.162.044.3-.74.108.038.259.638-.093-.002.004ZM6.954 1.91l.688.097c.325.046.5.226.462.49-.029.204-.16.308-.349.323v.004c.357.114.143.661.224.698l-.003.02-.382-.053c-.063-.07.133-.5-.179-.544l-.229-.032-.072.508-.367-.052.207-1.46Zm.274.703.25.036c.146.02.232-.022.249-.144.017-.122-.053-.186-.2-.207l-.25-.035-.05.352.001-.002ZM9.311 2.8c-.22-.104-.377.03-.497.281s-.124.46.11.57c.155.074.306.032.372-.096l-.254-.12.114-.242.6.284-.335.709-.241-.114.047-.186h-.003c-.122.09-.283.108-.479.015-.379-.178-.464-.58-.272-.983.19-.4.555-.587.974-.389.366.174.467.485.378.756l-.344-.163c.019-.103.015-.234-.168-.322H9.31ZM11.027 4.388l-.206.224-.474-.434-.206.224.56.513-.205.224-.835-.763.997-1.089.825.754-.205.224-.55-.503-.178.194.475.434.002-.002ZM11.374 5.905l-.272.158-.158-.27.271-.159.159.271ZM12.92 6.51l.137.64c.086.4-.12.698-.582.8-.463.1-.768-.067-.854-.469l-.141-.66 1.441-.311h-.002Zm-1.068.609.05.232c.05.226.23.282.492.226.263-.057.406-.182.357-.41l-.05-.231-.85.183ZM13.195 8.798l-1.475-.024.007-.372 1.475.024-.007.372ZM11.872 10.372c-.276-.064-.406-.313-.323-.673.087-.376.343-.615.673-.54l-.084.366c-.167-.039-.26.074-.296.238-.032.134.006.215.082.232.123.029.189-.108.295-.293.13-.234.281-.433.539-.374.313.073.38.347.308.655-.078.335-.315.56-.61.502l.084-.365c.115.01.2-.064.235-.203.025-.109.006-.193-.076-.212-.096-.022-.147.05-.244.22-.144.253-.285.516-.581.447h-.002ZM12.638 11.235l-.343.605c-.162.286-.393.382-.627.25-.18-.1-.229-.262-.173-.442h-.003c-.238.288-.669-.111-.733-.049l-.018-.01.19-.335c.09-.032.416.308.572.032l.115-.202-.448-.253.183-.323 1.285.727Zm-.756 0-.124.22c-.073.129-.066.223.042.284.107.06.193.018.266-.11l.124-.218-.308-.176ZM10.114 12.187c.323-.306.583-.28.837-.015l.65.684-.27.256-.65-.684c-.132-.14-.24-.133-.358-.02s-.13.22.003.359l.65.683-.27.256-.649-.683c-.253-.266-.266-.527.057-.836ZM10.084 14.132l-.638.323c-.275.138-.519.08-.659-.195-.14-.277-.04-.507.234-.645l.309-.155-.241-.477.332-.166.665 1.316-.002-.001Zm-.849-.285c-.114.057-.165.131-.11.243.056.11.146.114.26.055l.23-.116-.15-.298-.231.116h.001ZM7.956 14.649l.42-.08.056.298-1.205.226-.056-.298.42-.08-.216-1.15.365-.07.216 1.152v.002ZM5.84 13.88l.031-.312.312.032-.034.311-.312-.032h.002ZM3.745 13.822l.123-.278.589.261.123-.278-.696-.306.123-.278 1.034.458-.596 1.35-1.024-.452.123-.278.684.303.106-.24-.59-.26v-.002ZM2.595 13.73l.45-.97-.002-.003-.881.61-.3-.252 1.315-.821.3.252-.573 1.445-.311-.261h.002ZM2.127 12.327c-.37.244-.788.204-1.046-.188-.254-.39-.128-.79.242-1.034.373-.244.792-.2 1.046.187.258.392.128.79-.244 1.035h.002Zm-.595-.904c-.214.14-.345.325-.197.549.148.226.369.178.583.037.215-.141.347-.325.198-.55-.146-.224-.368-.179-.584-.038v.002ZM.34 10.505l1.123-.339-.188-.628.29-.087.297.985-1.412.426-.108-.355-.002-.002ZM.062 9.218l1.014-.345V8.87l-1.05-.214L0 8.266l1.504.382.025.39-1.44.586-.027-.406ZM.837 6.759l.296.064-.136.63.296.064.162-.743.296.064-.24 1.105L.068 7.63l.237-1.093.297.064-.158.73.255.055.137-.63v.002ZM1.978 5.693l.273.155-.155.273-.273-.155.155-.273ZM25.274 5.864c-.343 0-.666-.133-.909-.378a1.279 1.279 0 0 1-.377-.909c0-.343.135-.667.377-.91.243-.242.566-.376.91-.376.343 0 .666.133.909.377.242.242.377.566.377.91 0 .343-.135.666-.377.908a1.279 1.279 0 0 1-.91.378ZM17.5 13.64c-.344 0-.668-.133-.91-.378a1.28 1.28 0 0 1-.377-.909c0-.343.134-.666.377-.909.242-.242.566-.377.91-.377.343 0 .666.133.908.377.243.242.377.566.377.91 0 .343-.133.666-.377.909a1.28 1.28 0 0 1-.909.377ZM26.574 5.876a1.827 1.827 0 0 1-.948.505 4.707 4.707 0 0 1-.863 5.454 4.706 4.706 0 0 1-5.459.862 1.833 1.833 0 0 1-1.308 1.424 6.578 6.578 0 0 0 3.445.971 6.565 6.565 0 0 0 4.655-1.924c2.196-2.196 2.512-5.568.951-8.104a1.814 1.814 0 0 1-.47.812M16.784 3.857c-2.154 2.153-2.5 5.436-1.041 7.955a1.82 1.82 0 0 1 .458-.757 1.818 1.818 0 0 1 1.002-.512 4.707 4.707 0 0 1 .914-5.353 4.686 4.686 0 0 1 3.324-1.374c.693 0 1.387.153 2.025.458a1.82 1.82 0 0 1 .512-.995c.217-.217.48-.374.766-.46a6.584 6.584 0 0 0-3.305-.885c-1.685 0-3.37.641-4.654 1.924"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form_side _eleX">
                        <div className="social f a-c _ele">
                            {socialmedialinks.map((link: any, index: any) => (
                                <>
                                    <a
                                        key={index}
                                        className="f a-c j-c magnet"
                                        href={link.linkedin}
                                        target="_blank"
                                        data-dist="1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M13.997 14H14V9.232c0-2.332-.502-4.129-3.229-4.129-1.31 0-2.19.72-2.55 1.401h-.037V5.321H5.599v8.678H8.29V9.702c0-1.131.214-2.225 1.615-2.225 1.381 0 1.402 1.29 1.402 2.298V14h2.689ZM1.215 5.322h2.696v8.679H1.215V5.322ZM2.561 1C1.699 1 1 1.7 1 2.561c0 .862.7 1.576 1.561 1.576.862 0 1.561-.714 1.561-1.576 0-.862-.7-1.561-1.561-1.561Z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        key={index}
                                        className="f a-c j-c magnet"
                                        href={link.instagram}
                                        target="_blank"
                                        data-dist="1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M9.938 1H5.061A4.063 4.063 0 0 0 1 5.063v4.875A4.063 4.063 0 0 0 5.063 14h4.875A4.063 4.063 0 0 0 14 9.937V5.064A4.063 4.063 0 0 0 9.937 1Zm2.843 8.938a2.847 2.847 0 0 1-2.844 2.843H5.064a2.847 2.847 0 0 1-2.844-2.844V5.064a2.847 2.847 0 0 1 2.844-2.844h4.875a2.847 2.847 0 0 1 2.843 2.844v4.875Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M7.5 4.247a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm0 5.281a2.034 2.034 0 0 1-2.031-2.03c0-1.121.911-2.032 2.031-2.032s2.031.91 2.031 2.031c0 1.12-.911 2.031-2.031 2.031ZM10.994 4.438a.433.433 0 1 0 0-.866.433.433 0 0 0 0 .866Z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        key={index}
                                        className="f a-c j-c magnet"
                                        href={link.twitter}
                                        target="_blank"
                                        data-dist="1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M11.238 2h1.994L8.877 6.66 14 13H9.988L6.846 9.155 3.25 13H1.256l4.658-4.984L1 2h4.113l2.84 3.515L11.237 2h.001Zm-.7 9.883h1.105l-7.13-8.825H3.328l7.21 8.825Z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="f a-c j-c magnet"
                                        href={link.facebook}
                                        target="_blank"
                                        data-dist="1"
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M9.36484 3.1793H10.563V1.09242C10.3563 1.06398 9.64539 1 8.81742 1C7.08984 1 5.90641 2.08664 5.90641 4.08383V5.92188H4V8.25484H5.90641V14.125H8.24375V8.25539H10.073L10.3634 5.92242H8.2432V4.31516C8.24375 3.64086 8.42531 3.1793 9.36484 3.1793Z"
                                            />
                                        </svg>
                                    </a>
                                </>
                            ))}
                        </div>
                    </div>

                    <div className="ft_links f a-c _eleX">
                        <Link
                            to="/termsandconditions"
                            className="_underline"
                            // href="terms.html"
                            // target="_blank"
                        >
                            {t('termsandconditionslabel')}
                        </Link>
                        <Link
                            to="/privacy"
                            className="_underline"
                            // href="privacy.html"
                            // target="_blank"
                        >
                            {t('pripolicylabel')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer