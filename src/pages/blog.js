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




const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-bottom:50px;
`;

const pageData = {
    title1: 'its simple... blog',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}







const BlogPage = ({ data }) => {
    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <PageInfo title1={pageData.title1} paragraph={pageData.paragraph} />
            <ArticlesWrapper>
                {data.allMdx.nodes.map(item => (
                    <ArticlePreview title={item.frontmatter.title} excerpt={item.excerpt} />
                ))}
            </ArticlesWrapper>
            <Button> <Link to="/about">Read More</Link></Button>
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
                }
            excerpt(pruneLength: 50)
            }
        }
    }
`

export default BlogPage