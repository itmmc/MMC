// import './assets/stylesheets/app.css'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import Flickity from 'flickity'
import 'flickity-fade'
import Gotham from './assets/fonts/Gotham-Book.woff'
import Gotham2 from './assets/fonts/Gotham-Book.woff2'
import GothamM from './assets/fonts/Gotham-Medium.woff'
import GothamM2 from './assets/fonts/Gotham-Medium.woff2'
import GOTHAMROUNDED from './assets/fonts/Gotham-Rounded-bold.otf'
import CoHeadlineL from './assets/fonts/CoHeadline-Light.woff'
import CoHeadlineL2 from './assets/fonts/CoHeadline-Light.woff2'
import CoHeadlineR from './assets/fonts/CoHeadline-Regular.woff'
import CoHeadlineR2 from './assets/fonts/CoHeadline-Regular.woff2'
import CoHeadlineB from './assets/fonts/CoHeadlineBold.otf'
// import { odometer } from 'odometer'

interface MyWindow extends Window {
    cardsResized: any
    resizedFinished: any
}

declare var window: MyWindow

export const isScriptLoaded = true

// Globals
let body: any = document.querySelector('body'),
    header = document.querySelector('header'),
    pageLang = document?.querySelector('html')?.getAttribute('lang'),
    lastWindowWidth = 0,
    // Flickity,
    headerTL: any,
    vh: any,
    lastScrollTop,
    isSafari,
    isMobile: any,
    isTouch: any,
    smoother: any

// window.addEventListener('load', onWindowLoad)
// window.addEventListener('resize', onWindowResize)

// Window Load
export function onWindowLoad() {
    body = document.querySelector('body')
    pageLang = document.querySelector('header')?.getAttribute('lang')

    gsap.config({ nullTargetWarn: false })
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(SplitText)
    gsap.registerPlugin(ScrollSmoother)
    gsap.registerPlugin(MorphSVGPlugin)
    gsap.registerPlugin(DrawSVGPlugin)

    // Flickity = require('flickity')
    // require('flickity-fade')

    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    // Check If Touch Device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        isTouch = true
        body?.classList.add('isTouch')
    }

    body?.classList.add('progress')
    var langs = pageLang ? pageLang : 'en'
    import('./assets/stylesheets/lang_' + langs + '.css')

    onWindowResize()

    loadFonts()

    pagesLoader()
}

// Window Resize
export function onWindowResize() {
    body = document.querySelector('body')

    vh = window?.innerHeight * 0.01

    if (isTouch) {
        if (window.innerWidth != lastWindowWidth) {
            run()
        }
    } else {
        run()
    }

    function run() {
        body.classList.add('progress')

        setH()
    }

    function setH() {
        document.documentElement.style.setProperty('--vh', `${vh}px`)

        clearTimeout(window?.resizedFinished)

        window.resizedFinished = setTimeout(function () {
            body.classList.remove('progress')

            if (!isTouch) {
                ScrollTrigger.refresh()
            }
        }, 250)
    }

    lastWindowWidth = window.innerWidth
}

// Fix Flickity
export function flickityFix($carousel: any) {
    $carousel.on('dragStart', function () {
        $carousel.slider.childNodes.forEach(
            (slide: any) => (slide.style.pointerEvents = 'none')
        )
    })

    $carousel.on('dragEnd', function () {
        $carousel.slider.childNodes.forEach(
            (slide: any) => (slide.style.pointerEvents = 'all')
        )
    })
}

// Pages Loader
export function pagesLoader() {
    header = document.querySelector('header')
    let loader = document.getElementById('loader'),
        tl: any = gsap.timeline()

    tl.to(loader, 0.5, { autoAlpha: 1, ease: 'power3.out' })

        .set(header, { autoAlpha: 1 })

        .set('#smooth-wrapper', { autoAlpha: 1 })

        .to(
            '#loader svg',
            0.5,
            { scale: 0.95, autoAlpha: 0, ease: 'power3.out' },
            0.5
        )

        .call(function () {
            pageScroll()
        })

        .to(loader, 0.5, { autoAlpha: 0, ease: 'power3.out' })

        .call(function () {
            disableScroll(false)
        })
}

// Load all page fonts
// import '../src/assets/fonts/'
export function loadFonts() {
    pageLang = document.querySelector('header')?.getAttribute('lang')
    let loadedFonts = 0,
        fonts

    if (pageLang == 'en') {
        fonts = [
            {
                name: 'Gotham',
                src: `url(.${Gotham}) format("woff"), url(.${Gotham2}) format("woff2")`,
                // src: 'url(./assets/fonts/Gotham-Book.woff) format("woff"), url(./assets/fonts/Gotham-Book.woff2) format("woff2")',
                options: {
                    style: 'normal',
                    weight: 400,
                    'font-display': 'swap',
                },
            },
            {
                name: 'Gotham',
                src: `url(.${GothamM}) format("woff"), url(.${GothamM2}) format("woff2")`,
                // src: 'url(./assets/fonts/Gotham-Medium.woff) format("woff"), url(./assets/fonts/Gotham-Medium.woff2) format("woff2")',
                options: {
                    style: 'normal',
                    weight: 500,
                    'font-display': 'swap',
                },
            },
            {
                name: 'Gotham',
                src: `url(.${GOTHAMROUNDED}) format("opentype")`,
                // src: 'url(./assets/fonts/Gotham-Rounded-bold.otf) format("opentype")',
                options: {
                    style: 'normal',
                    weight: 700,
                    'font-display': 'swap',
                },
            },
        ]
    } else {
        fonts = [
            {
                name: 'Co Headline',
                src: `url(.${CoHeadlineL}) format("woff"), url(.${CoHeadlineL2}) format("woff2")`,
                // src: 'url(./assets/fonts/CoHeadline-Light.woff) format("woff"), url(./assets/fonts/CoHeadline-Light.woff2) format("woff2")',
                options: {
                    style: 'normal',
                    weight: 300,
                    'font-display': 'swap',
                },
            },
            {
                name: 'Co Headline',
                src: `url(.${CoHeadlineR}) format("woff"), url(.${CoHeadlineR2}) format("woff2")`,
                // src: 'url(./assets/fonts/CoHeadline-Regular.woff) format("woff"), url(./assets/fonts/CoHeadline-Regular.woff2) format("woff2")',
                options: {
                    style: 'normal',
                    weight: 400,
                    'font-display': 'swap',
                },
            },
            {
                name: 'Co Headline',
                src: `url(.${CoHeadlineB}) format("opentype")`,
                // src: 'url(./assets/fonts/CoHeadlineBold.otf) format("opentype")',
                options: {
                    style: 'normal',
                    weight: 700,
                    'font-display': 'swap',
                },
            },
        ]
    }

    // debugger
    fonts.forEach(function (font: any) {
        const fontFace = new FontFace(font.name, font.src, font.options)

        fontFace.load().then(function (loadedFont) {
            document.fonts.add(loadedFont)

            loadedFonts++

            if (loadedFonts === fonts.length) {
                // onFontsLoad()
            }
        })
    })
}

// On fonts load
export function onFontsLoad() {
    createSmooth()

    globals()
}

// GSAP Smoother
export function createSmooth() {
    window.scroll(0, 0)

    smoother = ScrollSmoother.create({
        smooth: 1,
        ignoreMobileResize: true,
        effects: true,
        smoothTouch: false,
    })

    ScrollTrigger.create({
        onUpdate: pageScroll,
        start: 0,
        end: 'max',
    })

    disableScroll(true)
}

// Page Scroll Interactions
export function pageScroll() {
    let stickyMenu = document?.querySelector('.sticky_menu_wrap')
    let maskText = document?.querySelectorAll('._mask')
    let eleWrap = document?.querySelectorAll('._eleWrap')
    let splitWrap = document?.querySelectorAll('._splitWrap')
    let facts = document?.querySelectorAll('.odometer')
    header = document?.querySelector('header')
    facts.forEach(function (e: any) {
        if (ScrollTrigger?.isInViewport(e)) {
            if (!e.classList.contains('inview')) {
                e.innerHTML = e.dataset.counter
            }
        }
    })

    if (eleWrap.length != 0) {
        eleWrap?.forEach(function (e, i) {
            let $this = e,
                eleY = $this.querySelectorAll('._eleY'),
                eleX = $this.querySelectorAll('._eleX'),
                eleS = $this.querySelectorAll('._eleS'),
                eleD = $this.querySelectorAll('._eleDraw')

            if (ScrollTrigger?.isInViewport(e)) {
                animateEle($this, eleY, eleX, eleS, eleD)
            }
        })
    }

    if (splitWrap.length != 0) {
        splitWrap.forEach(function (e, i) {
            let $this = e,
                getWords = $this.querySelectorAll('._splitWords'),
                getLines = $this.querySelectorAll('._splitLines')

            if (ScrollTrigger?.isInViewport(e)) {
                getWords.forEach(function (e, i) {
                    split($this, e, null, i)
                })
                getLines.forEach(function (e, i) {
                    split($this, null, e, i)
                })
            }
        })
    }

    if (maskText.length != 0) {
        maskText.forEach(function (e, i) {
            let $this = e

            if (ScrollTrigger?.isInViewport(e)) {
                if (!$this.classList.contains('inview')) {
                    $this.classList.add('inview')

                    let splitLines = new SplitText($this, {
                        type: 'lines',
                        linesClass: 'SplitClass',
                    })
                    let splitWords = new SplitText(
                        $this.querySelectorAll('.SplitClass'),
                        { type: 'words', wordsClass: 'SplitClass' }
                    )

                    gsap.set($this, { autoAlpha: 1 })

                    gsap.from(splitWords.words, 0.7, {
                        y: '100%',
                        ease: 'power3.out',
                        stagger: 0.05,
                        onComplete: function () {
                            splitWords.revert()
                            splitLines.revert()
                            $this.classList.remove('_mask')
                        },
                    })
                }
            }
        })
    }

    if (window.pageYOffset > 20) {
        if (headerTL) {
            headerTL.play()

            header?.classList.add('scrolled')
        }
    } else {
        if (headerTL) {
            headerTL.reverse()

            header?.classList.remove('scrolled')
        }
    }
}

export function animateEle(
    $this: any,
    eleY: any,
    eleX: any,
    eleS: any,
    eleD: any
) {
    pageLang = document.querySelector('header')?.getAttribute('lang')

    if (!$this.classList.contains('inview')) {
        $this.classList.add('inview')

        gsap.set($this, { autoAlpha: 1 })

        if (eleS.length != 0) {
            gsap.set(eleS, { scale: 0, autoAlpha: 0 })
            gsap.to(eleS, 1, {
                scale: 1.2,
                autoAlpha: 1,
                delay: 0.5,
                stagger: 0.2,
                ease: 'power3.out',
            })
        }
        if (eleY.length != 0) {
            gsap.set(eleY, { y: '20%', autoAlpha: 0 })
            gsap.to(eleY, 1, {
                y: 0,
                autoAlpha: 1,
                delay: 0.5,
                ease: 'power3.out',
                stagger: 0.2,
            })
        }

        if (eleX.length != 0) {
            gsap.set(eleX, { x: pageLang == 'en' ? 40 : -40, autoAlpha: 0 })
            gsap.to(eleX, 1.5, {
                x: 0,
                autoAlpha: 1,
                delay: 0.5,
                ease: 'power3.out',
                stagger: 0.2,
            })
        }

        if (eleD.length != 0) {
            gsap.set(eleD, { drawSVG: '0%' })
            gsap.to(eleD, 1.5, { drawSVG: '100%', ease: 'power3.out' })
        }
    }
}

export function split($this: any, getWords: any, getLines: any, i: any) {
    if (getWords && getWords.length != 0) {
        if (!getWords.classList.contains('inview')) {
            getWords.classList.add('inview')

            gsap.set(getWords, { autoAlpha: 1 })

            let splitWords = new SplitText(getWords, {
                type: 'words',
                wordsClass: 'SplitClass',
            })

            if (getWords.classList.contains('dirX')) {
                gsap.set(splitWords.words, { x: 30, autoAlpha: 0 })
                gsap.to(splitWords.words, 1, {
                    x: 0,
                    autoAlpha: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    delay: 0.25,
                    onComplete: function () {
                        splitWords.revert()
                    },
                })
            } else {
                gsap.set(splitWords.words, { y: 30, autoAlpha: 0 })
                gsap.to(splitWords.words, 1, {
                    y: 0,
                    autoAlpha: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    delay: 0.25,
                    onComplete: function () {
                        splitWords.revert()
                    },
                })
            }
        }
    }

    if (getLines && getLines.length != 0) {
        if (!getLines.classList.contains('inview')) {
            getLines.classList.add('inview')

            if (getLines && getLines.length != 0) {
                gsap.set(getLines, { autoAlpha: 1 })
                let splitLines = new SplitText(getLines, {
                    type: 'lines',
                    linesClass: 'SplitClass',
                })
                gsap.set(splitLines.lines, { y: 30, autoAlpha: 0 })
                gsap.to(splitLines.lines, 1, {
                    y: 0,
                    autoAlpha: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    delay: 0.25,
                    onComplete: function () {
                        if (!$this.classList.contains('no_revert')) {
                            window.addEventListener('resize', function () {
                                splitLines.revert()
                            })
                        }
                    },
                })
            }
        }
    }
}

// Disable / Enable Page Scroll
export function disableScroll(val: any) {
    body = document.querySelector('body')
    body.style.overflow = val == true ? 'hidden' : 'auto'

    if (smoother) {
        smoother.paused(val)
    }
}

// Global Functions
export function globals() {
    // Srcoll to
    let scrollEle = document.querySelectorAll('.scrollTo')
    pageLang = document.querySelector('header')?.getAttribute('lang')
    headerTL = gsap.timeline({ paused: true })

    headerTL

        .to('header ._ele', 0.5, {
            x: pageLang == 'en' ? -10 : 10,
            autoAlpha: 0,
            ease: 'power3.in',
            stagger: 0.05,
        })

        .fromTo(
            '.burger_button',
            0.5,
            { x: pageLang == 'en' ? '100%' : '-100%', autoAlpha: 0 },
            { x: '0', autoAlpha: 1, ease: 'power3.out' }
        )

    scrollEle.forEach(function (e: any) {
        e.addEventListener('click', function () {
            let id = e.dataset.scroll,
                offset

            if (id) {
                let element: any = document.getElementById(id)

                offset =
                    element.getBoundingClientRect().top + window.pageYOffset
            } else {
                offset = 0
            }

            gsap.to(smoother, {
                scrollTop: offset,
                duration: 1,
                ease: isMobile ? 'power3.out' : 'power3.inOut',
            })
        })
    })

    // Sticky Content
    let sticky = document.querySelectorAll('._sticky_wrap')

    if (window.matchMedia('(min-width: 961px)').matches) {
        sticky.forEach(function (e: any, i: any) {
            let stickyTarget: any = e.querySelector('._sticky')

            ScrollTrigger.create({
                id: 't-' + i,
                invalidateOnRefresh: true,
                trigger: stickyTarget,
                start: '0% 0%',
                end: () => `+=${e.offsetHeight - stickyTarget.offsetHeight}`,
                pin: true,
                pinSpacing: false,
            })
        })
    }
    if (window.matchMedia('(min-width: 960px)').matches) {
        sticky.forEach(function (e, i) {
            if (ScrollTrigger.getById('t-' + i)) {
                ScrollTrigger?.getById('t-' + i)?.kill(true)
            }
        })
    }

    ScrollTrigger.matchMedia({
        '(min-width: 961px)': function () {
            sticky.forEach(function (e: any, i) {
                let stickyTarget = e.querySelector(
                    '._sticky'
                ) as HTMLElement | null

                if (stickyTarget) {
                    ScrollTrigger.create({
                        id: 't-' + i,
                        invalidateOnRefresh: true,
                        trigger: stickyTarget,
                        start: '0% 0%',
                        end: () =>
                            `+=${e.offsetHeight - stickyTarget!.offsetHeight}`,
                        pin: true,
                        pinSpacing: false,
                    })
                }
            })
        },

        '(max-width: 960px)': function () {
            sticky.forEach(function (e, i) {
                const scrollTriggerInstance = ScrollTrigger.getById('t-' + i)

                if (scrollTriggerInstance) {
                    scrollTriggerInstance.kill(true)
                }
            })
        },
    })

    // Load Images
    appendImgs()

    // Small-size Slider
    szSlider()

    // Burger
    burger()

    // Locations
    locations()

    // Site Links
    siteLinks()

    // CEO Message
    ceoMessage()

    // Our Journey
    journey()

    // Products
    products()

    // Forms
    forms()

    // Magnet
    const magnetElements: any = document.querySelectorAll('.magnet')
    new MagnetClass(magnetElements)

    // Interactive Labels
    const interactiveLabels = document.querySelectorAll('.interactive_label')
    new InteractiveLabelsClass(interactiveLabels)
}

export function siteLinks() {
    let a = document.querySelectorAll('a'),
        isKeydown = false

    window.addEventListener('pageshow', function (event) {
        var historyTraversal =
            event.persisted ||
            (typeof window.performance != 'undefined' &&
                window.performance.navigation.type === 2)
        if (historyTraversal) {
            window.location.reload()
        }
    })

    document.addEventListener('keydown', function (e) {
        isKeydown = true
    })

    document.addEventListener('keyup', function (e) {
        isKeydown = false
    })

    a.forEach(function (e: any) {
        e.addEventListener('click', function (event: any) {
            let getID = e.href.split('#')[1]

            let target = document.getElementById(getID)

            if (
                !e.getAttribute('target') &&
                !target &&
                !e.getAttribute('href').includes('javascript:void(0)') &&
                !isKeydown
            ) {
                e.classList.add('false')

                if (e.classList.contains('false')) {
                    let pageTL = gsap.timeline()

                    pageTL
                        .to(
                            '#loader',
                            0.5,
                            { autoAlpha: 1, ease: 'power3.out' },
                            0
                        )

                        .call(function () {
                            e.classList.remove('false')

                            window.location = e.href
                        })

                    event.preventDefault()

                    return false
                }
            }
        })
    })
}

export function appendImgs() {
    let appendBGs = document.querySelectorAll('.load_bg'),
        iMGs = document.querySelectorAll('.load_img')

    iMGs.forEach(function (el: any) {
        let s = el.dataset.src

        el.removeAttribute('data-src')
        el.setAttribute('src', s)
        el.classList.remove('load_img')

        let newImg = new Image()

        newImg.src = s
    })

    appendBGs.forEach(function (el: any) {
        let s = el.dataset.src

        el.style.backgroundImage = 'url(' + s + ')'
        el.removeAttribute('data-src')
        el.classList.remove('load_img')
    })
}

export function szSlider() {
    let sliders = document.querySelectorAll('.sz_slider')
    pageLang = document.querySelector('header')?.getAttribute('lang')

    sliders.forEach(function (slider) {
        let getWrap: any = slider.querySelector('.sz_container'),
            next: any = slider.querySelector('._next'),
            prev: any = slider.querySelector('._prev')

        let flkty = new Flickity(getWrap, {
            prevNextButtons: false,
            accessibility: false,
            pageDots: false,
            percentPosition: true,
            cellAlign: pageLang == 'en' ? 'left' : 'right',
            rightToLeft: pageLang == 'ar' ? true : false,
            contain: true,
            groupCells: true,
            selectedAttraction: isTouch ? 0.2 : 0.01,
            friction: isTouch ? 0.8 : 0.2,
        })

        if (next && next.length != 0) {
            next.addEventListener('click', function () {
                flkty.next(true)
            })
            prev.addEventListener('click', function () {
                flkty.previous(true)
            })
        }
    })
}

declare var mapIframe: HTMLIFrameElement
export function locations() {
    let cols = document.querySelectorAll('.locations_col')
    cols.forEach(function (col: any) {
        col.addEventListener('click', function () {
            if (!col.classList.contains('active')) {
                let getURL = col.dataset.map

                cols.forEach(function ($this) {
                    $this.classList.remove('active')
                })

                col.classList.add('active')

                mapIframe.src = getURL
            }
        })
    })
}

export function journey() {
    let wrap: any = document.querySelector('.journey_wrap')
    pageLang = document.querySelector('header')?.getAttribute('lang')
    let getYear: HTMLElement

    if (wrap && wrap.length != 0) {
        let cards: any = document.querySelectorAll('.journey_card'),
            ja: any = document.querySelector('.journey_animate'),
            years: any = document.querySelectorAll('.journey_year')

        function build() {
            let lastCard: any = cards[cards.length - 1],
                lastCardPosition: any = lastCard.offsetLeft,
                lastYear: any = years[years.length - 1],
                lastYearPosition: any = lastYear.offsetTop

            if (ScrollTrigger.getById('j')) {
                ScrollTrigger?.getById('j')?.kill(true)
            }

            if (pageLang == 'ar') {
                lastCardPosition = -ja.offsetWidth + cards[0].offsetWidth
            }

            if (window.innerWidth > 640) {
                gsap.timeline({
                    scrollTrigger: {
                        id: 'j',
                        trigger: '.journey_container',
                        endTrigger: '.journey_wrap',
                        start: '0% 0%',
                        end: '100% 100%',
                        pin: true,
                        pinSpacing: false,
                        anticipatePin: isTouch ? 0.5 : 0,
                        pinType: isTouch ? 'transform' : 'transform',
                        scrub: 0.3,
                    },
                    defaults: { ease: 'none' },
                })

                    .fromTo(
                        '.journey_year_slider',
                        { y: 0 },
                        { y: -lastYearPosition },
                        0
                    )

                    .fromTo(
                        '.journey_animate',
                        { x: 0 },
                        { x: -lastCardPosition },
                        0
                    )
            }
        }

        window.addEventListener('resize', function () {
            clearTimeout(window.cardsResized)

            window.cardsResized = setTimeout(function () {
                build()
            }, 500)
        })

        window.cardsResized = setTimeout(function () {
            build()
        }, 500)

        // Small Screens
        let getWrap: any = document.querySelector('.journey_cards'),
            tl: any

        let flkty = new Flickity(getWrap, {
            prevNextButtons: false,
            accessibility: false,
            pageDots: false,
            // draggable: false,
            watchCSS: true,
            percentPosition: true,
            cellAlign: pageLang == 'en' ? 'left' : 'right',
            rightToLeft: pageLang == 'ar' ? true : false,
            contain: true,
            groupCells: true,
            selectedAttraction: isTouch ? 0.2 : 0.01,
            friction: isTouch ? 0.8 : 0.2,
        })

        flkty.on('change', function (index) {
            if (tl) {
                tl.kill()
            }

            tl = gsap.timeline()

            tl.to('.journey_year_static', 0.5, {
                y: '-50%',
                autoAlpha: 0,
                ease: 'power3.in',
            })

                .set('.journey_year_static', { y: '50%' })

                .call(function () {
                    getYear.innerHTML = cards[index].dataset.year
                })

                .to('.journey_year_static', 0.5, {
                    y: 0,
                    autoAlpha: 1,
                    ease: 'power3.out',
                })
        })
    }
}

export function ceoMessage() {
    let expandLinks = document?.querySelectorAll('.expand')
    pageLang = document?.querySelector('header')?.getAttribute('lang')

    let slider: any = document?.querySelector('.words_slider'),
        flkty: any

    if (slider && slider?.length != 0) {
        flkty = new Flickity(slider, {
            prevNextButtons: false,
            accessibility: false,
            pageDots: false,
            percentPosition: true,
            cellAlign: pageLang == 'en' ? 'left' : 'right',
            rightToLeft: pageLang == 'ar' ? true : false,
            selectedAttraction: isTouch ? 0.2 : 0.01,
            friction: isTouch ? 0.8 : 0.2,
        })
    }

    expandLinks?.forEach(function (e: any) {
        let wrap: any = e.closest('.words_slide'),
            title1: any = e.dataset.title1,
            title2: any = e.dataset.title2,
            paragraphsWrap: any = wrap?.querySelector('.expand_items'),
            p: any = paragraphsWrap?.querySelectorAll('p'),
            tl: any = gsap.timeline({ paused: true })

        tl?.to(
            paragraphsWrap,
            0.1,
            {
                height: 'auto',
                ease: 'power3.inOut',
                onUpdate: function () {
                    flkty.resize()
                },
            },
            0
        )

            .fromTo(
                p,
                1,
                { y: '30%', autoAlpha: 0 },
                { y: '0%', autoAlpha: 1, stagger: 0.1, ease: 'power3.inOut' },
                0
            )

            .call(function () {
                ScrollTrigger.refresh()
            })
        flkty.resize()
        ScrollTrigger.refresh()

        e?.addEventListener('click', function () {
            if (!e.classList.contains('expanded')) {
                e.querySelector('strong').innerHTML = title2

                e.classList.add('expanded')

                tl.play()
            } else {
                e.querySelector('strong').innerHTML = title1

                e.classList.remove('expanded')

                tl.reverse()
            }
        })
    })
}

export function products() {
    let filters: any = document.querySelectorAll('.filters .menu'),
        cards: any = document.querySelectorAll('.product_card'),
        brand: any = document.getElementById('brand'),
        tl: any

    filters.forEach(function (e: any) {
        e.addEventListener('click', function () {
            let parent = e.closest('.filters'),
                id = e.dataset.id

            if (parent.classList.contains('dynamic')) {
                filters.forEach(function ($this: any) {
                    $this.classList.remove('active')
                })

                e.classList.add('active')

                if (tl) {
                    tl.kill()
                }

                tl = gsap.timeline()

                tl.to('.products_cols', 0.5, {
                    y: -20,
                    autoAlpha: 0,
                    ease: 'power3.in',
                })

                    .call(function () {
                        let selectedBrand = brand.value

                        cards.forEach(function (card: any) {
                            let cat = card.dataset.cat,
                                getBrand = card.dataset.brand

                            if (id) {
                                if (cat == id) {
                                    card.style.display = 'block'
                                } else {
                                    card.style.display = 'none'
                                }
                            } else {
                                card.style.display = 'block'
                            }

                            if (selectedBrand && selectedBrand.length != 0) {
                                if (getBrand != selectedBrand) {
                                    card.style.display = 'none'
                                }
                            }
                        })
                    })

                    .set('.products_cols', { y: 20 })

                    .to('.products_cols', 0.5, {
                        y: 0,
                        autoAlpha: 1,
                        ease: 'power3.out',
                    })

                    .call(function () {
                        pageScroll()
                    })
            }
        })
    })

    if (brand && brand.length != 0) {
        function excute() {
            let getActiveFilter: any = document.querySelector(
                '.filters .menu.active'
            )

            if (getActiveFilter) {
                getActiveFilter.click()
            }
        }

        brand.addEventListener('change', function (val: any) {
            excute()
        })

        excute()
    }
}

export function forms() {
    let submit: any = document.querySelectorAll('.submit')

    submit.forEach(function ($this: any) {
        let getForm: any = $this.closest('form')

        $this.addEventListener('click', function () {
            let submitButton: any = getForm.querySelector('.submit_form')

            submitButton.click()
        })

        getForm.addEventListener('submit', formHandler)

        function formHandler(e: any) {
            let btn: any = getForm.querySelector('.submit')

            e.preventDefault()

            const formData: any = new FormData(e.target)

            btn.classList.add('disabled')

            fetch(getForm.action, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            }).then(function () {
                let getInputs = getForm.querySelectorAll(
                    'input, textarea, select'
                )

                getInputs.forEach(function (input: any) {
                    input.value = ''
                })

                btn.classList.add('success')
            })
        }
    })
}

export function burger() {
    pageLang = document.querySelector('header')?.getAttribute('lang')

    let burgerBtn: any = document.querySelector('.burger_button'),
        isBurger: any,
        tl: any = gsap.timeline({ paused: true })
    tl.to(
        '.burger_button i',
        0.5,
        {
            rotation: -90,
            y: -10,
            autoAlpha: 0,
            ease: 'power3.in',
            stagger: 0.1,
        },
        0
    )

        .fromTo(
            '.burger_button svg',
            0.5,
            { rotation: 90, y: 10, autoAlpha: 0 },
            { rotation: 0, y: 0, autoAlpha: 1, ease: 'power3.out' },
            0.8
        )

        .set('.burger_wrap', { autoAlpha: 1 }, 0)

        .from(
            '.burger_wrap .ft_vector',
            1,
            {
                x: pageLang == 'en' ? -50 : 50,
                autoAlpha: 0,
                ease: 'power3.out',
            },
            0.5
        )

        .from('.burger_wrap i', 0.5, { scaleY: 0, ease: 'power3.inOut' }, 0)

        .from(
            '.burger_wrap ._el',
            0.5,
            { y: '50%', autoAlpha: 0, ease: 'power3.out', stagger: 0.05 },
            0.5
        )
    burgerBtn?.addEventListener('click', function (event: any) {
        if (!isBurger) {
            disableScroll(true)

            isBurger = true

            tl.play()
        } else {
            disableScroll(false)

            isBurger = false

            tl.reverse()
        }
    })
}

// Magnet Function
export class MagnetClass {
    selector: any
    constructor(selector: any) {
        this.selector = selector

        this.init()
    }

    init() {
        if (!isTouch)
            this.selector.forEach((el: any) => {
                document.addEventListener('mousemove', (e) => {
                    this.magnetize(el, e)
                })
            })
    }

    magnetize(el: any, e: any) {
        const getx = e.pageX
        const getY = e.pageY - window.pageYOffset
        const item = el
        const customDist = item.dataset.dist * 20 || 120
        const bounding = item.getBoundingClientRect()
        const centerX = bounding.left + bounding.width / 2
        const centerY = bounding.top + bounding.height / 2
        let deltaX = Math.floor(centerX - getx) * -0.6
        let deltaY = Math.floor(centerY - getY) * -0.6
        const distance = this.calculateDistance(item, getx, getY)

        if (customDist === 0) {
            deltaX = 0
            deltaY = 0
        }

        if (distance < customDist) {
            if (item.classList.contains('magnet')) {
                gsap.to(item, 0.5, { y: deltaY, x: deltaX, ease: 'none' })
                item.classList.add('mg')
            }
        } else {
            gsap.to(item, 0.5, { y: 0, x: 0, ease: 'none' })
            item.classList.remove('mg')
        }
    }

    calculateDistance(elem: any, mouseX: any, mouseY: any) {
        const bounding = elem.getBoundingClientRect()
        return Math.floor(
            Math.sqrt(
                Math.pow(mouseX - (bounding.left + bounding.width / 2), 2) +
                    Math.pow(mouseY - (bounding.top + bounding.height / 2), 2)
            )
        )
    }

    lerp(a: any, b: any, n: any) {
        return (1 - n) * a + n * b
    }
}

// Interactive Labels
export class InteractiveLabelsClass {
    selector: any
    constructor(selector: any) {
        this.selector = selector

        if (!isTouch) {
            this.init()
        }
    }

    init() {
        this.selector.forEach((element: any) => {
            const tl = gsap.timeline({ paused: true })
            const ele = element.querySelector('._txt')
            const ele2 = element.querySelector('._shape')

            let staggerVal, split1, split2

            if (ele && ele.length != 0) {
                if (!ele.classList.contains('words')) {
                    split1 = new SplitText(ele, {
                        type: 'chars',
                        charsClass: 'SplitClass',
                    })
                    split2 = split1.chars
                    staggerVal = 0.03
                } else {
                    split1 = new SplitText(ele, {
                        type: 'words',
                        wordsClass: 'SplitClass',
                    })
                    split2 = split1.words
                    staggerVal = 0.1
                }

                tl.to(
                    [split2, ele2],
                    0.3,
                    {
                        y: '-70%',
                        autoAlpha: 0,
                        ease: 'power3.in',
                        stagger: 0.05,
                    },
                    0
                )

                    .set([split2, ele2], { y: '70%' })

                    .to([split2, ele2], 0.3, {
                        y: '0%',
                        autoAlpha: 1,
                        ease: 'power3.out',
                        stagger: 0.05,
                    })
            } else {
                tl.to(
                    ele2,
                    0.3,
                    {
                        y: '-70%',
                        autoAlpha: 0,
                        ease: 'power3.in',
                        stagger: 0.05,
                    },
                    0
                )

                    .set(ele2, { y: '70%' })

                    .to(ele2, 0.3, {
                        y: '0%',
                        autoAlpha: 1,
                        ease: 'power3.out',
                        stagger: 0.05,
                    })
            }

            if (ele || ele2) {
                element.animation = tl

                element.addEventListener('mouseenter', () => {
                    if (!element.animation.isActive()) {
                        element.animation.restart()
                    }
                })
            }
        })
    }
}
