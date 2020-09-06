import React from "react"
import styled from "styled-components"
import GlobalStyle from "./global"

const Container = styled.header`
  padding: 1rem;
  background-color: #232323;
  color: #fafafa;
`

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
  return (
    <Container>
      <GlobalStyle />
      <span>{siteTitle}</span>
    </Container>
  )
}

export default Header
