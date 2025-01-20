import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa_claro};
  padding: 40px 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Logo = styled.img`
  margin-bottom: 32.5px;
`

export const Links = styled.ul`
  display: flex;
  margin-bottom: 80px;
`

export const Link = styled.a`
  margin-right: 8px;
`

export const Descricao = styled.p`
  color: ${cores.rosa_escuro};
  font-weight: 400;
  font-size: 10px;
  text-align: center;
`
