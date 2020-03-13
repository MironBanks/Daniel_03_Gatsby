import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'



const HamburgerMenu = styled.div`
    
`
const MenuSecondaryBackgroundColor = styled.div`
    
`
const MenuLayer = styled.div`
    
`
const MenuCityBackground = styled.div`
    
`
const Container = styled.div`
    
`
const Wrapper = styled.div`
    
`
const MenuLinks = styled.div`
    
`




const Hamburger = () => (
    <HamburgerMenu>
        <MenuSecondaryBackgroundColor />
        <MenuLayer>
            <MenuCityBackground>

            </MenuCityBackground>
            <Container>
                <Wrapper>
                    <MenuLinks>
                        <nav>
                            <ul>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/news'>News</Link></li>
                                <li><Link to='/prices'>Prices</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </nav>
                        <div>
                            <h3>Our Promise</h3>
                            <p>Have you ever heard or read stories about people who
                                change their paths and find their passion after 30?
                                That is definitely me. It all started with me taking
                                simple pictures using the kit lens of my camera, but my
                                curiosity led me down the path of new knowledge, techniques
                                and equipment.
                            </p>
                        </div>
                        <div>
                            What we do:
                            <span>Event Films</span>
                            <span>Promo Films</span>
                            <span>Social Media Video</span>
                            <span>Corporate Video</span>
                        </div>
                    </MenuLinks>
                </Wrapper>
            </Container>
        </MenuLayer>
    </HamburgerMenu>
)

export default Hamburger