import React from 'react'
import styled from 'styled-components'
import { Heading, Paper } from '../components'
import { crownIcon, meritIcon, visionIcon } from '../assets/images'

const Goal: React.FunctionComponent = () => (
  <Wrapper>
    <GoalHeading>Mash-Up</GoalHeading>
    <TagList>
      <TagItem>#IT동아리</TagItem>
      <TagItem>#시너지</TagItem>
      <TagItem>#성장</TagItem>
    </TagList>
    <Paragraph margined centered>
      메쉬업은 디자이너와 개발자가 함께 성장하는 동아리입니다. <br />
      메쉬업은 함께 소통하는 과정을 통해 좋은 시너지 효과를 내며, <br />
      더욱 창의적이고 새로운 IT 서비스를 세상에 선보입니다. <br />
      이를 통해 메쉬업은 더 많은 사람들에게 더 편리한 삶을 제공하고자 합니다.
    </Paragraph>
    <RectangularPaper as="section">
      <SubHeading>
        <Eng lang="en">
          <Span>Merit</Span>
        </Eng>
        <Kor>메쉬업의 메리트</Kor>
      </SubHeading>
      <Paragraph>
        메쉬업은 함께 재능을 나누고, 소통하며 새로운 어플리케이션을 만드는 프로젝트를 진행합니다. 이와 함께, 효율적이고 체계적인 프로세스를
        통해 IT 업계의 능력 있는 실무자로서 성장합니다.
      </Paragraph>
      <MeritIcon />
    </RectangularPaper>
    <RectangularPaper as="section">
      <SubHeading>
        <Eng lang="en">
          <Span>Vision</Span>
        </Eng>
        <Kor>메쉬업의 궁극적인 목표</Kor>
      </SubHeading>
      <Paragraph>
        메쉬업은 함께 재능을 나누고, 소통하며 새로운 어플리케이션을 만드는 프로젝트를 진행합니다. 이와 함께, 효율적이고 체계적인 프로세스를
        통해 IT 업계의 능력 있는 실무자로서 성장합니다.
      </Paragraph>
      <VisionIcon />
    </RectangularPaper>
  </Wrapper>
)

export default Goal

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`

const GoalHeading = styled(Heading)`
  width: 7rem;
  margin-bottom: 1.2rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.5rem;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background: url(${crownIcon}) 50% / cover;
  }
`

const TagList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  margin-bottom: 2.5rem;
  text-align: center;
`

const TagItem = styled.li`
  width: 4.6rem;
  padding: 0.1rem 0.2rem 0.2rem;
  color: #fff;
  background-color: #6012fe;
  border-radius: 2rem;
  font-size: 0.75rem;
`

const Paragraph = styled.p`
  margin: ${({ margined }: { margined?: boolean; centered?: boolean }) => (margined ? '0 1rem 6rem' : '0')};
  font-size: 0.75rem;
  text-align: ${({ centered }: { mragined?: boolean; centered?: boolean }) => (centered ? 'center' : 'left')};
  line-height: 1.7;
  word-break: keep-all;
`

const RectangularPaper = styled(Paper)`
  position: relative;
  margin: 0 1rem 1.5rem;
  padding: 1.4rem 1.75rem;
`

const SubHeading = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.9rem;
`

const Eng = styled.span`
  position: relative;
  margin-right: 0.6rem;
  padding: 0 0.25rem;
  font-size: 1.2rem;
  &::before {
    content: '';
    position: absolute;
    bottom: 0.25rem;
    left: 0;
    opacity: 0.5;
    width: 100%;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.secondaryColor};
    font-weight: 700;
  }
`

const Span = styled.span`
  position: relative;
`

const Kor = styled.span``

const MeritIcon = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.75rem;
  width: 46px;
  height: 30px;
  background: url(${meritIcon}) no-repeat;
`

const VisionIcon = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.75rem;
  width: 27px;
  height: 33px;
  background: url(${visionIcon}) no-repeat;
`
