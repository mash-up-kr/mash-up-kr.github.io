import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash/fp'
import { media, readableHiddenContent } from '../styles'

const Navbar: React.FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menuItems
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Heading>글로벌 네비게이션</Heading>
        <Menu>
          {map(item => (
            <MenuItem key={item.label}>
              <LinkBox to={item.url}>{item.label}</LinkBox>
            </MenuItem>
          ), JSON.parse(data.site.siteMetadata.menuItems))}
        </Menu>
      </Wrapper>
    )}
  />
)

export default Navbar

const Wrapper = styled.nav`
  ${media.desktop`
    flex-grow: 1;
  `}
`

const Heading = styled.h2`
  ${readableHiddenContent}
`

const Menu = styled.ul`
  overflow: auto;
  display: flex;
  color: #FFF;
  border-bottom: 1px solid #FFF;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  ${media.mobile`
    justify-content: space-around;
  `}
  ${media.tablet`
    border-bottom: none;
    font-size: .9rem;
  `}
`

const MenuItem = styled.li``

const LinkBox = styled(Link)`
  display: block;
  height: 100%;
  padding: 0.8rem;
`
