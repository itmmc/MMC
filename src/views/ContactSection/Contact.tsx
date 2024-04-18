import AboutLocation from '@components/AboutComponents/AboutLocation'
import AboutMapSection from '@components/AboutComponents/AboutMapSection'
import ContactBanner from '@components/Contact/ContactBanner'
import FormSection from '@components/FormSection/FormSection'
import LastSection from '@components/LastSection/LastSection'
import React, { useEffect } from 'react'
import { onWindowLoad, onWindowResize, onFontsLoad } from '../../script'
import Wrapper from '@components/Wrapper'
const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0)
        onWindowLoad()
        onFontsLoad()
        onWindowResize()
    }, [])

    useEffect(() => {
        if (location.hash === '#OurLocation') {
            const programElement = document.getElementById('OurLocation')
            if (programElement) {
                programElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }
        }
    }, [location])
    return (
        <>
            <Wrapper>
                <section className="rounded_corners">
                    <ContactBanner />
                    <FormSection />
                    <div className="lst_section">
                        <div id="OurLocation">
                            {' '}
                            <AboutLocation />
                        </div>
                        <AboutMapSection />
                        <LastSection />
                    </div>
                </section>
            </Wrapper>
        </>
    )
}

export default Contact
