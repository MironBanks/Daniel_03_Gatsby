import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Header from "../components/Navigation/Header"




const IndexPage = () => (
  <>
    <Header />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
