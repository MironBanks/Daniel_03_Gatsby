import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import gsap from 'gsap'
import slugify from 'slugify';
import PageInfo from '../components/PageInfo/PageInfo'
import ArticlePreview from '../components/ArticlePreview/ArticlePreview'

import styled from 'styled-components'
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


const ArticlesWrapper = styled.div`
   position: absolute;
   width: 100%;
   right: 0;
   left: 0;
   bottom: 0;
   display: flex;
   flex-direction: row; 
`;



const pageData = {
  title1: 'What kind of film',
  title2: 'do You need?',
  paragraph: `we make sure You get a video we can both be proud of.`,
}


const NewsPage = ({ data }) => {
  const {
    allDatoCmsPortfolio: { nodes },
  } = data;


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
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage }) => (
          <ArticlePreview
            key={title}
            title={title}
            image={featuredImage.fluid}
            slug={slugify(title, { lower: true })} />
        ))}
      </ArticlesWrapper>
    </>
  );
}


export const query = graphql`
  {
        allDatoCmsPortfolio{
           nodes{
              title
              featuredImage {
                  fluid(maxWidth: 500) {
                      ...GatsbyDatoCmsFluid_tracedSVG
                  }
              }
          }
        }
  }
`;

export default NewsPage