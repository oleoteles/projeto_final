import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa_escuro};
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
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

export const BotaoModal = styled.button`
  background-color: ${cores.rosa_claro};
  color: ${cores.rosa_escuro};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 7px;
  text-align: center;
  margin: 8px 0;
  cursor: pointer;
  border: none;
  width: 280px;
  height: 26px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosa_escuro};
  padding: 32px;
  max-width: 1024px;
  max-height: 344px;
  display: flex;
  gap: 24px;
  margin: auto;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
    max-height: 300px;
    padding: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .img-close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;

    &:hover {
      color: ${cores.rosa_claro};
    }
  }

  h4 {
    color: ${cores.branco};
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 8px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
  }

  p {
    color: ${cores.branco};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 12px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: 8px;
      right: 8px;
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 200px;
  }
`
