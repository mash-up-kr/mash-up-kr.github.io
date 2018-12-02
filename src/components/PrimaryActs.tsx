import React from 'react'
import styled from 'styled-components'
import Paper from './Paper'
import media from '../styles/media'
import readableHiddenContent from '../styles/readable-hidden-content'
import { projectIcon, seminarIcon, studyIcon } from '../../static/images'

const PrimaryActs: React.SFC = () => (
  <Wrapper>
    <Heading>메쉬업의 주요 활동</Heading>
    <ActList>
      <RoundedPaper as="li">
        <ActTitle>세미나</ActTitle>
        <Paragraph>메쉬업은 각 팀에서 혹은 전체 모임에서 매주 진행하는 세미나를 통해 성장합니다.</Paragraph>
        <Figure>
          <Image src={seminarIcon} alt="" />
          <Figcaption>Seminar</Figcaption>
        </Figure>
      </RoundedPaper>
      <RoundedPaper as="li">
        <ActTitle>프로젝트</ActTitle>
        <Paragraph>메쉬업은 개발자와 디자이너가 함께 약 6개월간 앱 개발 프로젝트를 진행하며 창의성을 발휘합니다.</Paragraph>
        <Figure>
          <Image src={projectIcon} alt="" />
          <Figcaption>Project</Figcaption>
        </Figure>
      </RoundedPaper>
      <RoundedPaper as="li">
        <ActTitle>스터디 활동</ActTitle>
        <Paragraph>메쉬업은 팀 별로 혹은 자율적인 스터디 진행을 통해 긍정적이고 강력한 시너지를 냅니다.</Paragraph>
        <Figure>
          <Image src={studyIcon} alt="" />
          <Figcaption>Study</Figcaption>
        </Figure>
      </RoundedPaper>
    </ActList>
  </Wrapper>
)

export default PrimaryActs

const Wrapper = styled.section`
`

const Heading = styled.h2`
  ${readableHiddenContent}
`

const ActList = styled.ul`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`

const RoundedPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-bottom: 3.5rem;
  padding: 2.5rem;
  border-radius: 0.6rem;
  text-align: center;
`

const ActTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
`

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  word-break: keep-all;
`

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: -1;
  margin-bottom: .5rem;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`

const Figcaption = styled.figcaption`
  font-size: 1.8rem;
  font-weight: 800;
`
