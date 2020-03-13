import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from './Hamburger'


const HeaderContainer = styled.div`
    height: 100px;

    .inner-header{
        position: relative;
        z-index: 10;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo a{
            font-weight: 700;
            text-decoration: none;
            color: #191919;
        }

        .menu{
            button{
                border:none;
                background: none;
                outline: none;
                cursor: pointer;
                font-size: 0.8rem;
                color: #191919;
            }
        }
    }
    
`




const Header = () => (
    <HeaderContainer>
        <div className="container">
            <div className="wrapper">
                <div className="inner-header">
                    <div className="logo">
                        <Link to="/">SIMPLE FILMS.</Link>
                    </div>
                    <div className="menu">
                        <button>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Hamburger />
    </HeaderContainer>
)

export default Header