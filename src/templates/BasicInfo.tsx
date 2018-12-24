import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash/fp'
import styled from 'styled-components'
import { media, readableHiddenContent } from '../styles'

const BasicInfo: React.FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            infoItems
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Heading>기본 정보</Heading>
        <InfoList>
          {map(item => (
            <InfoItem key={item.title}>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoContent>
                <Data data-value={item.content}>{item.content}</Data>
                <Unit>{item.unit}</Unit>
              </InfoContent>
            </InfoItem>
          ), JSON.parse(data.site.siteMetadata.infoItems))}
        </InfoList>
      </Wrapper>
    )}
  />
)

export default BasicInfo

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto 4rem;
  ${media.tablet`
    margin: 0 auto 5rem;
  `}
`

const Heading = styled.h2`
  ${readableHiddenContent}
`

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #FFF;
  font-weight: 500;
`

const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 33.33%;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  text-align: center;
  &:not(:nth-child(3)):not(:last-child) {
    border-right: 1px solid #FFF;
  }
  ${media.tablet`
    width: 20%;
    max-width: 240px;
    &:not(:last-child) {
      border-right: 1px solid #FFF;
    }
  `}
`

const InfoTitle = styled.h3`
  order: 1;
  font-size: 0.8rem;
  &::before {
    content: '메쉬업의';
    display: block;
    line-height: 1.65;
  }
  ${media.tablet`
    font-size: 1rem;
  `}
`

const InfoContent = styled.p`
  margin-bottom: 0.6rem;
`

const Data = styled.data`
  font-size: 1.4rem;
  font-weight: 700;
  ${media.tablet`
    font-size: 1.6rem;
    font-weight: 900;
  `}
`

const Unit = styled.span`
  font-size: 0.7rem;
  ${media.tablet`
    font-size: 1rem;
  `}
`
