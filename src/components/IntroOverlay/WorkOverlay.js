import React from "react"
import styled from 'styled-components'




const Top = styled.div`

    .bottom {
        height: 50vh;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 8;
        .overlay-bottom {
                position: absolute;
                height: 100%;
                width: 33.333vw;
                background: black;
                bottom: 0;
                right: 66.666%;
                }
        .overlay-bottom:nth-child(2) {
                    right: 33.333%;
                }
        .overlay-bottom:nth-child(3) {
                    right: 0;
                }
    }

`



const WorkOverlay = () => (
    <>

        <Top>
            <div className='bottom'>
                <div className='overlay-bottom'></div>
                <div className='overlay-bottom'></div>
                <div className='overlay-bottom'></div>
            </div>
        </Top>

    </>
)

export default WorkOverlay