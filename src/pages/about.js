import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import PageInfo from '../components/PageInfo/PageInfo'
import { pageTransition } from '../components/Animation'



const AboutTitleWrapper = styled.div`
        height: 50vh;
        width: 50%;
        text-align: left;
        padding: 10px;
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: white;
        border-right:solid 5px #596c68;

        @media only screen and (max-width: 500px) {
                    width: 100%;
                    height: 80vh;
                    overflow: hidden;
                    }
`




const pageData = {
    title1: 'A little about',
    title2: 'who I am.',
    paragraph: `we make sure You get a video we can both be proud of.`,
    paragraph2: `Have you ever heard or read stories about people who change their paths and find their 
    passion after 30? That is definitely me. It all started with me taking simple pictures using the kit 
    lens of my camera, but my curiosity led me down the path of new knowledge, techniques and equipment.`,

    paragraph3: `Today I’m filming and producing video content for social media – among other things. 
    When I film or process video content, I always have a smile on my face – that’s how 
    I know that videography makes me happy.`,
}








const AboutPage = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        tl.from("h1", 1.8, {
            duration: 0.8,
            opacity: 0,
            transformOrigin: 'right',
            delay: .3,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.5
            }
        }).from(".paragraph", 1.5, {
            duration: 0.8,
            opacity: 0,
            delay: .03,
            ease: 'power3.inOut'
        })


        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <AboutTitleWrapper>
                <PageInfo title1={pageData.title1} title2={pageData.title2} paragraph2={pageData.paragraph2} paragraph3={pageData.paragraph3} />
            </AboutTitleWrapper>
        </>
    )
}



export default AboutPage