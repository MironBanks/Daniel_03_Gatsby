import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 550px;

  h1 {
    font-size: 52px;
    margin: 0;
  }

  p {
    font-size: 1.3rem;
    font-weight: 300;
    margin: 15px 0 0;
  }

  @media only screen and (max-width: 500px) {
                    text-align: right;

                    h1 {
                        font-size: 2.5rem;
                        margin: 0;
                      }

                      .paragraph{
                        font-size: 1.1rem;
                        font-weight: 300;
                        margin: 15px 0 0;
                        text-align: left;
                        }
`;

const PageInfo = ({ title1, title2, paragraph, paragraph2, paragraph3 }) => (
  <Wrapper>
    <h1>{title1}</h1>
    <h1>{title2}</h1>
    <p className="pageInfoParagraph">{paragraph}</p>
    <p className="paragraph">{paragraph2}</p>
    <p className="paragraph">{paragraph3}</p>
  </Wrapper>
);

export default PageInfo;