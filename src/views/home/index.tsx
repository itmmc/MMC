import Video from '@components/Video/Video'
import Intro from '@components/IntroSection/Intro'
import Banner from '@components/Banner/Banner'
import Certificate from '@components/Certificate/Certificate'
import Safety from '@components/Safety/Safety'
import ProductsBanner from '@components/ProductsBanner/ProductsBanner'
import FormSection from '@components/FormSection/FormSection'
import LastSection from '@components/LastSection/LastSection'
import { isScriptLoaded } from '../../script'
import {
    onFontsLoad,
    pageScroll,
    onWindowLoad,
    onWindowResize,
} from '../../script'
import { useEffect, useState } from 'react'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t }: any = useTranslation()

    useEffect(() => {
        onWindowLoad()
        onWindowResize()
        onFontsLoad()
        function handleScroll() {
            pageScroll()
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Wrapper>
                <section className="rounded_corners">
                    <Video />
                    <Intro />
                </section>
                <Banner />{' '}
                <section className="rounded_corners pull_up high_index">
                    <Certificate />
                    <Safety title={t('safetyMHHome')} showLeaenMore={true} />
                    <ProductsBanner />
                    <FormSection />
                    <LastSection />
                </section>
            </Wrapper>
        </>
    )
}

export default Home
