import React, { useEffect } from 'react'
import styled from 'styled-components';

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'
import PageInfo from '../components/PageInfo/PageInfo'
import FooterWave from '../components/FooterWave/FooterWave'
import PricingPlan from '../components/PricingPlan/PricingPlan'




const PageWrapper = styled.div`
        height: 80vh;
        width: 50%;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        margin: 0 auto;
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






const pageData = {
    title1: 'Check pricing plans',
    paragraph: `We did our best to meet your expectations. Please feel free to pick the right plan for your needs.`,
}

const PricesPage = () => {
    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <PageWrapper>
                <IntroOverlay />
                <IntroOverlaySecond />
                <PageInfo title1={pageData.title1} title2={pageData.title2} paragraph={pageData.paragraph} />
                <Line></Line>
                <PricingPlan />
                <FooterWave />
            </PageWrapper>
        </>
    )
}

export default PricesPage