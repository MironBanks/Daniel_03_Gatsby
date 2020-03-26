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
            <h1>VIP</h1>
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
    </Wrapper>
);

export default PricingPlan;