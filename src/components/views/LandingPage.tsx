import GlobalStyle from "../global"
import React from "react"

import styled from "styled-components"
import Instagram from "../../assets/instagram.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f0ed;
  /* Saved for later: #f7e6ef */
  color: #232323;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-top: 10vh;
  font-family: "Satisfy", cursive;
  margin-bottom: 0.75rem;
`
const Subtitle = styled.h4`
  text-align: center;
  font-weight: 300;
`

const InstagramText = styled(Subtitle)`
  margin: 0;
  margin-left: 0.5rem;
  font-family: "Satisfy", cursive;
`

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #ece5df;
  margin: auto auto 0;
`

const Socials = styled.div`
  margin: auto;
  max-width: 800px;
`

const SocialLink = styled(OutboundLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #232323;
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
        <Socials>
          <SocialLink
            href="https://instagram.com/doveliaxlashes"
            rel="noreferrer noopener"
          >
            <InstagramIcon />
            <InstagramText>doveliaxlashes</InstagramText>
          </SocialLink>
        </Socials>
      </Footer>
    </Container>
  )
}

export default LandingPage
