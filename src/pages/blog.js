import React, { useEffect } from 'react'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'

const BlogPage = () => {
    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <h1>BlogPage</h1>
            <p>blog Page with datoCMS</p>
        </>
    )
}

export default BlogPage