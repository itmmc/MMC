import AboutBoard from '@components/AboutComponents/AboutBoard'
import AboutCEOMessages from '@components/AboutComponents/AboutCEOMessages'
import AboutDivineBanner from '@components/AboutComponents/AboutDivineBanner'
import AboutHero from '@components/AboutComponents/AboutHero'
import AboutInSights from '@components/AboutComponents/AboutInSights'
import AboutJourney from '@components/AboutComponents/AboutJourney'
import AboutLocation from '@components/AboutComponents/AboutLocation'
import AboutMapSection from '@components/AboutComponents/AboutMapSection'
import AboutMission from '@components/AboutComponents/AboutMission'
import AboutValues from '@components/AboutComponents/AboutValues'
import Certificate from '@components/Certificate/Certificate'
import LastSection from '@components/LastSection/LastSection'
import Safety from '@components/Safety/Safety'
import React, { useEffect, useState } from 'react'
import {
    onWindowLoad,
    onFontsLoad,
    onWindowResize,
    ceoMessage,
    journey,
} from '../../script'
import Wrapper from '@components/Wrapper'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const About = () => {
    const { t }: any = useTranslation()
    const lang = localStorage.getItem('lang')
    const location = useLocation()
    const [chairmanMessage, setChairManMessage] = useState(false)
    const [chairmanMessage_ar, setChairManMessage_ar] = useState(false)
    const [showCeoMessage, setShowCeoMessage] = useState(false)
    const [showCeoMessage_ar, setShowCeoMessage_ar] = useState(false)

    useEffect(() => {
        onWindowLoad()
        onFontsLoad()
        // onWindowResize()
        window.addEventListener('resize', onWindowResize)
    }, [])

    useEffect(() => {
        // ceoMessage()
        // journey()
    }, [
        lang,
        chairmanMessage,
        chairmanMessage_ar,
        showCeoMessage,
        showCeoMessage_ar,
    ])

    useEffect(() => {
        if (location.hash === '#TheMMCJourney') {
            const programElement = document.getElementById('TheMMCJourney')
            if (programElement) {
                programElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }
        } else if (location.hash === '#OurValues') {
            const programElement = document.getElementById('OurValues')
            if (programElement) {
                programElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }
        } else if (
            location.hash === '#OurVision' ||
            location.hash === '#OurMission'
        ) {
            const programElement = document.getElementById('OurVision')
            if (programElement) {
                programElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }
        } else if (location.hash === '#Insights') {
            const programElement = document.getElementById('Insights')
            if (programElement) {
                programElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }
        } else if (location.hash === '#BoardOfDirectors') {
            const programElement = document.getElementById('BoardOfDirectors')
            if (programElement) {
                programElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }
        } else if (location.hash === '#OurLocation') {
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
                    <AboutHero />
                    <AboutCEOMessages
                        chairmanMessage={chairmanMessage}
                        setChairManMessage={setChairManMessage}
                        chairmanMessage_ar={chairmanMessage_ar}
                        setChairManMessage_ar={setChairManMessage_ar}
                        showCeoMessage={showCeoMessage}
                        setShowCeoMessage={setShowCeoMessage}
                        showCeoMessage_ar={showCeoMessage_ar}
                        setShowCeoMessage_ar={setShowCeoMessage_ar}
                    />
                    <div id="TheMMCJourney">
                        {' '}
                        <AboutJourney />
                    </div>
                    <div id="OurVision">
                        {' '}
                        <AboutMission />
                    </div>
                    <div id="OurValues">
                        {' '}
                        <AboutValues />
                    </div>
                </section>
                <section
                    className="full_screen primary_bg pull_up auto"
                    id="Insights"
                >
                    <AboutInSights />
                </section>

                <section className="rounded_corners pull_up high_index">
                    {/* <AboutSideBannner /> */}
                    <Safety title={t('safetyMHAbout')} />
                    <div id="BoardOfDirectors">
                        <AboutBoard />
                    </div>
                    <Certificate />
                    <AboutDivineBanner />

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

export default About
