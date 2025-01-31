import * as S from './styles'

import vectorImg from '../../assets/images/Vector.png'
import logoImage from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.Vector style={{ backgroundImage: `url(${vectorImg})` }}>
        <S.Div>
          <S.Name>Restaurantes</S.Name>
          <S.Logo src={logoImage} alt="logo da marca" />
          <S.Car role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.Car>
        </S.Div>
      </S.Vector>
    </>
  )
}

export default HeaderPerfil
