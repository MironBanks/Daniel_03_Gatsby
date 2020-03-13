import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from './Hamburger'


const Container = styled.div`
    
`
const Wrapper = styled.div`
    
`
const InnerHeader = styled.div`
    
`
const Logo = styled.div`
    
`
const Menu = styled.div`
    
`
const Button = styled.button`
    
`



const Header = () => (
    <>
        <Container>
            <Wrapper>
                <InnerHeader>
                    <Logo>
                        <Link to='/'>Simple Films</Link>
                    </Logo>
                    <Menu>
                        <Button>Menu</Button>
                    </Menu>
                </InnerHeader>
            </Wrapper>
        </Container>
        <Hamburger />
    </>
)

export default Header