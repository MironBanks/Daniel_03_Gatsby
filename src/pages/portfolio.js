import React, { useEffect } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'

import PageInfo from '../components/PageInfo/PageInfo'
import WorkOverlay from '../components/IntroOverlay/WorkOverlay'


const NewsTitleWrapper = styled.div`
        height: 50vh;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: white;
`




const pageData = {
  title1: 'What kind of film',
  title2: 'do You need?',
  paragraph: `we make sure You get a video we can both be proud of.`,
}


const PortfolioPage = ({ data }) => {


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
    }).from(".pageInfoParagraph", 1.5, {
      duration: 0.8,
      opacity: 0,
      delay: .03,
      ease: 'power3.inOut'
    }).to('.overlay-bottom', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    }).to('.bottom', 0.05, {
      css: { display: 'none' }
    })
  })



  return (
    <>
      <NewsTitleWrapper>
        <PageInfo title1={pageData.title1} title2={pageData.title2} paragraph={pageData.paragraph} />
      </NewsTitleWrapper>
      <WorkOverlay />
    </>
  );
}


export default PortfolioPage