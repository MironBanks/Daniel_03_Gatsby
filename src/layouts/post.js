import React, { useEffect } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'

const PostLayout = ({ pageContext: { post } }) => {

    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <div>
            <IntroOverlay />
            <IntroOverlaySecond />
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.quoter}</p>
            <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
            <MDXRenderer>{post.body}</MDXRenderer>
        </div>
    )
}

export default PostLayout