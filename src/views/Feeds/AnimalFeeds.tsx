import AnimalFeedsBanner from '@components/AnimalFeedsBrand/AnimalFeedsBanner/AnimalFeedsBanner'
import AnimalFeedsIntro from '@components/AnimalFeedsBrand/AnimalFeedsIntro/AnimalFeedsIntro'
import AnimalProductPage from '@components/AnimalFeedsBrand/AnimalProductPage/AnimalProductPage'
// import Header from '@components/Navbar/header'
import React, { useEffect, useState } from 'react'
// import LastSection from '@components/LastSection/LastSection'
import {
    onWindowLoad,
    onWindowResize,
    pageScroll,
    onFontsLoad,
} from '../../script'
import Wrapper from '@components/Wrapper'
import { useLocation } from 'react-router-dom'
import LastSection from '@components/LastSection/LastSection2'

const AnimalFeeds = () => {
    const location = useLocation()

    useEffect(() => {
        function handleScroll() {
            pageScroll()
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (location.hash === '#animalfeedsCat') {
            const programElement = document.getElementById('animalfeedsCat')

            if (programElement) {
                setTimeout(() => {
                    programElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    })
                }, 100) // Adjust the delay time as needed
            }
        }
    }, [location])

    useEffect(() => {
        onWindowLoad()
        onFontsLoad()
        onWindowResize()
    }, [])

    return (
        <>
            <Wrapper>
                <section className="rounded_corners">
                    <AnimalFeedsBanner />
                    <AnimalFeedsIntro />
                    <div id="animalfeedsCat">
                        <AnimalProductPage />
                    </div>

                    <LastSection />
                </section>
            </Wrapper>
        </>
    )
}

export default AnimalFeeds
