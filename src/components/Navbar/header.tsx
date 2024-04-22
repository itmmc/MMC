import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import axios from 'axios'
import baseUrl from '../../ApiFile'
import { getSocialMediaData } from '../../Links'
import HeaderLinks from '@components/HeaderLinks/HeaderLinks'
import isAfterOrEqualTo10AMKSA from '@helpers/utils/dateCompare'

const Header: React.FunctionComponent<any> = ({ openModelFunc }) => {
    const location = useLocation()
    const [productITems, setProductITems] = useState([])
    const [getnameState, setgetnameState] = useState<any>('')
    const history = useHistory()
    const [getLogoData, setgetLogoData] = useState<any>('')
    const [activeLink, setActiveLink] = useState('')
    const [showHeader, setShowHeader] = useState(true)
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language

    const getLinkClassName = (path: string) => {
        const isActive = location.pathname === path
        return `interactive_label ${
            isActive ? 'secondary_color header-text-width' : 'header-text-width'
        }`
    }

    const reloadPage = (pageUrl: any) => {
        window.location.href = pageUrl
        window.location.reload()
    }

    useEffect(() => {
        const isLoginRoute = window.location.href.includes('/login')
        const isAdmin = localStorage.getItem('accessToken')
        if (isLoginRoute) {
            setShowHeader(false)
        }
        if (isAdmin) {
            setShowHeader(false)
        }
    }, [])

    const searchArray = [
        {
            id: '1',
            type: 'frontend',
            route: '/about#TheMMCJourney',
            title_en: 'The MMC Journey',
            title_ar: 'رحلة إم إم سي',
            showByDefault: false,
            relatedWords: [
                'company history',
                'milestones',
                'progress',
                'development',
                'journey',
                'company growth',
                'historical achievements',
                'business milestones',
                'evolution',
            ],
        },
        {
            id: '2',
            type: 'frontend',
            route: '/about',
            title_en: 'About',
            title_ar: 'عن',
            showByDefault: false,
            relatedWords: [
                'company overview',
                'background',
                'information',
                'history',
                'overview',
                'company profile',
                'mission statement',
                'company values',
                'founders',
            ],
        },
        {
            id: '3',
            type: 'frontend',
            route: '/about#OurVision',
            title_en: 'Our Vision',
            title_ar: 'رؤيتنا',
            showByDefault: false,
            relatedWords: [
                'mission',
                'future goals',
                'aspiration',
                'objectives',
                'vision statement',
                'long-term vision',
                'strategic goals',
                'business mission',
                'future outlook',
            ],
        },
        {
            id: '4',
            type: 'frontend',
            route: '/about#OurMission',
            title_en: 'Our Mission',
            title_ar: 'مهمتنا',
            showByDefault: false,
            relatedWords: [
                'principles',
                'ethics',
                'beliefs',
                'culture',
                'standards',
                'core values',
                'value system',
                'work ethics',
                'business philosophy',
            ],
        },
        {
            id: '5',
            type: 'frontend',
            route: '/about#OurValues',
            title_en: 'Our Values',
            title_ar: 'قيمنا',
            showByDefault: false,
            relatedWords: [
                'principles',
                'ethics',
                'beliefs',
                'culture',
                'standards',
                'core values',
                'value system',
                'work ethics',
                'business philosophy',
            ],
        },
        {
            id: '6',
            type: 'frontend',
            route: '/about#Insights',
            title_en: 'Our Factories: A Commitment to Excellence',
            title_ar: 'مصانعنا: التزام بالتميز',
            showByDefault: false,
            relatedWords: [
                'manufacturing',
                'production facilities',
                'quality standards',
                'commitment to excellence',
                'technology',
                'industrial processes',
                'factory operations',
                'production efficiency',
                'manufacturing excellence',
            ],
        },
        {
            id: '7',
            type: 'frontend',
            route: '/animalfeeds',
            title_en: 'Animal Feed Brands',
            title_ar: 'العلامة التجارية للأعلاف الحيوانية',
            showByDefault: false,
            relatedWords: [
                'livestock feed',
                'feed products',
                'poultry nutrition',
                'animal care',
                'nutrition solutions',
                'livestock nutrition',
                'feed formulations',
                'animal health',
                'feed ingredients',
            ],
        },
        {
            id: '8',
            type: 'frontend',
            route: '/animalfeeds#animalfeedsCat',
            title_en: 'Poultry',
            title_ar: 'دواجن',
            showByDefault: false,
            relatedWords: [
                'chickens',
                'fowl',
                'poultry farming',
                'poultry products',
                'bird care',
                'poultry health',
                'egg production',
                'poultry nutrition',
                'broiler farming',
            ],
        },
        {
            id: '9',
            type: 'frontend',
            route: '/animalfeeds#animalfeedsCat',
            title_en: 'Bran',
            title_ar: 'نخالة',
            showByDefault: false,
            relatedWords: [
                'wheat bran',
                'animal feed',
                'nutritional supplement',
                'grain processing',
                'fodder',
                'animal nutrition',
                'feed additives',
                'feed grains',
                'animal digestion',
            ],
        },
        {
            id: '10',
            type: 'frontend',
            route: '/flourbrands#FlourBrands',
            title_en: 'Flour Brands',
            title_ar: 'ماركات الدقيق',
            showByDefault: false,
            relatedWords: [
                'flour products',
                'baking ingredients',
                'flour selection',
                'grain processing',
                'baking needs',
                'baking flour',
                'cooking essentials',
                'flour types',
                'flour recipes',
            ],
        },
        {
            id: '11',
            type: 'frontend',
            route: '/qamhati',
            title_en: 'Qamhati',
            title_ar: 'قمهاتي',
            showByDefault: false,
            relatedWords: [
                'Household',
                'professional',
                'Bakeries',
                'Industrial',
                'Bakeries & Industrial',
                'specific brand details',
                'product information',
                'qamhati flour',
                'qamhati brand',
                'qamhati products',
                'qamhati recipes',
                'qamhati baking',
                'qamhati cooking',
                'qamhati culinary',
            ],
        },
        {
            id: '12',
            type: 'frontend',
            route: '/modernmills',
            title_en: 'Modern Mills',
            title_ar: 'المطاحن الحديثة',
            showByDefault: false,
            relatedWords: [
                'Household',
                'professional',
                'Bakeries',
                'Industrial',
                'Bakeries & Industrial',
                'modern mills products',
                'modern mills brand',
                'modern mills flour',
                'modern mills company',
                'modern mills flour products',
                'modern mills recipes',
                'modern mills baking',
                'modern mills cooking',
                'modern mills culinary',
            ],
        },
        {
            id: '13',
            type: 'frontend',
            route: '/qoot-and-root',
            title_en: 'Qoot and Root',
            title_ar: 'قوت والجذر',
            showByDefault: false,
            relatedWords: [
                'Household',
                'professional',
                'Bakeries',
                'Industrial',
                'Bakeries & Industrial',
                'qoot-and-root brand',
                'qoot-and-root products',
                'qoot-and-root flour',
                'qoot-and-root information',
                'qoot-and-root offerings',
                'qoot-and-root recipes',
                'qoot-and-root baking',
                'qoot-and-root cooking',
                'qoot-and-root culinary',
            ],
        },
        {
            id: '14',
            type: 'frontend',
            route: '/careers',
            title_en: 'Careers',
            title_ar: 'وظائف',
            showByDefault: false,
            relatedWords: [
                'job opportunities',
                'employment',
                'vacancies',
                'work',
                'profession',
                'career growth',
                'job openings',
                'employment benefits',
                'work environment,program to war gya',
            ],
        },
        {
            id: '15',
            type: 'frontend',
            route: '/privacy',
            title_en: 'User Privacy Rights',
            title_ar: 'حقوق خصوصية المستخدم',
            showByDefault: false,
            relatedWords: [
                'privacy',
                'rights',
                'data protection',
                'user consent',
                'confidentiality',
                'personal information',
                'data security',
                'data confidentiality',
                'privacy regulations',
            ],
        },
        {
            id: '16',
            type: 'frontend',
            route: '/privacy',
            title_en: 'Cookie Policy',
            title_ar: 'سياسة ملفات الارتباط',
            showByDefault: false,
            relatedWords: [
                'cookies',
                'website tracking',
                'data collection',
                'cookie usage',
                'consent',
                'cookie consent',
                'browser data',
                'tracking technologies',
                'cookie settings',
            ],
        },
        {
            id: '17',
            type: 'frontend',
            route: '/privacy',
            title_en: 'Privacy Policy',
            title_ar: 'سياسة الخصوصية',
            showByDefault: false,
            relatedWords: [
                'data protection policy',
                'privacy practices',
                'confidentiality agreement',
                'information security',
                'privacy regulations',
                'data privacy',
                'online privacy',
                'privacy statement',
                'data handling',
            ],
        },
        {
            id: '18',
            type: 'frontend',
            route: '/',
            title_en: 'Customer Portal',
            title_ar: 'بوابة العملاء',
            showByDefault: false,
            relatedWords: [
                'user account',
                'customer access',
                'portal',
                'online services',
                'client interaction',
                'customer support',
                'user dashboard',
                'customer experience',
                'account management',
            ],
        },
        {
            id: '19',
            type: 'frontend',
            route: '/contact',
            title_en: 'Contact Us',
            title_ar: 'اتصل بنا',
            showByDefault: false,
            relatedWords: [
                'get in touch',
                'reach out',
                'contact details',
                'message',
                'communication',
                'contact form',
                'support team',
                'customer service',
                'business inquiry',
            ],
        },
        {
            id: '20',
            type: 'frontend',
            route: '/blogs',
            title_en: 'Blogs',
            title_ar: 'المدونات',
            showByDefault: false,
            relatedWords: ['blogs'],
        },
    ]
    const [isOpenModel, setIsOpenModel] = useState(false)
    const onCloseModal = () => {
        setSearchValue(searchArray)
        setIsOpenModel(false)
    }
    const isLoginRoute = window.location.href.includes('/login')
    const [searchValue, setSearchValue] = useState<any>(searchArray)

    const viewdata = async (item: any) => {
        const currentHash = window.location.hash
        const currentPath = currentHash.substring(2)
        if (currentPath == 'productdetail') {
            await history.push('/')
            await history.push('/productdetail', {
                item,
            })
        } else {
            history.push('/productdetail', {
                item,
            })
        }

        localStorage.setItem('productData', JSON.stringify(item))
    }
    const searchFunction = async (userText: any) => {
        const searchResults: {
            id: string
            route: string
            title_en: string
            title_ar: string
            type: string
            showByDefault: boolean
            relatedWords: string[]
        }[] = []
        for (let i = 0; i < searchArray.length; i++) {
            const currentObject: any = searchArray[i]
            const title =
                currentLanguage === 'en'
                    ? searchArray[i].title_en
                    : searchArray[i].title_ar
            if (title.toLowerCase().includes(userText.toLowerCase())) {
                searchResults.push(currentObject)
            } else {
                for (let j = 0; j < currentObject.relatedWords.length; j++) {
                    if (
                        currentObject.relatedWords[j]
                            .toLowerCase()
                            .includes(userText.toLowerCase())
                    ) {
                        searchResults.push(currentObject)
                        break
                    }
                }
            }
        }
        setSearchValue(searchResults)
        function isEmptyOrSpaces(str: string) {
            return str === null || str.match(/^ *$/) !== null
        }
        if (!isEmptyOrSpaces(userText)) {
            let data = JSON.stringify({
                search: userText,
            })

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/product/getsearch`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: data,
            }

            await axios
                .request(config)
                .then(async (response) => {
                    const data_ = response.data?.data?.products
                    setProductITems(data_)
                    const newArrayToBeAdd: {
                        id: string
                        route: string
                        title_en: string
                        title_ar: string
                        type: string
                        showByDefault: boolean
                        relatedWords: string[]
                    }[] = []
                    await data_?.map((rr: any) => {
                        newArrayToBeAdd.push({
                            id: rr._id,
                            type: 'Product',
                            route: `/productdetail?id=${rr._id}`,
                            title_en: rr.name_en,
                            title_ar: rr.name_ar,
                            showByDefault: false,
                            relatedWords: [rr.name_en],
                        })
                    })

                    const data_2 = response.data?.data?.blogs_
                    // setBlogsItems(data_2)

                    await data_2?.map((rr: any) => {
                        newArrayToBeAdd.push({
                            id: rr._id,
                            type: 'Blog',
                            route: `/blog-detail?id=${rr._id}`,
                            title_en: rr.title_en,
                            title_ar: rr.title_ar,
                            showByDefault: false,
                            relatedWords: [rr.title_en],
                        })
                    })

                    setSearchValue([...newArrayToBeAdd, ...searchResults])

                    //a
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    /*
  @param : fn => the function to convert
  @param : time => the time delay for debounce
*/

    function throttle(fn: any, delay: any) {
        let timer: any = null
        return (...args: any) => {
            if (!timer) {
                fn(...args)
                timer = setTimeout(() => {
                    timer = null
                }, delay)
            }
        }
    }

    const getNameFromHash = () => {
        const hash = window.location.hash
        if (!hash) {
            return null
        }
        // con sae confilats hae
        const validPaths = [
            '/',
            '/about',
            '/flourbrands',
            '/animalfeeds',
            '/careers',
            '/blogs',
            '/contact',
        ]

        const hashWithoutSlash = hash.substring(2)
        if (hashWithoutSlash === '') {
            return '/'
        } else {
            const hashParts = hashWithoutSlash.split('/')
            const extractedPath = `/${hashParts[0]}`
            if (validPaths.includes(extractedPath)) {
                return extractedPath
            } else {
                return null
            }
        }
    }

    const getLogo = async () => {
        try {
            const response = await axios.get(`${baseUrl}/gernalSetting/getLogo`)
            setgetLogoData(response.data?.data?.companyLogo?.[0]?.logo)
        } catch (error: any) {
            console.error(error)
        }
    }

    useEffect(() => {
        const getname_ = getNameFromHash()
        setgetnameState(getname_)
        getLogo()
    }, [])

    return (
        <>
            {/* <div className="model-main-wrapper"> */}
            <Modal open={isOpenModel} onClose={onCloseModal} center>
                <div className="header_search _ele">
                    <form id="searchFrom">
                        <div className="  search_wrap-custom transit-all">
                            <div className="search_input-custom w-100 ">
                                <input
                                    type="text"
                                    name="query"
                                    className={`pr-5 w-100 ${
                                        currentLanguage === 'en'
                                            ? ''
                                            : 'search-write-direction'
                                    } `}
                                    placeholder={t('lookingFor')}
                                    onChange={(e) => {
                                        throttle(
                                            searchFunction(e.target.value),
                                            500
                                        )
                                    }}
                                />
                            </div>
                            <div className="rounded_button f a-c j-c pointer search_btn_ar">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 21.0002L16.657 16.6572M16.657 16.6572C17.3998 15.9143 17.9891 15.0324 18.3912 14.0618C18.7932 13.0911 19.0002 12.0508 19.0002 11.0002C19.0002 9.9496 18.7932 8.90929 18.3912 7.93866C17.9891 6.96803 17.3998 6.08609 16.657 5.34321C15.9141 4.60032 15.0321 4.01103 14.0615 3.60898C13.0909 3.20693 12.0506 3 11 3C9.94936 3 8.90905 3.20693 7.93842 3.60898C6.96779 4.01103 6.08585 4.60032 5.34296 5.34321C3.84263 6.84354 2.99976 8.87842 2.99976 11.0002C2.99976 13.122 3.84263 15.1569 5.34296 16.6572C6.84329 18.1575 8.87818 19.0004 11 19.0004C13.1217 19.0004 15.1566 18.1575 16.657 16.6572Z"
                                        stroke="currentcolor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
                <div
                // className="container-custom"
                // data-behaviour="search-on-list"
                >
                    {/* <span className="counter" data-search-on-list="counter" /> */}
                    <div className="list-wrap" style={{ marginTop: '22px' }}>
                        <ul className="list" data-search-on-list="list">
                            {searchValue.map((c: any, index: any) => {
                                return (
                                    <li
                                        key={index}
                                        className="list-item"
                                        data-search-on-list="list-item"
                                        style={
                                            c.type === 'frontend'
                                                ? {
                                                      padding: '12px 4px',
                                                      textAlign:
                                                          currentLanguage ==
                                                          'en'
                                                              ? 'left'
                                                              : 'right',
                                                  }
                                                : {
                                                      padding: 'auto 4px',
                                                      textAlign:
                                                          currentLanguage ==
                                                          'en'
                                                              ? 'left'
                                                              : 'right',
                                                  }
                                        }
                                    >
                                        <a
                                            className="list-item-link"
                                            onClick={() => {
                                                setSearchValue(searchArray)
                                                setIsOpenModel(false)
                                                history.push(c.route)
                                            }}
                                        >
                                            {currentLanguage === 'en'
                                                ? c.title_en
                                                : c.title_ar}
                                            <span
                                                className="item-list-subtext "
                                                style={{
                                                    display:
                                                        c.type === 'frontend'
                                                            ? 'none'
                                                            : '',
                                                    marginTop:
                                                        c.type !== 'frontend'
                                                            ? '2px'
                                                            : '',
                                                }}
                                            >
                                                {' '}
                                                {c.type}
                                            </span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Modal>
            {/* </div> */}

            {showHeader ? (
                <header
                    className={`transit-all ${'x_padding_2'}`}
                    lang={localStorage.getItem('lang') || ''}
                    style={{ visibility: 'hidden' }}
                >
                    <div className="header_sides f a-c s-b light_bg transit-all">
                        <div className="header_side f a-c">
                            <a
                                href="/"
                                className="main_logo transit-all"
                                aria-label="Homepage"
                            >
                                {getLogoData ? (
                                    <img src={`${getLogoData}`} />
                                ) : (
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
                                )}
                            </a>

                            <nav>
                                <ul className="f  a-c">
                                    <li className="_ele">
                                        {getnameState === '/' ? (
                                            <>
                                                <a
                                                    className={getLinkClassName(
                                                        '/'
                                                    )}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    aria-label="Home"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('homelabel')}
                                                    </strong>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Link
                                                    to="/"
                                                    className={getLinkClassName(
                                                        '/'
                                                    )}
                                                    aria-label="Home"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('homelabel')}
                                                    </strong>
                                                </Link>
                                            </>
                                        )}
                                    </li>
                                    <li className="_ele">
                                        {getnameState === '/about' ? (
                                            <>
                                                <a
                                                    className={getLinkClassName(
                                                        '/about'
                                                    )}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    aria-label="About"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('aboutlabel')}
                                                    </strong>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Link
                                                    to="/about"
                                                    className={getLinkClassName(
                                                        '/about'
                                                    )}
                                                    aria-label="About"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('aboutlabel')}
                                                    </strong>
                                                </Link>
                                            </>
                                        )}
                                    </li>
                                    <li className="_ele">
                                        {getnameState === '/flourbrands' ? (
                                            <>
                                                <a
                                                    className={getLinkClassName(
                                                        '/flourbrands'
                                                    )}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    aria-label="Flour Brands"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('flourbrandslabel')}
                                                    </strong>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Link
                                                    to="/flourbrands"
                                                    className={getLinkClassName(
                                                        '/flourbrands'
                                                    )}
                                                    aria-label="Flour Brands"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('flourbrandslabel')}
                                                    </strong>
                                                </Link>
                                            </>
                                        )}
                                    </li>
                                    <li className="_ele">
                                        {getnameState === '/animalfeeds' ? (
                                            <>
                                                <a
                                                    className={getLinkClassName(
                                                        '/animalfeeds'
                                                    )}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    aria-label="Animal Feeds Brand"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t(
                                                            'animalfeedsbrandlabel'
                                                        )}
                                                    </strong>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Link
                                                    to="/animalfeeds"
                                                    className={getLinkClassName(
                                                        '/animalfeeds'
                                                    )}
                                                    aria-label="Animal Feed Brands"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t(
                                                            'animalfeedsbrandlabel'
                                                        )}
                                                    </strong>
                                                </Link>
                                            </>
                                        )}
                                    </li>
                                    <li className="_ele">
                                        {getnameState === '/careers' ? (
                                            <>
                                                <a
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    className={getLinkClassName(
                                                        '/careers'
                                                    )}
                                                    aria-label="Careers"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('careerlabel')}
                                                    </strong>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Link
                                                    to="/careers"
                                                    className={getLinkClassName(
                                                        '/careers'
                                                    )}
                                                    aria-label="Careers"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('careerlabel')}
                                                    </strong>
                                                </Link>
                                            </>
                                        )}
                                    </li>

                                    <li className="_ele">
                                        {getnameState === '/blogs' ? (
                                            <>
                                                <a
                                                    className={getLinkClassName(
                                                        '/blogs'
                                                    )}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    aria-label="Animal Feeds Brand"
                                                    onClick={() =>
                                                        reloadPage('/#/blogs')
                                                    }
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('bloglabel')}
                                                    </strong>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {' '}
                                                <Link
                                                    to="/blogs"
                                                    className={getLinkClassName(
                                                        '/blogs'
                                                    )}
                                                    aria-label="Careers"
                                                >
                                                    <strong className="_txt words custom-anim">
                                                        {t('bloglabel')}
                                                    </strong>
                                                </Link>
                                            </>
                                        )}
                                    </li>
                                    {localStorage.getItem('lang') === 'en' && (
                                        <li className="_ele ">
                                            <a
                                                href="https://ipo.modernmills.com.sa/"
                                                target="_blank"
                                                className="ipo_button outlined interactive_label f a-c j-c _ele "
                                                aria-label="IPO"
                                            >
                                                <strong className="_txt words  custom-ipo-title">
                                                    {t('ipolabel')}
                                                </strong>
                                            </a>
                                        </li>
                                    )}
                                    {localStorage.getItem('lang') === 'ar' && (
                                        <li className="_ele ipo-gap">
                                            <a
                                                href="https://ipo.modernmills.com.sa/home-disclaimer-ar"
                                                target="_blank"
                                                className="ipo_button outlined interactive_label f a-c j-c _ele "
                                                aria-label="IPO"
                                            >
                                                <strong className="_txt words  custom-ipo-title">
                                                    {t('ipolabel')}
                                                </strong>
                                            </a>
                                        </li>
                                    )}
                                    {isAfterOrEqualTo10AMKSA() && (
                                        <li className="_ele">
                                            <a
                                                href={
                                                    localStorage.getItem(
                                                        'lang'
                                                    ) === 'en'
                                                        ? 'https://ir.modernmills.com.sa/en/investor-relations/'
                                                        : 'https://ir.modernmills.com.sa/ar/investor-relations/'
                                                }
                                                target="_blank"
                                                className={getLinkClassName(
                                                    '/blogss'
                                                )}
                                                aria-label="Careers"
                                            >
                                                <strong className="_txt words custom-anim">
                                                    {t('investorRelationlabel')}
                                                </strong>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>

                        <div className="header_side f a-c">
                            <a
                                href="https://customer-portal-prod.modernmills.com.sa/auth/login"
                                className="_underline f a-c j-c _ele header-text-width"
                                target="_blank"
                                aria-label="Customer Portal"
                            >
                                <strong> {t('customerportallabel')}</strong>
                            </a>

                            <div className="header_cta f a-c">
                                {getnameState === '/contact' ? (
                                    <>
                                        <a
                                            aria-label="Contact"
                                            className={` primary_bg site_button interactive_label f a-c j-c _ele  header-text-width`}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {' '}
                                            <strong className="_txt words">
                                                {t('contacts')}
                                            </strong>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        {' '}
                                        <Link
                                            to="/contact"
                                            className="primary_bg site_button interactive_label f a-c j-c _ele header-text-width"
                                            aria-label="Contact"
                                        >
                                            <strong className="_txt words">
                                                {t('contacts')}
                                            </strong>
                                        </Link>
                                    </>
                                )}

                                <div className="header_search _ele">
                                    <form action="#" id="searchFrom">
                                        <div className="search_wrap transit-all">
                                            <div className="search_input">
                                                <input
                                                    type="text"
                                                    name="query"
                                                    placeholder={t(
                                                        'lookingFor'
                                                    )}
                                                    value=""
                                                    onChange={() => {
                                                        setIsOpenModel(true)
                                                    }}
                                                />
                                            </div>
                                            <div className="rounded_button f a-c j-c pointer search_btn">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() =>
                                                        setIsOpenModel(true)
                                                    }
                                                >
                                                    <path
                                                        d="M21 21.0002L16.657 16.6572M16.657 16.6572C17.3998 15.9143 17.9891 15.0324 18.3912 14.0618C18.7932 13.0911 19.0002 12.0508 19.0002 11.0002C19.0002 9.9496 18.7932 8.90929 18.3912 7.93866C17.9891 6.96803 17.3998 6.08609 16.657 5.34321C15.9141 4.60032 15.0321 4.01103 14.0615 3.60898C13.0909 3.20693 12.0506 3 11 3C9.94936 3 8.90905 3.20693 7.93842 3.60898C6.96779 4.01103 6.08585 4.60032 5.34296 5.34321C3.84263 6.84354 2.99976 8.87842 2.99976 11.0002C2.99976 13.122 3.84263 15.1569 5.34296 16.6572C6.84329 18.1575 8.87818 19.0004 11 19.0004C13.1217 19.0004 15.1566 18.1575 16.657 16.6572Z"
                                                        stroke="currentcolor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div
                                    onClick={() => {
                                        // handleAction(ECounterEventType.LANG)
                                        const lang =
                                            currentLanguage === 'en'
                                                ? 'ar'
                                                : 'en'
                                        localStorage.setItem('lang', lang)
                                        i18n.changeLanguage(
                                            currentLanguage === 'en'
                                                ? 'ar'
                                                : 'en'
                                        )
                                        window.location.reload()
                                        //
                                    }}
                                >
                                    <a
                                        // href="index_ar.html"
                                        className="rounded_button outlined interactive_label f a-c j-c _ele language"
                                        aria-label="Language"
                                    >
                                        <strong className="_txt words">
                                            {t('lang')}
                                        </strong>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded_button burger_button secondary_bg pointer f f-c a-c j-c"
                            // style={{
                            //     right: `${value === 'ar' ? '95%' : ''}`,
                            //     left: `${value === 'en' ? '95%' : ''}`,
                            // }}
                        >
                            <i></i>
                            <i></i>
                            <i></i>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.3438 10.4336C11.6602 10.7852 11.6602 11.3125 11.3438 11.6289C10.9922 11.9805 10.4648 11.9805 10.1484 11.6289L6 7.44531L1.81641 11.6289C1.46484 11.9805 0.9375 11.9805 0.621094 11.6289C0.269531 11.3125 0.269531 10.7852 0.621094 10.4336L4.80469 6.25L0.621094 2.06641C0.269531 1.71484 0.269531 1.1875 0.621094 0.871094C0.9375 0.519531 1.46484 0.519531 1.78125 0.871094L6 5.08984L10.1836 0.90625C10.5 0.554687 11.0273 0.554687 11.3438 0.90625C11.6953 1.22266 11.6953 1.75 11.3438 2.10156L7.16016 6.25L11.3438 10.4336Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div
                            className="burger_wrap full_page force f a-c j-c"
                            style={{ visibility: 'hidden' }}
                        >
                            <i className="full_bg primary_bg"></i>

                            <div className="ft_vector">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="967"
                                    height="783"
                                    viewBox="0 0 967 783"
                                >
                                    <path
                                        fill="#FAF3E6"
                                        d="m-115.169 1234.71 112.71-195.22c61.57 23.66 134.958 25.93 223.301 21.05a196.208 196.208 0 0 0 92.297-28.83 196.162 196.162 0 0 0 67.325-69.399l99.879-172.996 169.168-16.419-190.769 330.424 68.134 39.34 439.391-761.054-68-39.26-48.787 84.502-169.168 16.419L891.671 77.181l-68.267-39.414-51.629 89.426-310.718 109.466 246.548-427.034-68.134-39.337-246.548 427.034L332.596-126.9l51.399-89.026-68.134-39.337-211.36 366.086L34.137-43.891l48.787-84.502-68.267-39.413-439.392 761.048 68.134 39.338 190.769-330.423 70.365 154.714-99.879 172.996a196.223 196.223 0 0 0-5.256 187.35c39.94 78.95 78.201 141.14 129.876 182.863l-112.71 195.22 68.267 39.41ZM301.02 513.852c58.377 21.816 132.102 25.346 237.088 19.6l-104.489 180.98c-113.121 9.388-187.212 10.793-243.849-7.89l111.25-192.69Zm284.338-62.24c-112.967 9.122-188.276 10.178-244.002-7.624l59.005-102.201L712.128 232.04l-126.77 219.572Zm-55.716 253.852 103.106-178.585c33.424-2.882 168.938-16.02 168.938-16.02L698.503 689.577l-168.861 15.887Zm-492.15 264.83 112.172-194.287c58.889 22.466 132.573 26.682 236.243 21.064l-72.911 126.287a117.704 117.704 0 0 1-96.761 59.111c-82.927 4.11-137.594.759-178.743-12.175Zm83.837-302.556C77.496 628.413 41.667 563.547-6.763 460.887l104.489-180.98c46.851 93.409 86.638 155.415 135.518 195.524L121.329 667.738ZM272.053-22.038l60.84 324.872-59.313 102.733c-42.615-38.975-79.488-104.799-127.938-207.116L272.053-22.037Zm-389.558 240.492L-14.323 39.736S42.19 163.74 56.272 194.05L-47.14 373.168l-70.364-154.714Zm-13.051 563.795a117.703 117.703 0 0 1 3.169-112.436l73.45-127.219C-7.633 634.8 32.86 696.504 82.427 736.655L-29.745 930.942c-32.672-29.154-62.906-74.821-100.811-148.693Z"
                                        opacity=".02"
                                    />
                                </svg>
                            </div>

                            <div className="burger_menu f f-c a-c">
                                <ul className="f f-c">
                                    <li className="_el">
                                        <Link
                                            to="/"
                                            className="interactive_label"
                                            aria-label="Home"
                                            // onClick={() => reloadPage('/#')}
                                        >
                                            <strong className="_txt words">
                                                {t('homelabel')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <Link
                                            to="/about"
                                            className="interactive_label"
                                            aria-label="About"
                                            // onClick={() =>
                                            //     reloadPage('/#/about')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('aboutlabel')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <Link
                                            to="/flourbrands"
                                            className="interactive_label"
                                            aria-label="Flour Brands"
                                            // onClick={() =>
                                            //     reloadPage('/#/flourbrands')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('flourbrandslabel')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <Link
                                            to="/animalfeeds"
                                            className="interactive_label"
                                            aria-label="Animal Feed Brands"
                                            // onClick={() =>
                                            //     reloadPage('/#/animalfeeds')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('animalfeedsbrandlabel')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <Link
                                            to="/careers"
                                            className="interactive_label"
                                            aria-label="Careers"
                                            // onClick={() =>
                                            //     reloadPage('/#/careers')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('careerlabel')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <Link
                                            to="/contact"
                                            className="interactive_label"
                                            aria-label="Contact us"
                                            // onClick={() =>
                                            //     reloadPage('/#/contact')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('uslabelcontact')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <Link
                                            to="/blogs"
                                            className="interactive_label"
                                            aria-label="Contact us"
                                            // onClick={() =>
                                            //     reloadPage('/#/blogs')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('bloglabel')}
                                            </strong>
                                        </Link>
                                    </li>
                                    <li className="_el">
                                        <a
                                            href={
                                                localStorage.getItem('lang') ===
                                                'en'
                                                    ? 'https://ipo.modernmills.com.sa/'
                                                    : 'https://ipo.modernmills.com.sa/home-disclaimer-ar'
                                            }
                                            target="_blank"
                                            className="interactive_label"
                                            aria-label="Contact us"
                                            // onClick={() =>
                                            //     reloadPage('/#/blogs')
                                            // }
                                        >
                                            <strong className="_txt words">
                                                {t('ipolabel')}
                                            </strong>
                                        </a>
                                    </li>
                                    {isAfterOrEqualTo10AMKSA() && (
                                        <li className="_el">
                                            <a
                                                href={
                                                    localStorage.getItem(
                                                        'lang'
                                                    ) === 'en'
                                                        ? 'https://ir.modernmills.com.sa/en/investor-relations/'
                                                        : 'https://ir.modernmills.com.sa/ar/investor-relations/'
                                                }
                                                className="interactive_label"
                                                aria-label="Contact us"
                                                // onClick={() =>
                                                //     reloadPage('/#/blogs')
                                                // }
                                            >
                                                <strong className="_txt words">
                                                    {t('investorRelationlabel')}
                                                </strong>
                                            </a>
                                        </li>
                                    )}
                                </ul>

                                <div className="social f  ">
                                    <HeaderLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            ) : (
                ''
            )}
        </>
    )
}

export default Header
