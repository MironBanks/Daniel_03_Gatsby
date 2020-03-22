import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Button from '../components/Button/Button'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import PageInfo from '../components/PageInfo/PageInfo'
import { pageTransition } from '../components/Animation'



const AboutTitleWrapper = styled.div`
        height: 50vh;
        width: 50%;
        text-align: left;
        padding: 10px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background-color: white;

        @media only screen and (max-width: 500px) {
                    margin-top: 5px;
                    width: 100%;
                    height: 80vh;
                    overflow: hidden;
                    border-right:solid 5px #596c68;
                    }
`

const AboutParagraph = styled.p`
    font-size:1.3rem;
    font-weight: 200;
    margin: 50px 0;

    @media only screen and (max-width: 500px) {
                    font-size:1rem;
                    margin: 10px 0;
                    text-align: right;
                    }
`

const StyledImage = styled(Image)`
      position: absolute !important;
      right: 0;
      top: 0;
      bottom:0;
      width: 50%;
      object-fit: cover;
      z-index: -1;

      @media only screen and (max-width: 500px) {
                    display: none;
                    }
`



const pageData = {
    title1: 'A little about',
    title2: 'who I am.',
    paragraph: `Have you ever heard or read stories about .`,
}








const AboutPage = ({ data }) => {

    let btn = useRef(null)
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
        }).from(btn, 1.5, {
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
                <PageInfo title1={pageData.title1} title2={pageData.title2} paragraph={pageData.paragraph} />
                <AboutParagraph ref={el => (paragraph = el)}>Have you ever heard or read stories about people who change their paths and find their passion
                    after 30? That is definitely me. It all started with me taking simple pictures using the kit
                    lens of my camera, but my curiosity led me down the path of new knowledge, techniques and
                    equipment.
                    <br />
                    <br />
                    Today I’m filming and producing video content for social media – among other things.
                    When I film or process video content, I always have a smile on my face – that’s how
                    I know that videography makes me happy.
                </AboutParagraph>
                <Button ref={el => (btn = el)}> <Link to="/portfolio">My Portfolio</Link></Button>
            </AboutTitleWrapper>
            <StyledImage
                fluid={data.file.childImageSharp.fluid} />
        </>
    )
}

export const query = graphql`
  {
    file(name: {eq: "daniel"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90, duotone: 
          { highlight: "#e3d9ca", shadow: "#192550", opacity: 80  }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`



export default AboutPage