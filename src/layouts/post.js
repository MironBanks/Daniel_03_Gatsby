import React, { useEffect } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'


const PostWrapper = styled.div`
    width: 60vw;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`
const PostTitle = styled.h1`
    margin: 10px;
    font-size: 5rem;
    font-weight: 700;
    text-align: left;
`

const PostImage = styled.img`
    margin: 30px 0;
    width: 100%;
`
const PostRenderer = styled.div`
    width:80%;
    padding: 40px;
    border-left: 30px #596C68 solid;
`

export const query = graphql`
query querySingleArticles($slug: String!) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      slug
      quoter
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 450) {
            src
          }
        }
      }
    }
    body
  }
}
`


const PostLayout = ({ data }) => {

    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <PostWrapper>
            <IntroOverlay />
            <IntroOverlaySecond />
            <PostTitle>{data.mdx.frontmatter.title}</PostTitle>
            <PostImage alt="post_image" src={data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src} />
            <PostRenderer>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </PostRenderer>
        </PostWrapper>
    )
}

export default PostLayout