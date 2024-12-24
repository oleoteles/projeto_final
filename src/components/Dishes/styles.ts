import  styled  from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa_escuro};
  padding: 8px;
`
export const Titulo = styled.h3`
  color: ${cores.rosa_claro};
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin: 8px 0;
`

export const Descricao = styled.p`
  color: ${cores.rosa_claro};
  font-weight: 400;
  font-size: 14px;
  display: block;
  margin-top: 8px;
  line-height: 22px;
`

export const Botao = styled.button`
  background-color: ${cores.rosa_claro};
  color: ${cores.rosa_escuro};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 16px;
  text-align: center;
  margin: 8px 0;
  cursor: pointer;
  border: none;
  width: 100%;
`
