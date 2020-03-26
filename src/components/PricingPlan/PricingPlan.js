import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 300px;
    display: flex;
    justify-content: space-around;
    position: absolute;


  @media only screen and (max-width: 500px) {
        margin-top: 150px;
        flex-direction: column;
  }
`

const PlanWrapper = styled.div`
    border: solid black 1px;
    width: 400px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align: center;
    padding: 10px;
    margin: 20px;
    h1{
        font-size: 3rem;
        font-weight: 300;
    }

    h2{
        font-size: 3.5rem;
        font-weight: 300;
    }

    @media only screen and (max-width: 500px) {
       max-width: 300px;
       padding: 5px;
       margin: 10px;

       h1{
        font-size: 2rem;
        font-weight: 300;
    }

    h2{
        font-size: 2.5rem;
        font-weight: 300;
    }
  }
`

const PricingPlan = () => (
    <Wrapper>
        <PlanWrapper>
            <h1>Basic</h1>
            <p className="paragraph">
                Everything you need. For a reasonable price.
            </p>
            <p className="paragraph">
                2 Hour Shoot
            </p>
            <p className="paragraph">
                3 Micro Videos (15-30 seconds)
            </p>
            <p className="paragraph">
                Great for Social Media Ads/Content
            </p>
            <h2>NOK 3500</h2>
        </PlanWrapper>

        <PlanWrapper>
            <h1>PRO</h1>
            <p className="paragraph">
                More than anyone can give –
                <br />
                for less than anywhere else.
            </p>
            <p className="paragraph">
                1/2 Day Shoot
            </p>
            <p className="paragraph">
                60-120 Second Video
            </p>
            <p className="paragraph">
                Ideal Introductory Video for Your Company
            </p>
            <h2>NOK 6000</h2>
        </PlanWrapper>

        <PlanWrapper>
            <h1>VIP</h1>
            <p className="paragraph">
                Ok, we get it. You’re the boss now.
                <br />
                Just tell us what you need.
            </p>
            <p className="paragraph">
                Full Day Shoot
            </p>
            <p className="paragraph">
                60-120 Second “Sizzle” Video
            </p>
            <p className="paragraph">
                6 Micro (15-30 second) Videos
            </p>
            <h2>NOK 8000</h2>
        </PlanWrapper>
    </Wrapper>
);

export default PricingPlan;