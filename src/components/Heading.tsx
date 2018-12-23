import React from 'react'
import styled from 'styled-components'

interface Props {
  as?: any
  children: React.ReactNode | string
}

const Heading: React.FunctionComponent<Props> = ({ children, ...rest }) => (
  <StyledHeading {...rest}>
    <Span>{children}</Span>
  </StyledHeading>
)

const StyledHeading = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.primaryColor};
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    bottom: .35rem;
    left: 0;
    opacity: 0.5;
    width: 100%;
    height: .8rem;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`

const Span = styled.span`
  position: relative;
  z-index: 10;
`

export default Heading
