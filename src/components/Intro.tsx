import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../styles'

const Intro: React.FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            videoUrl
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Paragraph aria-describedby="footnote">
          <strong>Mash-Up</strong>, 디자이너와 개발자가 함께 성장하는 앱개발 동아리
        </Paragraph>
        <Footnote id="footnote" lang="en">
          <strong>Mash-Up is an IT group</strong> where designers and developers grow together.
        </Footnote>
        <VideoLink
          href={data.site.siteMetadata.videoUrl}
          target="_blank"
        >
          Play the video
        </VideoLink>
      </Wrapper>
    )}
  />
)

export default Intro

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
  padding: 4rem 0;
  ${media.tablet`
      padding: 8rem 0;
  `}
`

const Paragraph = styled.p`
  width: 80%;
  margin-bottom: 1rem;
  padding-left: .2rem;
  color: #FFF;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.6;
  word-break: keep-all;
  ${media.tablet`
    max-width: 360px;
    font-size: 1.5rem;
  `}
`

const Footnote = styled.p`
  order: -1;
  display: none;
  margin-bottom: .5rem;
  padding: .3rem .5rem;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.16);
  border-radius: 23px;
  font-size: .8rem;
  backdrop-filter: blur(30px);
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, .16);
  object-fit: contain;
  ${media.tablet`
    display: block;
  `}
`

const VideoLink = styled.a`
  display: block;
  min-width: 160px;
  padding: .75rem 1.3rem;
  color: #FFF;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: .75rem;
  font-weight: 600;
  text-align: center;
  ${media.tablet`
    width: 240px;
    padding: 1rem
    font-size: .9rem;
  `}
  ${media.desktop`
    width: 320px;
    font-size: 1.2rem;
  `}
`
