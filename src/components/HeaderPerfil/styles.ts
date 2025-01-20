import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Vector = styled.header`
  display: block;
  background-color: ${cores.rosa_claro};
  width: 100%;
  height: 185px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 171px;
  height: 100%;
`

export const TextoBase = styled.h3`
  color: ${cores.rosa_escuro};
  font-weight: 900;
  font-size: 18px;
  margin: 0;
`

export const Nome = styled(TextoBase)``

export const Carrinho = styled.a`
  color: ${cores.rosa_escuro};
  font-weight: 900;
  font-size: 18px;
  margin: 0;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`
