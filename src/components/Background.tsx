import styled from 'styled-components'
import { mainPhoto } from '../../static/images'

const Background = styled.div`
  position: relative;
  height: 3333px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(
        to bottom,
        rgba(121, 118, 228, .6),
        rgba(121, 118, 228, .6) 20%,
        rgba(121, 118, 228, 0.8) 25%,
        rgba(121, 118, 228, 1) 30%,
        rgba(121, 118, 228, 1)
      ),
      #FFF url(${mainPhoto}) center top / 150% no-repeat;
    filter: blur(2px);
  }
`

export default Background
