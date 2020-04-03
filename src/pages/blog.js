import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';
import Button from '../components/Button/Button'
import FooterWave from '../components/FooterWave/FooterWave';
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'
import { graphql } from 'gatsby'


const ContentWrapper = styled.div`
        height: 80vh;
        max-width:1500px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        @media only screen and (max-width: 500px) {
                    height: 100%;
                    margin-bottom:50px;
                    }
`

const ArticlesWrapper = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-bottom:50px;

  @media only screen and (max-width: 500px) {
                    height: 100%;
                    grid-template-columns: repeat(1, 1fr);
                    }
`;

const pageData = {
  title1: 'its simple... blog',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}







const BlogPage = ({ data }) => {
  const { allMdx: { nodes } } = data;


  useEffect(() => {
    pageTransition('.overlay, .overlaySecond')
  })

  return (
    <>
      <IntroOverlay />
      <IntroOverlaySecond />

      <ContentWrapper>
        <PageInfo title1={pageData.title1} paragraph={pageData.paragraph} />
        <ArticlesWrapper>
          {nodes.map(({ excerpt, frontmatter: { title, slug, author, featuredImage } }) => (
            <ArticlePreview
              title={title}
              excerpt={excerpt}
              image={featuredImage.childImageSharp.fluid}
              slug={slug} />
          ))}
        </ArticlesWrapper>
        <Button> <Link to="/about">Read More</Link></Button>
      </ContentWrapper>
      <FooterWave />
    </>
  )
}

export const query = graphql`
    {
        allMdx {
    nodes{
      frontmatter{
        title
        slug
        author
        quoter
        featuredImage{
          childImageSharp{
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      excerpt(pruneLength: 50)
    }
  }
    }
`

export default BlogPage