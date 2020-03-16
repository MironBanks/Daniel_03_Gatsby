import React from "react"
import styled from 'styled-components'




const Top = styled.div`

    .overlay{
        background-color: black;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 2;
        }

`



const IntroOverlay = () => (
    <>

        <Top>
            <div className="overlay"></div>
        </Top>

    </>
)

export default IntroOverlay