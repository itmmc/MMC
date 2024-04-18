import MainHero from '@components/FlourBrandsCompnents/MainHero/MainHero'
import IntroOurBrands from '@components/FlourBrandsCompnents/OurBrands/IntroOurBrands/IntroOurBrands'
import OurBrandsMainCard from '@components/FlourBrandsCompnents/OurBrands/OurBrandsMainCard'
import LastSection from '@components/LastSection/LastSection'
import React, { useEffect } from 'react'
import {
    onWindowLoad,
    onWindowResize,
    pageScroll,
    onFontsLoad,
} from '../../script'
import Wrapper from '@components/Wrapper'

const FlourBrands = () => {
    useEffect(() => {
        onWindowLoad()
        onFontsLoad()
        onWindowResize()
    }, [])
    useEffect(() => {
        function handleScroll() {
            pageScroll()
        }

        window.addEventListener('scroll', handleScroll)

        // return () => {
        //     window.removeEventListener('scroll', handleScroll)
        // }
    }, [])

    return (
        <>
            <Wrapper>
                {' '}
                <section className="rounded_corners">
                    <MainHero />

                    <IntroOurBrands />

                    <OurBrandsMainCard />
                    <LastSection />
                </section>
            </Wrapper>
        </>
    )
}

export default FlourBrands
