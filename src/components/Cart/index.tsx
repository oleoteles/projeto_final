import { useDispatch, useSelector } from 'react-redux'

import { SButton } from '../Dishes/styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/check'

import * as S from './styles'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openCheck = () => {
    if (items.length === 0) {
      return
    }
    dispatch(open())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>
                      {' '}
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(item.preco)}
                    </span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Total>
              <S.Prices>Valor total</S.Prices>
              <S.Prices>
                {' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(getTotalPrice(items))}
              </S.Prices>
            </S.Total>
            <SButton onClick={openCheck}>Continuar com a entrega</SButton>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um item para continuar
            com a compra.
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
