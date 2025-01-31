import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Vector = styled.header`
  display: block;
  background-color: ${colors.light_pink};
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

export const TextBase = styled.h3`
  color: ${colors.dark_pink};
  font-weight: 900;
  font-size: 18px;
  margin: 0;
`

export const Name = styled(TextBase)``

export const Car = styled.a`
  color: ${colors.dark_pink};
  font-weight: 900;
  font-size: 18px;
  margin: 0;
  cursor: pointer;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-left: 100px;
`
