import React, { useEffect } from 'react'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <h1>Articles</h1>
            {data.allMdx.nodes.map(item => (
                <>
                    <h2>{item.frontmatter.title}</h2>
                    <p>{item.frontmatter.author}</p>
                    <p>{item.excerpt}</p>
                </>
            ))}
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