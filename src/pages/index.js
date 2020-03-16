import React, { useEffect } from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import Button from '../components/Button/Button'

import gsap from 'gsap'
import { graphql } from "gatsby"
import Image from 'gatsby-image'


const ContentWrapper = styled.div`
        width: 50%;
        height: calc(100vh - 100px);
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background-color: white;

        @media only screen and (max-width: 500px) {
                    width: 100%;
                    height: 70vh;
                    overflow: hidden;
                    }

`

const TextHero = styled.h2`
          font-size: 3rem;
          line-height: 4.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          z-index: 3;
          color: white;
          mix-blend-mode: difference;

          @media only screen and (max-width: 500px) {
                font-size: 1.6rem;
                line-height: 1.8rem;
                }
`

const TextLine = styled.div`
        margin-bottom: 8px;
        height: 70px;
        position: relative;
        overflow: hidden;

        @media only screen and (max-width: 500px) {
                height: 35px;
                }

`
const TextSpan = styled.span`
      position: relative;
`

const StyledImage = styled(Image)`
      height: 100vh; 
      position: absolute !important;
      right: 0;
      bottom: 0;
      width: 48%;
      object-fit: cover;

      @media only screen and (max-width: 500px) {
                    display: none;
                    }
`






const IndexPage = ({ data }) => {

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".line", 1.8, {
      duration: 0.8,
      opacity: 0,
      transformOrigin: 'right',
      delay: .1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.5
      }
    }).to('.overlay', 1.4, {
      duration: .8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 15,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1
      }
    })
  })

  return (
    <>
      <IntroOverlay />
      <ContentWrapper>
        <TextHero>
          <TextLine className='line'>
            <TextSpan>Creating unique video is</TextSpan>
          </TextLine>
          <TextLine className='line'>
            <TextSpan>what we do.</TextSpan>
          </TextLine>
        </TextHero>
        <Button> <Link to="/about">More about Us</Link></Button>
      </ContentWrapper>
      <StyledImage
        fluid={data.file.childImageSharp.fluid} />
    </>
  )
}

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90, duotone: 
          { highlight: "#e3d9ca", shadow: "#192550", opacity: 80  }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


export default IndexPage


