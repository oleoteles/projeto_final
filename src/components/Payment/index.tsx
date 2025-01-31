import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import InputMask from 'react-input-mask'

import { close, addCardInfos } from '../../store/reducers/pay'
import { clear } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import { usePurchaseMutation } from '../../services/api'

import { SButton } from '../Dishes/styles'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const { isOpen } = useSelector((state: RootReducer) => state.pay)
  const { client } = useSelector((state: RootReducer) => state.check)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closePay = () => {
    dispatch(close())
  }

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  const handleSendTicket = () => {
    form.handleSubmit
  }

  const handleCompletePurchase = () => {
    dispatch(clear())
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .max(4, 'O campo não pode ter mais de 4 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: client.products,
        delivery: client.delivery,
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })

      dispatch(
        addCardInfos({
          payment: {
            card: {
              name: values.cardDisplayName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        })
      )
    }
  })

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <S.PaymentContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closePay} />
          <S.SideBar>
            {isSuccess && data ? (
              <>
                <S.Title>Pedido realizado - {data.orderId}</S.Title>
                <S.P className="margin-bottom">
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </S.P>
                <S.P className="margin-bottom">
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras
                </S.P>
                <S.P className="margin-bottom">
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </S.P>
                <S.P className="margin-bottom">
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </S.P>
                <SButton
                  title="Concluir compra"
                  type="button"
                  onClick={handleCompletePurchase}
                >
                  Concluir
                </SButton>
              </>
            ) : (
              <>
                <S.Title>
                  Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
                </S.Title>
                <S.InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    id="cardDisplayName"
                    type="text"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('cardDisplayName') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup className="width-numbercard">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.PButton
                  type="submit"
                  title="Clique aqui para finalizar a compra"
                  className="payment-button"
                  onClick={handleSendTicket}
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                </S.PButton>
                <S.PButton onClick={closePay} type="button">
                  Voltar para a edição de endereço
                </S.PButton>
              </>
            )}
          </S.SideBar>
        </S.PaymentContainer>
      </form>
    </>
  )
}

export default Payment
