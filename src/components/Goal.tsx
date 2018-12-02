import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import readableHiddenContent from '../styles/readable-hidden-content'
import { crownIcon } from '../assets/images'

const Goal: React.SFC = () => (
  <Wrapper>
    <GoalHeading>Mash-Up</GoalHeading>
  </Wrapper>
)

export default Goal

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GoalHeading = styled(Heading)`
  width: 110px;
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
