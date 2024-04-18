import Footer from '@components/Footer/Footer'
import LastSection from '@components/LastSection/LastSection'
import Header from '@components/Navbar/header'
import ProductCardPages from '@components/ProductCardPages/ProductCardPages'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const productData = [
    {
        id: 1,
        cat: 'household',
        brand: 'qamhati',
        imageSrc: 'images/flour-1.webp',
    },
    {
        id: 2,
        cat: 'household',
        brand: 'qamhati',
        imageSrc: 'images/flour-2.webp',
    },
    {
        id: 3,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-3.webp',
    },

    {
        id: 4,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-4.webp',
    },

    {
        id: 5,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-5.webp',
    },

    {
        id: 6,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-6.webp',
    },

    {
        id: 7,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-7.webp',
    },

    {
        id: 8,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-8.webp',
    },

    {
        id: 9,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-9.webp',
    },
    {
        id: 10,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-10.webp',
    },

    {
        id: 11,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-10.webp',
    },

    {
        id: 11,
        cat: 'professional',
        brand: 'modern-mills',
        imageSrc: 'images/flour-11.webp',
    },
    {
        id: 12,
        cat: 'professional',
        brand: 'modern-mills',
        imageSrc: 'images/flour-12.webp',
    },

    {
        id: 13,
        cat: 'professional',
        brand: 'modern-mills',
        imageSrc: 'images/flour-13.webp',
    },

    {
        id: 14,
        cat: 'professional',
        brand: 'modern-mills',
        imageSrc: 'images/flour-14.webp',
    },
    {
        id: 15,
        cat: 'professional',
        brand: 'modern-mills',
        imageSrc: 'images/flour-15.webp',
    },

    {
        id: 16,
        cat: 'bakeries',
        brand: 'modern-mills',
        imageSrc: 'images/flour-16.webp',
    },

    {
        id: 17,
        cat: 'bakeries',
        brand: 'modern-mills',
        imageSrc: 'images/flour-17.webp',
    },
    {
        id: 18,
        cat: 'bakeries',
        brand: 'modern-mills',
        imageSrc: 'images/flour-18.webp',
    },

    {
        id: 19,
        cat: 'bakeries',
        brand: 'modern-mills',
        imageSrc: 'images/flour-19.webp',
    },
    {
        id: 1,
        cat: 'household',
        brand: 'qamhati',
        imageSrc: 'images/flour-1.webp',
    },
    {
        id: 2,
        cat: 'household',
        brand: 'qamhati',
        imageSrc: 'images/flour-2.webp',
    },
    {
        id: 3,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-3.webp',
    },

    {
        id: 1,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-1.webp',
    },
    {
        id: 2,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-2.webp',
    },
    {
        id: 3,
        cat: 'household',
        brand: 'modern-mills',
        imageSrc: 'images/flour-3.webp',
    },

    {
        id: 4,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-4.webp',
    },

    {
        id: 5,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-5.webp',
    },

    {
        id: 6,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-6.webp',
    },

    {
        id: 7,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-7.webp',
    },

    {
        id: 8,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-8.webp',
    },

    {
        id: 9,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-9.webp',
    },
    {
        id: 10,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-10.webp',
    },

    {
        id: 11,
        cat: 'household',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-10.webp',
    },

    {
        id: 11,
        cat: 'professional',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-11.webp',
    },
    {
        id: 12,
        cat: 'professional',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-12.webp',
    },

    {
        id: 13,
        cat: 'professional',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-13.webp',
    },

    {
        id: 14,
        cat: 'professional',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-14.webp',
    },
    {
        id: 15,
        cat: 'professional',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-15.webp',
    },

    {
        id: 16,
        cat: 'bakeries',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-16.webp',
    },

    {
        id: 17,
        cat: 'bakeries',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-17.webp',
    },
    {
        id: 18,
        cat: 'bakeries',
        brand: 'qoot-and-root',
        imageSrc: 'images/flour-18.webp',
    },

    {
        id: 19,
        cat: 'bakeries',
        brand: 'modern-mills',
        imageSrc: 'images/flour-19.webp',
    },
]

const ModernMills = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <section className="rounded_corners">
            <div className="inner_padding light_bg f f-c x_padding">
                <div className="section_wrap f f-c">
                    <div className="bc f a-c">
                        <Link to="/" className="_underline _eleX">
                            {t('homelabel')}
                        </Link>

                        <svg
                            className="_eleX"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 5 18"
                        >
                            <path
                                fill="currentColor"
                                d="M.128 12.912a.287.287 0 0 1-.12-.241c0-.06.02-.141.08-.201l3.638-3.96L.088 4.53a.3.3 0 0 1 .02-.442.3.3 0 0 1 .442.02L4.41 8.29c.12.12.12.301 0 .422l-3.86 4.18c-.1.142-.301.142-.422.02Z"
                            />
                        </svg>

                        <Link to="/flourbrands" className="_underline _eleX">
                            {t('flourbrandslabel')}
                        </Link>

                        <svg
                            className="_eleX"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 5 18"
                        >
                            <path
                                fill="currentColor"
                                d="M.128 12.912a.287.287 0 0 1-.12-.241c0-.06.02-.141.08-.201l3.638-3.96L.088 4.53a.3.3 0 0 1 .02-.442.3.3 0 0 1 .442.02L4.41 8.29c.12.12.12.301 0 .422l-3.86 4.18c-.1.142-.301.142-.422.02Z"
                            />
                        </svg>

                        <Link to="/modernmills" className="_underline _eleX">
                            {t('modernmillslabel')}
                        </Link>
                    </div>

                    <div className="section_head f a-c s-b _eleWrap">
                        <h2 className="_mask">{t('productslabel')}</h2>

                        <div className="head_side f a-c">
                            <div className="dropdown_set f a-c">
                                <select className="menu transit-all" id="brand">
                                    <option value="">{t('selectlabel')}</option>
                                    <option value="qamhati">
                                        {t('qamhatilabel')}
                                    </option>
                                    <option value="modern-mills" selected>
                                        {t('modernmillslabel')}
                                    </option>
                                    <option value="qoot-and-root">
                                        {t('qootandrootlabel')}
                                    </option>
                                </select>
                                <svg
                                    width="18"
                                    height="10"
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17 1L9 9L1 1"
                                        stroke="currentcolor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="filters dynamic">
                                <ul className="f">
                                    <li className="menu transit-all f a-c j-c active">
                                        <strong>{t('alllabel')}</strong>
                                    </li>
                                    <li
                                        className="menu transit-all f a-c j-c"
                                        data-id="household"
                                    >
                                        <strong>{t('householdlabel')}</strong>
                                    </li>
                                    <li
                                        className="menu transit-all f a-c j-c"
                                        data-id="professional"
                                    >
                                        <strong>
                                            {t('professionallabel')}
                                        </strong>
                                    </li>
                                    <li
                                        className="menu transit-all f a-c j-c"
                                        data-id="bakeries"
                                    >
                                        <strong>
                                            {t('bakriesandindustriallabel')}
                                        </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ProductCardPages productData={productData} />
                </div>
            </div>

            <LastSection />
        </section>
    )
}

export default ModernMills
