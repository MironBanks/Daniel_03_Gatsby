import React, { useEffect } from 'react'
import gsap from 'gsap'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'

const AboutPage = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        tl.to('.overlay, .overlaySecond', 1.4, {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 15,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.2
            }
        })
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <h1>About Me Page</h1>
            <p>a bit about me</p>
        </>
    )
}



export default AboutPage