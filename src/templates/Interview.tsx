import React, { Component } from 'react'
import styled from 'styled-components'
import { map, split } from 'lodash/fp'
import Carousel from 'nuka-carousel'
import {
  profileBumjoon, profileDongeun, profileHyeonwoo, profileJusung,
  interviewLeft, interviewRight,
} from '../assets/images'
import { Heading, Paper } from '../components'
import { getNextIndex } from '../utils'

interface State {
  index: number
}

class Interview extends Component<null, State> {
  state = { index: 0 }

  render() {
    const { index } = this.state

    return (
      <Wrapper>
        <InterviewHeading>Interview</InterviewHeading>
        <RectangularPaper>
          <ImageBox>
            <Profile src={interviews[index].image} alt="프로필" />
          </ImageBox>
          <StyledCarousel
            autoplay
            framePadding="0 4rem"
            beforeSlide={slideIndex => this.setState({ index: getNextIndex(slideIndex, interviews) })}
            renderCenterLeftControls={({ previousSlide }) => (
              <Button
                type="button"
                onClick={previousSlide}
                backgroundUrl={interviewLeft}
              >
                이전
              </Button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Button
                type="button"
                onClick={nextSlide}
                backgroundUrl={interviewRight}
              >
                다음
              </Button>
            )}
            renderBottomCenterControls={() => <>{null}</>}
            wrapAround
          >
            {map(
              (interview: { content: string; name: string; image: string }) => (
                <Blockquote key={interview.name}>
                  {map(
                    paragraph => (
                      <Paragraph key={paragraph}>{paragraph}</Paragraph>
                    ),
                    split('\n', interview.content)
                  )}
                  <Cite>{interview.name}</Cite>
                </Blockquote>
              ),
              interviews
            )}
          </StyledCarousel>
        </RectangularPaper>
      </Wrapper>
    )
  }
}

export default Interview

const Wrapper = styled.div`
  margin-bottom: 15rem;
  padding: 0 2rem;
`

const InterviewHeading = styled(Heading)`
  width: 7rem;
  margin: 0 auto 6rem;
`

const Button = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  padding-top: 32px;
  background: url(${({ backgroundUrl }: { backgroundUrl: string }) => backgroundUrl}) no-repeat;
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: 2px solid ${({ theme }: { theme: { secondaryColor: string } }) => theme.secondaryColor};
  }
`

const RectangularPaper = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0.75rem;
`

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border: 10px solid #fff;
  border-radius: 50%;
`

const Profile = styled.img`
  width: 90px;
`

const StyledCarousel = styled(Carousel)`
  & li {
    // TODO: !impotant 대안 찾기
    top: 50% !important;
    transform: translateY(-50%);
  }
`

const Paragraph = styled.p`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.5;
  word-break: keep-all;
`

const Blockquote = styled.blockquote`
  text-align: center;
`

const Cite = styled.cite`
  display: block;
  opacity: 0.5;
  margin-top: 1.5rem;
  font-size: 0.75rem;
  font-style: initial;
`

interface Interview {
  name: string
  content: string
  image: string
  alt: string
}

// XXX: TS2740
const interviews = [
  {
    name: '- 5기 디자인 팀장, 김주성',
    content:
      '메쉬업과 함께하면서 많은 것을 배울 수 있었습니다.\n특히 개발자분들과 함께 협업하며 프로젝트를 할 수 있어서 좋았습니다.\n앞으로도 계속 메쉬업과 같이 하면서 서로 배워가면 좋겠습니다!\n메쉬업 흥합시다!! 메쉬업 화이팅!',
    image: profileJusung,
    alt: '김주성 프로필',
  },
  {
    name: '- 5기 안드 팀장, 이동근',
    content: '메쉬업 안드로이드 완전 핫합니다!\n스터디, 세미나, 모임 모든 것이 완-벽!\n6기부터 단장으로 찾아뵙겠습니다 :)',
    image: profileDongeun,
    alt: '이동근 프로필',
  },
  {
    name: '- 5기 메쉬업 단장, 김범준',
    content: '디자이너와 개발자가 함께 모인 메쉬업.\n5기 단장으로서 많은 걸 배울 수 있었습니다!\n다들 지원하셔서 같이 메쉬업해요!',
    image: profileBumjoon,
    alt: '김범준 프로필',
  },
  {
    name: '- 6기 백엔드 팀장, 조현우',
    content: '메쉬업 백엔드 스터디: ?\n메쉬업 백엔드 세미나: ?\n메쉬업 백엔드 모임: ?\n인증 안된 분들께는 정보를 제공하지 않습니다.',
    image: profileHyeonwoo,
    alt: '조현우 프로필',
  }
]
