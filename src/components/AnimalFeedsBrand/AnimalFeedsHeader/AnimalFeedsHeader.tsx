import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AnimalFeedsHeader = ({
    animalFeedProducts_ar,
    animalFeedProducts_en,
    productLoading,
}: any) => {
    const [activeId, setActiveId] = useState('')
    const { t, i18n }: any = useTranslation()

    const lang = localStorage.getItem('lang')

    const handleScrollTo = (category: any) => {
        const element = document.getElementById(category)

        if (element) {
            const rect = element.getBoundingClientRect()
            const headerHeight = 20
            const offset = rect.top + window.scrollY - headerHeight

            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            })

            setActiveId(category)
        }
    }

    return (
        <div className="section_head f a-c s-b _eleWrap">
            <h2 className="_mask">{t('ourproductlabel')}</h2>

            <div className="head_side f a-c">
                <div className="filters">
                    <ul className="f">
                        {!productLoading ? (
                            Object.keys(
                                lang === 'en'
                                    ? animalFeedProducts_en
                                    : animalFeedProducts_ar
                            ).map((category: any, index: any) => (
                                <li
                                    className="menu transit-all f a-c j-c scrollTo  "
                                    key={index + 1}
                                    onClick={() => handleScrollTo(category)}
                                >
                                    <strong>{category}</strong>
                                </li>
                            ))
                        ) : (
                            <li
                                className="menu transit-all f a-c j-c scrollTo"
                                // onClick={() => handleScrollTo(category)}
                            >
                                <strong>{''}</strong>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AnimalFeedsHeader
