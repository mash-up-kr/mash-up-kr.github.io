import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import Navbar from './Navbar'
import { logo } from '../../static/images'

interface Props {
  children: React.ReactNode | string
}

const Header: React.SFC = ({ children }) => (
  <StyledHeader>
    <Title>{children}</Title>
    <Navbar />
    <Intro />
  </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
  padding-top: 1.1rem;
`

const Title = styled.h1`
  overflow: hidden;
  width: 140px;
  height: 20px;
  margin: 0 auto 1.5rem;
  padding-top: 20px;
  background: url(${logo}) no-repeat;
`
