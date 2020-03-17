import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import { globalHistory } from '@reach/router/lib/history'


const HeaderContainer = styled.div`
position: absolute;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 500px) {
                width: 100%;
                max-width: 400px;
                }

    .inner-header{
        position: relative;
        z-index: 10;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: 500px) {
                width: 90vw;
                padding: 10px;
            }

        .logo a{
            font-weight: 700;
            text-decoration: none;
            margin-right: 30px;
            color: black;

            @media only screen and (max-width: 500px) {
                font-size: 1.4rem;
                margin-right: 40px;
            }
        }

        .menu{
            button{
                border:none;
                background: none;
                outline: none;
                cursor: pointer;
                font-size: 0.8rem;
                color: black;

                @media only screen and (max-width: 500px) {
                font-size: 1rem;
                margin-right: 5px;
                }
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

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        globalHistory.listen(() => {
            setState({ clicked: false, menuName: 'Menu' })
        })
    })


    const handleMenu = () => {
        disableMenu()
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: 'Menu'
            })
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: 'Close'
            })
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: 'Close'
            })
        }
    }

    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
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
                            <button disabled={disabled} onClick={handleMenu}>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state} />
        </HeaderContainer>
    )
}

export default Header