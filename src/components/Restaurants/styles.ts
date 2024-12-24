import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.section`
  background-color: ${cores.branco};
  position: relative;
  overflow: hidden;

  ${TagContainer} {
    margin-right: 4px;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
export const Box = styled.div`
  border: 1px solid ${cores.rosa_escuro};
  width: 100%;
  max-width: 472px;
  height: 181px;
  position: relative;
  overflow: hidden;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin: 8px 0 16px;
  margin-left: 7px;
  color: ${cores.rosa_escuro};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px 0 0;
  margin-left: 7px;
  color: ${cores.rosa_escuro};
`

export const Category = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Nota = styled.h3`
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  top: 8px;
  right: 16px;
  display: flex;
  justify-content: flex-end;
  color: ${cores.rosa_escuro};
`

