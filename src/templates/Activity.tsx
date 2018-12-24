import React from 'react'
import styled from 'styled-components'
import { appImage } from '../assets/images'
import { Heading } from '../components'
import { media } from '../styles'

const Activity: React.FunctionComponent = () => (
  <Wrapper>
    <ActivityHeading>Activity</ActivityHeading>
    <Paragraph>
      메쉬업은 매주 토요일마다 함께 모여 활동하는 동아리입니다. <br />
      메쉬업은 개발자와 디자이너가 함께 모이는 전체 회의와 각 직군 및 팀 별 스터디 활동을 병행하여,
      실질적인 앱을 개발하는 데에 필요한 활동을 하고 있습니다. <br />
      이를 통해 관련 직군에 대한 전문적인 지식 함양은 물론,
      타 직군에 대해 이해하고 자신이 직접 개발한 앱을 출시해볼 수 있습니다.
    </Paragraph>
  </Wrapper>
)

export default Activity

const Wrapper = styled.div`
  padding-bottom: 15rem;
  background: url(${appImage}) 50% 90% no-repeat;
  ${media.desktop`
    margin: 0 4rem 15rem;
    padding: 10rem 0;
    background: url(${appImage}) 100% 50% / contain no-repeat;
  `}
`

const ActivityHeading = styled(Heading)`
  width: 7rem;
  margin: 0 auto 1.5rem;
  ${media.desktop`
    font-size: 2rem;
    margin: 0 0 1.5rem;
    &::after {
      height: 18px;
    }
  `}
`

const Paragraph = styled.p`
  margin: 0 1.5rem;
  font-size: .75rem;
  text-align: center;
  line-height: 1.7;
  word-break: keep-all;
  ${media.tablet`
    font-size: .9rem;
  `}
  ${media.desktop`
    max-width: 500px;
    margin: 0;
    text-align: left;
  `}
`
