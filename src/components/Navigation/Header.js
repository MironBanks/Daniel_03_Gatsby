import React, { useState } from 'react'
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




const Header = () => {

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    })

    const handleMenu = () => {
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: 'Close'
            })
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: 'Menu'
            })
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: 'Close'
            })
        }
    }


    return (
        <HeaderContainer>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link to="/">SIMPLE FILMS.</Link>
                        </div>
                        <div className="menu">
                            <button onClick={handleMenu}>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger />
        </HeaderContainer>
    )
}

export default Header