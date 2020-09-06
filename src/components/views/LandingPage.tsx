import React from "react"
import GlobalStyle from "../global"

import styled from "styled-components"
import Instagram from "../../assets/instagram.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f0ed;
  color: #232323;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-top: 10vh;
  font-family: "Satisfy";

  /* font-size: 3rem; */
`
const Subtitle = styled.h4`
  text-align: center;
  font-weight: 300;
`

const Footer = styled.footer`
  margin: auto auto 0;
  max-width: 800px;
  width: 100%;
  padding: 1rem;
  background-color: #ece5df;
`
const InstagramIcon = styled(Instagram)`
  width: 2rem;
  height: 2rem;
  fill: #636363;
`

export const LandingPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Title>Dovelia x Lashes</Title>
      <Subtitle>Lorem ipsum very nice ipsum</Subtitle>

      <Footer>
        <InstagramIcon />
        <h5></h5>
      </Footer>
    </Container>
  )
}

export default LandingPage
