import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira_de_reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.rosa_escuro};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.branco};
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.rosa_claro};
  width: 344px;
  height: 100px;
  margin-top: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    color: ${cores.rosa_escuro};
    font-weight: 900;
    font-size: 18px;
    margin-top: 8px;
  }

  span {
    display: block;
    color: ${cores.rosa_escuro};
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
