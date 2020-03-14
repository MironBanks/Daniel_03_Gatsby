import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import gsap from 'gsap'

import corpo from '../../assets/images/corpo.jpeg'
import event from '../../assets/images/event.jpeg'
import promo from '../../assets/images/promo.jpeg'
import social from '../../assets/images/social_media.jpeg'


const videoWork = [
    { name: 'Corpo', image: corpo },
    { name: 'Event', image: event },
    { name: 'Promo', image: promo },
    { name: 'Social', image: social }
];



const HamburgerMenuContainer = styled.div`
   height: 100px;
   display: none;
   
`
const HamburgerMenu = styled.div`
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
`
const MenuSecondaryBackgroundColor = styled.div`
    background: #191919;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
`

const MenuLayer = styled.div`
    position: relative;
    background: #596c68;
    height: 100%;
    overflow: hidden;

        .video-background {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            opacity: 0;
        }
`

const Wrapper = styled.div`
    position: relative;
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;

    .menu-links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 200px;

        nav {
            display: block;

            ul {
              margin: 0;
              padding: 0;

              li {
                list-style: none;
                font-size: 6rem;
                font-weight: 700;
                cursor: pointer;
                height: 135px;
                overflow: hidden;
                position: relative;
                width: 700px;

                a {
                  position: absolute;
                  color: #fff;
                  text-decoration: none;
                  &:hover {
                    color: #191919;
                  }
                }
              }
            }
        }
    }
`
const Info = styled.div`
    color: #fff;
    width: 300px;

    h3 {
      font-size: 1.2rem;
      margin: 8px auto;
    }
    p {
        margin: 0 auto;
        font-size: 0.8rem;
    }
`

const MovieInfo = styled.div`
    position: absolute;
    bottom: -80px;
    color: #fff;
    margin-top: 16px;
    font-size: 0.8rem;
    font-weight: 600;
    
    span {
        cursor: pointer;
            
        &:first-child {
              margin-left: 64px;
            }
        font-weight: 200;
        margin: 0 32px;
        transition: 0.3s ease-in-out;
            
        &:hover {
            color: #fff;
            background: #403f48;
            padding: 8px 24px;
            border-radius: 4px;
        }
    }
`





const Hamburger = ({ state }) => {
    console.log(corpo)

    let menu = useRef(null)
    let RevealMenu = useRef(null)
    let RevealMenuBackground = useRef(null)
    let videoWorkBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)
    let info = useRef(null)
    let movieInfo = useRef(null)

    useEffect(() => {
        if (state.clicked === false) {
            gsap.to([RevealMenu, RevealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            })
            gsap.to(menu, {
                duration: 1,
                css: { display: 'none' }
            })
        } else if (state.clicked === true ||
            state.clicked === true && state.initial === null) {
            gsap.to(menu, {
                duration: 0,
                css: { display: 'block' }
            })
            gsap.to([RevealMenuBackground, RevealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"

            })
            fadeInUp(info)
            staggerReveal(RevealMenuBackground, RevealMenu)
            staggerText(line1, line2, line3, line4)

        }
    }, [state])


    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        })
    }

    const fadeInUp = (node) => {
        gsap.from(node, {
            y: 60,
            duration: 1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        })
    }

    const staggerText = (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
            duration: 0.8,
            opacity: 0,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.5
            }
        })
    }

    const handleVideo = (city, target) => {
        gsap.to(target, {
            duration: 0,
            background: `url(${city}) center center`
        })
        gsap.to(target, {
            duration: .4,
            opacity: 1,
            ease: 'power3.inOut'
        })
        gsap.from(target, {
            duration: .4,
            skewY: 2,
            transformOrigin: 'right top'
        })
    }

    const handleVideoReturn = target => {
        gsap.to(target, {
            duration: .4,
            opacity: 0
        })
    }


    return (
        <HamburgerMenuContainer ref={el => (menu = el)}>
            <HamburgerMenu>
                <MenuSecondaryBackgroundColor ref={el => (RevealMenuBackground = el)} />
                <MenuLayer ref={el => (RevealMenu = el)}>
                    <div ref={el => (videoWorkBackground = el)}
                        className="video-background">

                    </div>
                    <div className="container">
                        <Wrapper>
                            <div className='menu-links'>
                                <nav>
                                    <ul>
                                        <li ref={el => (line1 = el)}><Link
                                            to='/about'>About</Link></li>
                                        <li ref={el => (line2 = el)}><Link
                                            to='/news'>News</Link></li>
                                        <li ref={el => (line3 = el)}><Link
                                            to='/prices'>Prices</Link></li>
                                        <li ref={el => (line4 = el)}><Link
                                            to='/contact'>Contact</Link></li>
                                    </ul>
                                </nav>
                                <Info ref={el => (info = el)}>
                                    <h3>Our Promise</h3>
                                    <p>Have you ever heard or read stories about people who
                                        change their paths and find their passion after 30?
                                        That is definitely me. It all started with me taking
                                        simple pictures using the kit lens of my camera, but my
                                        curiosity led me down the path of new knowledge, techniques
                                        and equipment.
                                </p>
                                </Info>
                                <MovieInfo>
                                    What we do:
                                    {videoWork.map(el => (
                                        <span
                                            key={el.name}
                                            onMouseEnter={() => handleVideo(el.image, videoWorkBackground)}
                                            onMouseOut={() => handleVideoReturn(videoWorkBackground)}>
                                            {el.name}
                                        </span>
                                    ))}
                                </MovieInfo>
                            </div>
                        </Wrapper>
                    </div>
                </MenuLayer>
            </HamburgerMenu>
        </HamburgerMenuContainer >
    )
}

export default Hamburger