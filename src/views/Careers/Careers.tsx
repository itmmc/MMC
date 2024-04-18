import AboutValues from '@components/AboutComponents/AboutValues'
import CareersBanner from '@components/Careers/CareersBanner'
import CareersForm from '@components/Careers/CareersForm'
import CareersHero from '@components/Careers/CareersHero/CareersHero'
import LastSection from '@components/LastSection/LastSection'
import React, { useEffect } from 'react'
import { onWindowLoad, onFontsLoad, onWindowResize } from '../../script'
import Wrapper from '@components/Wrapper'

const Careers = () => {
    useEffect(() => {
        window.scroll(0, 0)
        onWindowLoad()
        onFontsLoad()
        onWindowResize()
    }, [])

    return (
        <>
            <Wrapper>
                <section className="rounded_corners">
                    <CareersHero />
                    <AboutValues />
                    <CareersBanner />
                    <CareersForm />

                    <LastSection />
                </section>
            </Wrapper>
        </>
    )
}

export default Careers
