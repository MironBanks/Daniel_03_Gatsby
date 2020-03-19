import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Image from "gatsby-image"
import styled from 'styled-components'

import IntroOverlay from "../components/IntroOverlay/IntroOverlay"
import IntroOverlaySecond from '../components/IntroOverlay/IntroOverlaySecond'
import {
    pageTransition,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
} from '../components/Animation'
import Button from '../components/Button/Button'


const PostWrapper = styled.div`
    width: 60vw;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const PageHeader = styled.div`
   width: 350px;
   display: flex;
   justify-content: space-between;
`

const PostTitle = styled.h1`
    margin: 20px 0;
    font-size: 5rem;
    font-weight: 700;
    text-align: left;
`
const PageImage = styled.div`
margin: 10px 30px;
`

const PostRenderer = styled.div`
    width:80%;
    padding: 40px;
    border-left: 30px #596C68 solid;
    margin-bottom: 20px;
`

export const query = graphql`
    query querySingleArticles($id: String!) {
        datoCmsPortfolio(id: {eq: $id}) {
            title
            featuredImage {
                fixed(width: 500) {
                    ...GatsbyDatoCmsFixed_tracedSVG
                }
            }
            articleContent{
                ... on DatoCmsHeading{
                    headingContent
                    id
                }
                ... on DatoCmsParagraph {
                    paragraphContent
                    id
                }
                ... on DatoCmsArticleImage{
                    imageData{
                            fixed(width: 500) {
                            ...GatsbyDatoCmsFixed_tracedSVG
                        }
                    }
                    id
                }
            }
        }
    }
`;


const PostLayout = ({ data }) => {

    let videoInfo = useRef(null)
    let pageTitle = useRef(null)
    let pageBTN = useRef(null)

    useEffect(() => {
        pageTransition('.overlay, .overlaySecond')
        fadeInUp(videoInfo)
        fadeInDown(pageTitle)
        fadeInLeft(pageBTN)
    })

    return (
        <PostWrapper>
            <IntroOverlay />
            <IntroOverlaySecond />
            <PostTitle ref={el => (pageTitle = el)}>{data.datoCmsPortfolio.title}</PostTitle>
            <PageHeader ref={el => (pageBTN = el)}>
                <Button> <Link to="/news">Check my other work</Link></Button>
            </PageHeader>
            <PageImage>
                <Image fixed={data.datoCmsPortfolio.featuredImage.fixed} />
            </PageImage>
            <PostRenderer ref={el => (videoInfo = el)}>
                <div>{data.datoCmsPortfolio.articleContent.map(item => {
                    const itemKey = Object.keys(item)[1];

                    switch (itemKey) {
                        case 'paragraphContent':
                            return <p key={item.id}>{item[itemKey]}</p>;
                        case 'headingContent':
                            return <h2 key={item.id}>{item[itemKey]}</h2>;
                        case 'imageData':
                            return <Image alt="post_image" key={item.id} fixed={item[itemKey].fixed} />
                        default:
                            return null;
                    }
                })}</div>
            </PostRenderer>
        </PostWrapper>
    )
}

export default PostLayout