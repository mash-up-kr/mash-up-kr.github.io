import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Intro, Navbar } from '../components'
import { logo } from '../assets/images'
import { media } from '../styles'

interface Props {
  children: React.ReactNode | string
}

const Header: React.FunctionComponent<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <StyledHeader>
        <Top>
          <Anchor href={data.site.siteMetadata.siteUrl}>
            <Title>{children}</Title>
          </Anchor>
          <Navbar />
        </Top>
        <Intro />
      </StyledHeader>
    )}
  />
)

export default Header

const StyledHeader = styled.header`
  padding-top: 1.1rem;
`

const Top = styled.div`

`

const Anchor = styled.a`
  display: block;
  width: 140px;
  margin: 0 auto 1.5rem;
`

const Title = styled.h1`
  overflow: hidden;
  height: 20px;
  padding-top: 20px;
  background: url(${logo}) no-repeat;
`
