import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }
`
export const Box = styled.div`
  border: 1px solid ${cores.rosa_escuro};
  border-top: none;
  width: 100%;
  height: 180px;
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
  margin: 16px 7px 16px 7px;
  color: ${cores.rosa_escuro};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    line-height: 18px;
  }
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
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa_escuro};
  margin: 0;
`
export const Estrela = styled.img`
  width: 21px;
  height: 21px;
`

export const NotaContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Capa = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`
