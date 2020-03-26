import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import PageInfo from '../components/PageInfo/PageInfo'
import { pageTransition } from '../components/Animation'
import FooterWave from '../components/FooterWave/FooterWave'



const AboutTitleWrapper = styled.div`
        height: 80vh;
        width: 50%;
        text-align: left;
        padding: 10px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        background-color: white;
        @media only screen and (max-width: 500px) {
                    margin-top: 5px;
                    width: 100%;
                    height: 78vh;
                    overflow: hidden;
                    align-items: flex-end;
                    }
`

const Line = styled.div`
border: 1px solid black;
background-color: black;
height: 3px;
width: 70px;
            @media only screen and (max-width: 500px) {
                    display: none;
                    }
`

const AboutParagraph = styled.p`
    font-size:1.1rem;
    font-weight: 200;
    max-width: 1020px;
    margin: 50px 0;

    @media only screen and (max-width: 500px) {
                    font-size:1rem;
                    margin: 10px 0 20px 0;
                    text-align: right;
                    }
`



const pageData = {
    title1: 'SIMPLEFILMS.NO',
    title3: 'Daniel',
    paragraph: `VIDEOGRAPHER | DIRECTOR | EDITOR`,
}








const ContactPage = ({ data }) => {

    let paragraph = useRef(null)

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
        }).from(paragraph, 1.5, {
            duration: 0.8,
            opacity: 0,
            delay: .3,
            ease: 'power3.inOut'
        })


        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <AboutTitleWrapper>
                <PageInfo title1={pageData.title1} title3={pageData.title3} paragraph={pageData.paragraph} />
                <Line></Line>
                <AboutParagraph ref={el => (paragraph = el)}>
                    TIF
                    <br />
                    +47 405 76 824
                    <br />
                    <br />
                    EMAIL
                    <br />
                    simplefilms.no@gmail.com
                    <br />
                    <br />
                    organisasjonsnummer: 924 450 509
                </AboutParagraph>
            </AboutTitleWrapper>
            <FooterWave />
        </>
    )
}




export default ContactPage