import React, { useEffect } from 'react'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import { pageTransition } from '../components/Animation'

const PricesPage = () => {
    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
    })

    return (
        <>
            <IntroOverlay />
            <IntroOverlaySecond />
            <h1>Prices Page</h1>
            <p>a bit about me</p>
        </>
    )
}

export default PricesPage