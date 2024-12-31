import styled from 'styled-components'
import { cores } from '../../styles'

export const Vector = styled.header`
  display: block;
  background-color: ${cores.rosa_claro};
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextoBase = styled.h3`
  color: ${cores.rosa_escuro};
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 83px;
  margin-top: 64px;
`

export const Nome = styled(TextoBase)`
  margin-left: 171px;
`

export const Carrinho = styled(TextoBase)`
  margin-right: 171px;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin: 0 auto;
`

export const ImgResto = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
