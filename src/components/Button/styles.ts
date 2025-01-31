import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const MainButton = styled(Link)`
  background-color: ${colors.dark_pink};
  color: ${colors.light_pink};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-align: center;
  margin: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`
