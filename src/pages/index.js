import React, { useEffect } from "react"
import Banner from "../components/Banner/Banner"
import IntroOverlay from "../components/IntroOverlay/IntroOverlay"

import gsap from 'gsap'






const IndexPage = () => {



  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".line span", 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to('.overlay', 1.4, {
      duration: .8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 15,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1
      }
    })

  })


  return (
    <>
      <IntroOverlay />
      <Banner />
    </>
  )
}


export default IndexPage
