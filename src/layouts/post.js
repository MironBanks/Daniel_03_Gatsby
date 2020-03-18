import React, { useEffect } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'


export const query = graphql`
query querySingleArticles($slug: String!) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      slug
      quoter
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 500) {
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
        <div>
            <IntroOverlay />
            <IntroOverlaySecond />
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.quoter}</p>
            <img alt="post_image" src={data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src} />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
    )
}

export default PostLayout