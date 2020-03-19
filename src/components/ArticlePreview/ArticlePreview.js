import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby'

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 33.3333vw;
  height: 50vh;
  background-color: hsl(0, 0%, 95%);
  background-size: cover;
  overflow: hidden;
  opacity: 0.85;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 30px;
  bottom: 65px;
  width: 80%;
  min-height: 40px;
  color: white;
  padding: 5px 15px;

  h2{
    font-size: 2rem;
    line-height: 3.4rem;
    width: 85%;
    margin-top: 16px;
    color: white;
  }

  p {
    margin-top: 156px;
          font-size: 1.6rem;
          opacity: 0.8;
          color: white;
          font-weight: 600;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;



const Preview = ({ title, excerpt, image, slug }) => (
  <PreviewWrapper to={`/news/${slug}`}>
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
