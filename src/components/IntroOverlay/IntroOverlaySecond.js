import React from "react"
import styled from 'styled-components'




const Top = styled.div`

    .overlaySecond{
        background-color: #596c68;
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



const IntroOverlaySecond = () => (
    <>

        <Top>
            <div className="overlaySecond"></div>
        </Top>

    </>
)

export default IntroOverlaySecond