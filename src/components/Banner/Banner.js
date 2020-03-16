import React from "react"
import styled from 'styled-components'



const Main = styled.div`
    height: calc(50vh - 100px);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Row = styled.div`
    flex-direction: column;
    justify-content: center;

    h2{
        font-size: 3rem;
        line-height: 4.2rem;
        font-weight: 700;
        z-index: 10;
        color: white;
        mix-blend-mode: difference;

        @media only screen and (max-width: 500px) {
                padding-left: 10px;
                margin-top: 72px;
                font-size: 1.7rem;
                line-height: 2.2rem;
                }
    }

    .line{
        margin-bottom: 8px;
        height: 68px;
        position: relative;
        overflow: hidden;

        @media only screen and (max-width: 500px) {
                height: 38px;
                }

        span{
            position: absolute;
        }
    }
`
const BtnRow = styled.div`
    margin-top: 100px;
    width: 256px;
    position: relative;
    z-index: 2;

    a{
        text-decoration: none;
        font-size: 1.6rem;
        color: black;
        font-weight: 600;


        @media only screen and (max-width: 500px) {
                padding-left: 10px;
                font-size: 1.1rem;
                }

    }
`





const Banner = ({ title }) => (
    <>

        <Main>
            <div className="container">
                <Row>
                    <h2 ref={title}>
                        <div className="line">
                            <span>Creating unique video is</span>
                        </div>
                        <div className="line">
                            <span>what we do</span>
                        </div>
                    </h2>
                    <BtnRow>
                        <a href="/">
                            More about Us
                        </a>
                    </BtnRow>
                </Row>
            </div>

        </Main>
    </>
)

export default Banner
