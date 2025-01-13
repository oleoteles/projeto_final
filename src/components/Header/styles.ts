import styled from 'styled-components'
import { cores } from '../../styles'

export const Vector = styled.header`
  width: 100%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Nome = styled.h1`
  color: ${cores.rosa_escuro};
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  align-items: center;
  margin-left: 350px;
  margin-right: 350px;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 140px;
`
