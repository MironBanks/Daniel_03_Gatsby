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
    font-size: 18px;
    margin: 15px 0 0;
  }
`;

const PageInfo = ({ title1, title2, paragraph }) => (
  <Wrapper>
    <h1>{title1}</h1>
    <h1>{title2}</h1>
    <p className="pageInfoParagraph">{paragraph}</p>
  </Wrapper>
);

export default PageInfo;