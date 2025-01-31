import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, addClientInfos } from '../../store/reducers/check'
import { open } from '../../store/reducers/pay'

import * as S from './styles'
import { getTotalPrice } from '../../utils'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.check)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCheck = () => {
    dispatch(close())
  }

  const openPay = () => {
    dispatch(open())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter pelo menos 9 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        2,
        'O campo precisa ter pelo menos 2 caracteres'
      )
    }),
    onSubmit: (values) => {
      dispatch(
        addClientInfos({
          products: items.map((item) => ({
            id: item.id,
            price: getTotalPrice(items)
          })),

          delivery: {
            receiver: values.fullName,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.cep,
              number: Number(values.addressNumber),
              complement: values.complement
            }
          }
        })
      )
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CheckoutContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCheck} />
        <S.SideBar>
          <S.Title>Entrega</S.Title>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
                mask="99999-999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="addressNumber">Número</label>
              <input
                id="addressNumber"
                type="text"
                name="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('addressNumber') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
            />
          </S.InputGroup>
          <S.CButton
            onClick={openPay}
            title="Clique aqui para continuar com o pagamento"
            type="submit"
            className="checkout-button"
            disabled={!form.isValid || !form.dirty}
          >
            Continuar com o pagamento
          </S.CButton>
          <S.CButton
            onClick={closeCheck}
            title="Clique aqui para voltar para o carrinho"
            type="button"
          >
            Voltar para o carrinho
          </S.CButton>
        </S.SideBar>
      </S.CheckoutContainer>
    </form>
  )
}

export default Checkout
