import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode | string
}

const Header: React.SFC = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
`
