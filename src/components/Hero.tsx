import styled from 'styled-components'
import { mainPhoto, mobileBg } from '../assets/images'

const Hero = styled.div`
  position: relative;
  background: ${({ theme }) => theme.backgroundColor} url(${mainPhoto}) center top / 150% no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 40%;
    width: 100%;
    height: 1500px;
    background: url(${mobileBg}) no-repeat;
    background-size: cover;
  }
  & > * {
    position: relative;
  }
`

export default Hero
