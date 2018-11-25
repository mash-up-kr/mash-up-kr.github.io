import { css } from 'styled-components'
import { join, keys, reduce } from 'lodash'

interface Indexable {
  [key: string]: any;
}

const sizes: Indexable = {
  tablet: 576,
  desktop: 1200,
}

const media: Indexable = reduce(keys(sizes), (acc: Indexable, label: string): object => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => join(
    css`
      @media (min-width: ${sizes[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `,
    '',
  )

  return acc
}, {})

export default media
