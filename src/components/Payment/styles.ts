import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
`

export const PaymentContainer = styled.div`
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

  .payment-button {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.dark_pink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  .margin-bottom {
    margin-bottom: 24px;
  }
`

export const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.light_pink};
  line-height: 22px;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${colors.light_pink};
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div`
  label {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    color: ${colors.light_pink};
  }

  input {
    background-color: ${colors.light_pink};
    border: 1px solid ${colors.light_pink};
    height: 32px;
    padding: 0 8px;
    margin-bottom: 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
      color: red;
    }
  }

  #cardNumber {
    width: 228px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 168px;
    }
  }

  #cardCode {
    width: 84px;
  }
`

export const PButton = styled.button`
  background-color: ${colors.light_pink};
  color: ${colors.dark_pink};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 16px;
  text-align: center;
  cursor: pointer;
  border: none;
  width: 100%;
`
