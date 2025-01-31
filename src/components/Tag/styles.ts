import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.dark_pink};
  color: ${colors.light_pink};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
`
