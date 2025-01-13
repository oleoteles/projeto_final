import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Botao = styled(Link)`
  background-color: ${cores.rosa_escuro};
  color: ${cores.rosa_claro};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-align: center;
  margin: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`
