import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: #232323;
  color: #fafafa;
`

const Footer = () => {
  return (
    <Container>
      <span>Footer</span>
    </Container>
  )
}

export default Footer
