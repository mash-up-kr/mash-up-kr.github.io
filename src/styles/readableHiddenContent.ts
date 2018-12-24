import { css } from 'styled-components'

const readableHiddenContent = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
`

export default readableHiddenContent
