import styled from 'styled-components'
import { mainPhoto } from '../assets/images'

const Hero = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundColor} url(${mainPhoto}) center top / 150% no-repeat;
    filter: blur(2px);
  }
`

export default Hero
