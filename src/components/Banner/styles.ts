import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 280px;
  display: block;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.src});
  background-repeat: 'no-repeat';
  background-size: 'cover';
  background-position: center;
  position: relative;
`

export const Title = styled.h2`
  text-transform: capitalize;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
  position: absolute;
  z-index: 1;
`

export const NameRest = styled.h2`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  margin-top: 200px;
  position: absolute;
  z-index: 1;
`
