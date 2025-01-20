import { Carrinho, Div, Logo, Nome, Vector } from './styles'

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
      <Vector style={{ backgroundImage: `url(${vectorImg})` }}>
        <Div>
          <Nome>Restaurantes</Nome>
          <Logo src={logoImage} alt="logo da marca" />
          <Carrinho onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Carrinho>
        </Div>
      </Vector>
    </>
  )
}

export default HeaderPerfil
