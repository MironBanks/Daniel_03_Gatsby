import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'



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
    background: #e20001;
    height: 100%;
    overflow: hidden;

        .menu-city-background {
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
            background: #191919;
            padding: 8px 24px;
            border-radius: 4px;
        }
    }
`





const Hamburger = () => (
    <HamburgerMenuContainer>
        <HamburgerMenu>
            <MenuSecondaryBackgroundColor />
            <MenuLayer>
                <div className='menu-city-background'>

                </div>
                <div className="container">
                    <Wrapper>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/news'>News</Link></li>
                                    <li><Link to='/prices'>Prices</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                            </nav>
                            <Info>
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
                            <span>Event Films</span>
                                <span>Promo Films</span>
                                <span>Social Media Video</span>
                                <span>Corporate Video</span>
                            </MovieInfo>
                        </div>
                    </Wrapper>
                </div>
            </MenuLayer>
        </HamburgerMenu>
    </HamburgerMenuContainer>
)

export default Hamburger